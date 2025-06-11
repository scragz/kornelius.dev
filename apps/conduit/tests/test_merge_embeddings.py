"""Tests for merge embedding regeneration task."""

from __future__ import annotations

import pytest
from django.test import TestCase
from django.contrib.auth import get_user_model

from validator.models import Merge, Record
from pipeline.tasks.merge_embeddings import regenerate_merge_embeddings
from conduit.models.embedding import Embedding


class MergeEmbeddingTests(TestCase):
    """Test behaviour of canonical embedding generation."""

    def setUp(self):
        self.user = get_user_model().objects.create(username="tester")
        self.records = [Record.objects.create(data={"id": i}) for i in range(2)]
        self.merge = Merge.objects.create(canonical_data={"foo": "bar"})
        for record in self.records:
            self.merge.memberships.create(record=record)

    def test_regenerate_creates_embeddings(self):
        regenerate_merge_embeddings(self.merge.id)
        embeddings = Embedding.objects.filter(merge=self.merge)
        assert embeddings.count() == 2
        assert all(e.data == self.merge.canonical_data for e in embeddings)
