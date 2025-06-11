# Background Tasks

## regenerate_merge_embeddings

This Celery task ensures that when a `Merge` is created or updated, all
member `Record` objects receive a canonical `Embedding`. These
embeddings have their `merge` foreign key populated so the vector store
can distinguish them from override or raw record vectors.
