import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { gotoHydrated } from "../helpers";

test("listing has no serious or critical axe violations", async ({ page }) => {
  await gotoHydrated(page);
  const results = await new AxeBuilder({ page }).analyze();
  const serious = results.violations.filter((violation) =>
    ["serious", "critical"].includes(violation.impact ?? ""),
  );
  expect(serious).toEqual([]);
});

test("photo tour and lightbox retain keyboard-focusable controls", async ({ page }) => {
  await gotoHydrated(page);
  await page.getByRole("button", { name: "Show all photos", exact: true }).click();
  await expect(page.getByRole("button", { name: "Back to listing" })).toBeFocused();

  await page
    .getByRole("dialog", { name: "Photo tour" })
    .getByRole("button", { name: /Open Living room 1 photo/i })
    .first()
    .click();

  await expect(page.getByRole("button", { name: "Close photo" })).toBeFocused();
});
