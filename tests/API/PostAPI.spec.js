const { test, expect, request } = require("@playwright/test");

test("POST API with authentication and response check", async () => {
  // Create a new APIRequestContext with authentication
  const apiContext = await request.newContext({
    baseURL: "https://example.com/api",
    extraHTTPHeaders: {
      // Replace with your actual auth token or credentials
      Authorization: "Bearer YOUR_ACCESS_TOKEN",
      "Content-Type": "application/json",
    },
  });

  // Define the payload for the POST request
  const payload = {
    name: "John Doe",
    email: "john@example.com",
  };

  // Send the POST request
  const response = await apiContext.post("/users", { data: payload });

  // Check the response status
  expect(response.status()).toBe(201);

  // Parse and check the response body
  const responseBody = await response.json();
  expect(responseBody).toHaveProperty("id");
  expect(responseBody.name).toBe(payload.name);
  expect(responseBody.email).toBe(payload.email);

  // Dispose API context
  await apiContext.dispose();
});
