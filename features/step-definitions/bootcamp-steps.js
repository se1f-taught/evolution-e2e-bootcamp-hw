const { Given, When, Then } = require("@wdio/cucumber-framework");

Given("I open the page", async () => {
  await browser.url("https://www.newegg.com/");
});

Then("I refresh the page to close the promo banner", async () => {
  try {
    await $(".modal-Website-img");
    await browser.refresh();
  } catch (error) {
    console.error(error);
  }
});

Given("I entry in the search bar the word {string}", async (word) => {
  const input = await $('[title="Search Site"]');
  await input.setValue(word);
});

When("I click the search", async () => {
  const button = await $(".header2021-search-button");
  await button.click();
  await button.waitForDisplayed({ timeout: 4000 });
});

Then("I check that at least one item appears", async () => {
  const elem = await $(".item-cell");
  await elem.waitForDisplayed({ timeout: 4000 });
});

Given("I open Today's Best Deals tab", async () => {
  const elem = await $(".header2021-portal");
  await elem.click();
  await elem.waitForDisplayed({ timeout: 4000 });
});

When("I click on the Internet shop logo top right corner", async () => {
  const button = await $(
    '[title="Newegg.com - Computer Parts, Laptops, Electronics, HDTVs, Digital Cameras and More!"]'
  );
  await button.click();
});

Then("I check that the main page opened", async () => {
  expect(await browser.getUrl()).toBe("https://www.newegg.com/");
});
