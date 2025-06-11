"""Celery task to regenerate embeddings for records within a merge."""

from __future__ import annotations

from celery import shared_task
from django.db import transaction

from conduit.models.embedding import Embedding
from validator.models import Merge
from conduit.utils.embedding_ops import insert_embedding, update_embedding


@shared_task
@transaction.atomic
def regenerate_merge_embeddings(merge_id: int) -> None:
    """Regenerate embeddings for all records in the given merge.

    Parameters
    ----------
    merge_id:
        Identifier of the merge whose canonical embeddings should be
        regenerated.
    """

    merge = Merge.objects.select_related().get(id=merge_id)
    for membership in merge.memberships.select_related('record').all():
        record = membership.record
        # Upsert canonical embedding using merge data
        embedding, created = Embedding.objects.update_or_create(
            record=record,
            merge=merge,
            override=None,
            defaults={"data": merge.canonical_data},
        )
        if created:
            insert_embedding(embedding)
        else:
            update_embedding(embedding)
