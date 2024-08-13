import { test, expect } from "@playwright/test";

test.describe("PacketNest App", () => {
  test("should navigate to home and display hero section", async ({ page }) => {
    await page.goto("/");

    const header = page.locator(".ant-layout-header");
    await expect(header).toBeInViewport();

    const sideNav = page.locator(".ant-layout-sider");
    await expect(sideNav).toBeInViewport();

    const content = page.locator(".ant-layout-content");
    await expect(content).toBeInViewport();

    const footer = page.locator(".ant-layout-footer");
    await expect(footer).toBeInViewport();

    const ctaButton = page.locator("text=Start Exploring Now");
    await ctaButton.click();

    await expect(page).toHaveURL("/package/search");
  });

  test("should perform search and handle pagination", async ({ page }) => {
    await page.goto("/package/search");

    const searchInput = page.locator('input[name="q"]');
    await searchInput.fill("react");

    await page.waitForTimeout(6000);

    const resultsList = page.locator("ul > li > article > h5");
    await expect(resultsList).toHaveCount(5);

    const pagination = page.locator(".ant-pagination-item");
    await expect(pagination).toHaveCount(6);
    await pagination.nth(1).locator("a").click();
    await page.waitForTimeout(6000);
    await expect(page).toHaveURL("/package/search?q=react&page=2");
    await page.waitForTimeout(6000);
    const newResultsList = page.locator("ul > li > article > h5");
    await expect(newResultsList).toHaveCount(5);
  });

  test("should sort search results", async ({ page }) => {
    await page.goto("/package/search");

    const searchInput = page.locator('input[name="q"]');
    await searchInput.fill("react");

    await page.waitForTimeout(6000);

    const sortSelect = page.locator(".ant-select");
    await sortSelect.click();

    const sortStarSelect = page.locator('div[aria-label="Stars"]');
    await sortStarSelect.click();
    await expect(page).toHaveURL("/package/search?q=react&sort=stars");
    await page.waitForTimeout(6000);
    const newResultsList = page.locator("ul > li > article > h5");
    await expect(newResultsList).toHaveCount(5);
  });
});
