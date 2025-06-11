"""Helper utilities for embedding operations.

These functions handle create/update logic for embeddings. In this
simplified implementation we accept an optional ``merge`` keyword to
mark embeddings derived from canonical merge data.
"""

from __future__ import annotations

from typing import Optional

from conduit.models.embedding import Embedding


def insert_embedding(record, data, *, merge=None, override=None) -> Embedding:
    """Create a new embedding instance.

    Parameters
    ----------
    record:
        Related record instance.
    data:
        Vector payload or metadata.
    merge:
        Optional merge instance the embedding belongs to.
    override:
        Optional override instance if coming from manual override.
    """

    embedding = Embedding.objects.create(
        record=record,
        merge=merge,
        override=override,
        data=data,
    )
    return embedding


def update_embedding(embedding: Embedding, *, data=None) -> Embedding:
    """Update an existing embedding with new data."""

    if data is not None:
        embedding.data = data
    embedding.save()
    return embedding
