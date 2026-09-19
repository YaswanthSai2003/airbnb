# AI-Assisted Development Prompt Log

## Project
PlayPower Labs Airbnb Listing Clone

## 01 — Plan the implementation
Design an original Next.js/React/TypeScript implementation for the supplied Airbnb listing recreation. Prioritize pixel fidelity, behavioral parity, accessibility, keyboard navigation, performance, automated verification, and production-quality structure. Do not invent unrelated product features.

## 02 — Analyze supplied screenshots
Treat the supplied screenshots as the visual source of truth. Identify the listing layout, sticky navigation, review/location/host/nearby sections, Photo Tour, Lightbox, hover states, and scroll behavior.

## 03 — Measure rendered output
Record rendered bounding rectangles and computed visual properties from the already-rendered reference page. Use those values only as visual targets; do not copy application source code.

## 04 — Lock the desktop frame
Use the captured 1440×900 measurements to lock the header, title/actions, 1120×494 hero, 652/96/372 content grid, typography, spacing, borders, radii, and shadows.

## 05 — Complete the listing page
Recreate the property summary, Guest Favourite card, host row, highlights, translated-description block, sleeping gallery, amenities, calendar, booking card, reviews, location, host profile, things to know, and nearby stays.

## 06 — Implement Photo Tour
Create the full-screen Photo Tour with the measured 88px top bar, 976px content column, room navigator, wide/pair image mosaic pattern, smooth room navigation, reference-matched top controls, and accessible back behavior.

## 07 — Implement Lightbox
Create a full-screen photo viewer with category title, image counter, grid/back control, close button, previous/next controls, object-contained media, adjacent-image preloading, ArrowLeft/ArrowRight support, Escape behavior, focus trap/restore, and body scroll locking.

## 08 — Accessibility review
Verify semantic headings, button labels, focus order, focus trapping/restoration, Escape behavior, keyboard arrows, keyboard reachability, reduced-motion handling, and serious/critical axe violations.

## 09 — Automated verification
Add Playwright tests for required flows and geometry assertions for the captured 1440×900 reference frame. Keep interaction, accessibility, and geometry checks separate enough to diagnose regressions quickly.

## 10 — Production handoff
Prepare a clean repository, README, AI workflow notes, automated checks, and a target production architecture diagram without adding an unnecessary backend to the take-home implementation.

## 11 — Visual refinement
Use side-by-side localhost/reference screenshots as acceptance tests. Refine calendar states, review-category icons, topic chips, amenities, typography, scroll positions, map composition, nearby-stay cards, and Photo Tour layout while preserving already-correct geometry.

## 12 — Final behavior alignment
Match the final observed interaction details: Photo Tour share/heart controls remain visual pointer controls, main listing save state remains functional, sticky section targets use the correct offset, review expansion matches the reference flow, and Report this listing does not mutate the URL.

## 13 — Final verification
Run:

```bash
npm run lint
npm run build
npm test
```

Confirm all checks pass before packaging the submission without `node_modules`, `.next`, test output, environment files, or development-only reference-capture scripts.
