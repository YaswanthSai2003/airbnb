# PlayPower Labs — Airbnb Listing Clone

Desktop-focused recreation of the provided Airbnb listing reference, built as an original Next.js application with a focus on visual fidelity, interaction parity, accessibility, and clean project structure.

## Live Demo

[Live](https://airbnb-one-rouge.vercel.app/)

## Stack

* Next.js 16 / React 19
* TypeScript
* Tailwind CSS 4
* Playwright
* axe-core

## Implemented Views

* Listing Page
* Full-screen Photo Tour
* Full-screen Lightbox

## Key Interactions

* Listing Save / Saved state with wishlist feedback
* Listing Share feedback
* Hero gallery entry into the Photo Tour
* Room/category navigation inside the Photo Tour
* Photo Tour share and heart controls
* Lightbox opened from Photo Tour images
* Previous / Next photo controls
* `ArrowLeft` / `ArrowRight` keyboard navigation
* `Escape` closes the Lightbox back to the Photo Tour, then the Photo Tour back to the listing
* Focus trapping and focus restoration for modal experiences
* Body scroll locking while overlays are open
* Sticky section navigation
* Amenities dialog
* Desktop hover, active, and focus states
* Reduced-motion support

## Run Locally

```bash
npm ci
npm run dev
```

Open:

```text
http://localhost:3000
```

Install the Playwright Chromium browser once if required:

```bash
npx playwright install chromium
```

## Verification

```bash
npm run lint
npm run build
npm test
```

Additional test suites:

```bash
npm run test:e2e
npm run test:a11y
npm run test:visual
```

The final local verification passed linting, the production build, accessibility checks, interaction tests, and Playwright geometry checks.

## Fidelity Process

The interface was independently reconstructed from the provided reference and its observable rendered behavior.

Visual measurements were used to calibrate layout geometry, typography, spacing, borders, radii, shadows, image placement, and overlay dimensions. No reference application source code was copied or reused.

The primary verification viewport is `1440 × 900`.

Key visual targets include:

* 1120 px listing content width
* 494 px hero height
* 560 / 272 / 272 hero columns
* 8 px hero gaps
* 652 / 96 / 372 main-content grid
* 976 px Photo Tour content width

The reference uses `Airbnb Cereal VF`. This repository does **not** redistribute that proprietary font. The implementation uses Inter through `next/font/google` with system fallbacks and metric tuning.

Required listing media and UI assets are packaged locally under `public/images`, allowing the submitted application to run independently of the reference application.

## Architecture

Production architecture documentation is available in:

* `architecture/production-architecture.svg`
* `architecture/production-architecture.png`
* `architecture/README.md`

The submitted clone is frontend-only because the required reference experience does not require a backend.

The accompanying architecture diagram separately describes a production-scale vacation-rental marketplace architecture covering frontend delivery, backend services, data storage, caching, search, asynchronous processing, and deployment.

## AI-Assisted Workflow

AI-assisted development was used throughout implementation, refinement, testing, accessibility review, and visual-fidelity validation.

The development prompt sequence and refinement workflow are documented in:

* `PROMPT_SEQUENCE.md`

Project-level AI instructions are included in:

* `AGENTS.md`
* `CLAUDE.md`

Specialized sub-agent configurations are included under:

```text
.claude/agents/
```

They cover:

* Visual fidelity review
* Accessibility review
* Code quality review
* Testing and interaction verification

## Notes

* Desktop fidelity is intentionally prioritized because the assignment scope specifies desktop only.
* The application is componentized and the required interactions are implemented within this repository.
* `reference/REFERENCE_MEASUREMENTS.md` documents visual measurements used during calibration.
* The implementation is original and does not contain copied source code from the reference application.
