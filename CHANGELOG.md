# Changelog

## Unreleased

### Added
- Optional `merge` foreign key on `Embedding` model to track canonical
  vectors.
- Celery task `regenerate_merge_embeddings` to maintain merge-related
  embeddings.
