import { test, expect } from "@playwright/test";

test("applies the correct cookies in the correct order", async ({ page }) => {
  const response = await page.request.get("/api/set-cookies");
  expect(response.status()).toBe(200);

  const response2 = await page.request.get("/api/check-cookies");
  expect(response2.status()).toBe(200);
});
