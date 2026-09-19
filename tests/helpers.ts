import type { Page } from "@playwright/test";

export async function gotoHydrated(page: Page) {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await page.waitForFunction(
    () => document.documentElement.dataset.appReady === "true",
    undefined,
    { timeout: 30_000 },
  );
}
