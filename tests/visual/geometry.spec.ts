import { expect, test } from "@playwright/test";
import { gotoHydrated } from "../helpers";

const closeTo = (actual: number | undefined, expected: number, tolerance = 1.25) => {
  expect(actual).toBeDefined();
  expect(Math.abs((actual ?? 0) - expected)).toBeLessThanOrEqual(tolerance);
};

test("1440x900 top-of-listing geometry matches captured reference", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await gotoHydrated(page);

  const title = await page.getByRole("heading", { level: 1 }).boundingBox();
  const hero = await page.getByRole("region", { name: "Property photos" }).boundingBox();

  closeTo(title?.x, 160);
  closeTo(title?.y, 120.8);
  closeTo(title?.height, 30);

  closeTo(hero?.x, 160);
  closeTo(hero?.y, 173.2);
  closeTo(hero?.width, 1120);
  closeTo(hero?.height, 494);
});

test("photo tour uses the captured desktop frame", async ({ page }) => {
  await gotoHydrated(page);
  await page.getByRole("button", { name: "Show all photos", exact: true }).click();

  const photoTour = page.getByRole("dialog", { name: "Photo tour" });
  await expect(photoTour).toBeVisible();
  const dialog = await photoTour.boundingBox();
  closeTo(dialog?.x, 0);
  closeTo(dialog?.y, 0);
  closeTo(dialog?.width, 1440);
  closeTo(dialog?.height, 900);
});
