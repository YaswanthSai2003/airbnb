import { expect, test } from "@playwright/test";
import { gotoHydrated } from "../helpers";

test.describe("listing experience", () => {
  test("loads the listing and opens the photo tour", async ({ page }) => {
    await gotoHydrated(page);

    await expect(
      page.getByRole("heading", {
        level: 1,
        name: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
      }),
    ).toBeVisible();

    await page
      .getByRole("button", {
        name: "Show all photos",
        exact: true,
      })
      .click();

    await expect(
      page.getByRole("dialog", {
        name: "Photo tour",
      }),
    ).toBeVisible();

    await expect(
      page.getByText("Living room 1", {
        exact: true,
      }).first(),
    ).toBeVisible();
  });

  test("lightbox supports next, previous, keyboard arrows and Escape", async ({
    page,
  }) => {
    await gotoHydrated(page);

    await page
      .getByRole("button", {
        name: "Show all photos",
        exact: true,
      })
      .click();

    const photoTour = page.getByRole("dialog", {
      name: "Photo tour",
    });

    await expect(photoTour).toBeVisible();

    const firstTourPhoto = photoTour
      .getByRole("button", {
        name: /Open Living room 1 photo/i,
      })
      .first();

    await firstTourPhoto.click();

    const lightbox = page.getByRole("dialog", {
      name: /photo \d+ of 43/i,
    });

    await expect(lightbox).toBeVisible();

    await expect(
      page.getByText("1 of 43", {
        exact: true,
      }),
    ).toBeVisible();

    await page.keyboard.press("ArrowRight");

    await expect(
      page.getByText("2 of 43", {
        exact: true,
      }),
    ).toBeVisible();

    await page.keyboard.press("ArrowLeft");

    await expect(
      page.getByText("1 of 43", {
        exact: true,
      }),
    ).toBeVisible();

    await page.keyboard.press("Escape");

    await expect(lightbox).toBeHidden();
    await expect(photoTour).toBeVisible();

    await page.keyboard.press("Escape");

    await expect(photoTour).toBeHidden();
  });

  test("photo tour share and save controls are visual only", async ({
    page,
  }) => {
    await gotoHydrated(page);

    /*
     * Save the listing from the main page.
     * Main listing wishlist behaviour remains functional.
     */
    const saveButton = page.getByRole("button", {
      name: "Save to wishlist",
      exact: true,
    });

    await saveButton.click();

    await expect(page.getByRole("status")).toContainText(
      "Saved to wishlist",
    );

    await expect(
      page.getByRole("button", {
        name: "Remove from wishlist",
        exact: true,
      }),
    ).toBeVisible();

    /*
     * Open the Photo Tour.
     */
    await page
      .getByRole("button", {
        name: "Show all photos",
        exact: true,
      })
      .click();

    const photoTour = page.getByRole("dialog", {
      name: "Photo tour",
    });

    await expect(photoTour).toBeVisible();

    /*
     * In the reference Photo Tour these controls look clickable,
     * but they do not perform share/save actions.
     */
    const tourShare = photoTour.getByRole("button", {
      name: "Share photos",
      exact: true,
    });

    const tourSave = photoTour.getByRole("button", {
      name: "Save photos",
      exact: true,
    });

    await expect(tourShare).toBeVisible();
    await expect(tourSave).toBeVisible();

    await tourShare.click();
    await expect(photoTour).toBeVisible();

    await tourSave.click();
    await expect(photoTour).toBeVisible();

    /*
     * Close Photo Tour and verify clicking its visual-only
     * heart did not change the listing's actual saved state.
     */
    await photoTour
      .getByRole("button", {
        name: "Back to listing",
        exact: true,
      })
      .click();

    await expect(photoTour).toBeHidden();

    await expect(
      page.getByRole("button", {
        name: "Remove from wishlist",
        exact: true,
      }),
    ).toBeVisible();
  });

  test("sticky navigation appears after scrolling", async ({ page }) => {
    await gotoHydrated(page);

    await page.evaluate(() => {
      document.documentElement.style.scrollBehavior = "auto";
      window.scrollTo(0, 1800);
    });

    await expect(
      page.getByRole("navigation", {
        name: "Listing sections",
      }),
    ).toBeVisible();

    await expect(
      page.getByRole("link", {
        name: "Reviews",
        exact: true,
      }),
    ).toBeVisible();
  });
});

test(
  "share shows the reference bottom toast and report does not mutate the URL",
  async ({ page }) => {
    await page.goto("/");
    await page.waitForSelector("html[data-app-ready='true']");

    await page
      .getByRole("button", {
        name: "Share this listing",
      })
      .click();

    await expect(page.getByRole("status")).toContainText(
      "Share options",
    );

    await page.evaluate(() => {
      window.scrollTo(0, 2600);
    });

    const before = page.url();

    await page
      .getByRole("button", {
        name: "Report this listing",
      })
      .click();

    await expect(page).toHaveURL(before);
  },
);