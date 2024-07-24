import { test, expect } from "@playwright/test";

test("Count the flights", async ({ page }) => {
  // Navigate to MakeMyTrip website
  await page.goto("https://www.makemytrip.com/");

  // Close login popup if present
  await page.waitForSelector(".modalMain.tcnFooter", { state: "visible" });
  await page.click(".commonModal__close");

  // Select flights
  await page.click("text=Flights");

  // Enable the field by removing the read only attribute in 'from' field
  await page.evaluate(() => {
    const inputElement = document.querySelector("#fromCity");
    if (inputElement) {
      inputElement.removeAttribute("readonly");
    }
  });

  // Enter from city
  await page.waitForSelector("#fromCity", { state: "visible" });
  await page.fill("#fromCity", "Mumbai");
  await page.click("text=Mumbai, India");

  // Enable the field by removing the read only attribute in 'to' field
  await page.evaluate(() => {
    const inputElement = document.querySelector("#toCity");
    if (inputElement) {
      inputElement.removeAttribute("readonly");
    }
  });

  // Enter to city
  await page.waitForSelector("#toCity", { state: "visible" });
  await page.fill("#toCity", "Delhi");
  await page.click("text=Delhi, India");

  // Enable the field by removing the read only attribute in 'departure' field
  await page.evaluate(() => {
    const inputElement = document.querySelector("#departure");
    if (inputElement) {
      inputElement.removeAttribute("readonly");
    }
  });

  // Select departure date
  await page.getByLabel("Sat Aug 10").getByText("10").click();

  // Enable the field by removing the read only attribute in 'search' button
  await page.evaluate(() => {
    const inputElement = document.querySelector(
      ".primaryBtn.font24.latoBold.widgetSearchBtn"
    );
    if (inputElement) {
      inputElement.removeAttribute("readonly");
    }
  });

  // Search for flights
  await page.getByText("Search").click();

  // Wait for flight search results to load
  await expect(page.getByText('Flights from Mumbai to New Delhi')).toBeVisible();

  await page.waitForLoadState("networkidle");
  // //history.go();
  // setTimeout(() => {
  //   document.location.reload();
  // }, 30000);

  // Count number of flights
  const flightCount = await page.$$eval(
    ".clusterContent",
    (flights) => flights.length
  );
  console.log(`Number of flights found: ${flightCount}`);
});
