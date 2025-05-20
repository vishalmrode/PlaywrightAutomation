import { test, expect } from "@playwright/test";

test("API Testing", async ({ request }) => {
  const apiURL = "https://reqres.in/api/users/2";
  const response = await request.get(apiURL);
  const responseBody = await response.json();
  console.log(responseBody);
  expect(response.status()).toBe(200);
  expect(responseBody.data.id).toBe(2);
  expect(responseBody.data.first_name).toBe("Janet");
  expect(responseBody.data.last_name).toBe("Weaver");
  expect(responseBody.data.avatar).toBe(
    "https://reqres.in/img/faces/2-image.jpg"
  );
  expect(responseBody.support.url).toBe(
    "https://contentcaddy.io?utm_source=reqres&utm_medium=json&utm_campaign=referral"
  );
  expect(responseBody.support.text).toBe(
    "Tired of writing endless social media content? Let Content Caddy generate it for you."
  );
});
