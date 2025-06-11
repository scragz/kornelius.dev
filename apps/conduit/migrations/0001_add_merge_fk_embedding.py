"""Migration introducing optional merge foreign key on Embedding."""

from __future__ import annotations

from django.db import migrations, models


class Migration(migrations.Migration):
    """Add merge foreign key to Embedding model."""

    dependencies = []

    operations = [
        migrations.AddField(
            model_name="embedding",
            name="merge",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=models.SET_NULL,
                related_name="canonical_embeddings",
                to="validator.merge",
            ),
        )
    ]
