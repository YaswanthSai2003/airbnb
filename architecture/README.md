# Production architecture

`production-architecture.svg` is the requested target production architecture.

The take-home implementation in this repository is intentionally frontend-only because the reference interaction does not require a backend. The diagram shows how the same experience would be operated at production scale: CDN/edge delivery, Next.js web tier, API/BFF, domain services, PostgreSQL, Redis, search, object storage, async workers, observability, CI/CD, and horizontal scaling.
