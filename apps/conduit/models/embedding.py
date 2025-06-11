"""Embedding model with canonical merge FK.

This module defines the Embedding model used for vector storage in the
Conduit RAG system. It contains a new optional foreign key to the
``Merge`` model so that we can trace which embeddings originate from
canonical merge data.
"""

from __future__ import annotations

from django.db import models


class Embedding(models.Model):
    """Vector embedding for a single piece of data."""

    record = models.ForeignKey(
        'validator.Record',
        on_delete=models.CASCADE,
        related_name='embeddings',
    )
    override = models.ForeignKey(
        'conduit.Override',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='embeddings',
    )
    # new field as per step 3
    merge = models.ForeignKey(
        'validator.Merge',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='canonical_embeddings',
    )

    data = models.JSONField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        app_label = 'conduit'

    def __str__(self) -> str:
        return f"Embedding {self.id} for record {self.record_id}"
