"""Service layer for merge-related operations."""

from __future__ import annotations

from typing import Any, Iterable

from validator.models import Merge
from pipeline.tasks.merge_embeddings import regenerate_merge_embeddings


class MergeService:
    """Simplified merge service with background task hook."""

    def create(self, canonical_data: dict, records: Iterable[Any]) -> Merge:
        """Create a Merge and enqueue embedding regeneration."""

        merge = Merge.objects.create(canonical_data=canonical_data)
        merge.memberships.bulk_create([
            Merge.memberships.model(merge=merge, record=record)
            for record in records
        ])
        regenerate_merge_embeddings.delay(merge.id)
        return merge

    def update(self, merge: Merge, canonical_data: dict) -> Merge:
        """Update a merge's canonical data and requeue embeddings."""

        merge.canonical_data = canonical_data
        merge.save(update_fields=["canonical_data"])
        regenerate_merge_embeddings.delay(merge.id)
        return merge
