const { test, expect } = require("@playwright/test");

var userid;

test("get Users API Call", async ({ request }) => {
  const response = await request.get("https://reqres.in/api/users?page=2");
  console.log(await response.json());
  expect(response.status()).toBe(200);
});

test("Create Users API Call", async ({ request }) => {
  const response = await request.post("https://reqres.in/api/users", {
    data: {
      name: "Vishal1",
      job: "QA",
    },
    headers: {
      Accept: "application/json",
    },
  });
  console.log(await response.json());
  expect(response.status()).toBe(201);

  var res = await response.json();
  userid = res.id;
});

test("Update Users API Call", async ({ request }) => {
  const response = await request.put("https://reqres.in/api/users/" + userid, {
    data: {
      name: "Vishal11",
      job: "QA Lead",
    },
    headers: {
      Accept: "application/json",
    },
  });
  console.log(await response.json());
  expect(response.status()).toBe(200);
});

test("Delete User API Call", async ({ request }) => {
  const response = await request.delete(
    "https://reqres.in/api/users/" + userid
  );
  expect(response.status()).toBe(204);
});
