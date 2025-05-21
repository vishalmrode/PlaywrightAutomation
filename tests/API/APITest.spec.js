import { test, expect } from "@playwright/test";

test.describe("API Testing Suite", () => {
  const apiURL = "https://api.practicesoftwaretesting.com";

  test("GET request for products", async ({ request }) => {
    const response = await request.get(apiURL + "/products");
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody.data.length).toBe(9);
    expect(responseBody.total).toBe(50);
  });

  test("POST request for user login", async ({ request }) => {
    const response = await request.post(apiURL + "/users/login", {
      data: {
        email: "customer@practicesoftwaretesting.com",
        password: "welcome01",
      },
    });
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log(responseBody);
  });
});
