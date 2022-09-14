import { Given, When, Then } from "@cucumber/cucumber";
import { page, startApp } from '@support/bdd';
import { App } from '@demoApp/demo-app-e2e-api'
import { expect } from 'chai';

let demoApp: App;

Given('I am on the main page of the app', async () => {
  await startApp();
})

When('I click {string} widget',
  async (widgetTitle) => {
    demoApp = new App(page.locator('app-main > div'), page);
    await demoApp.getWidget(widgetTitle).click();

  }
);

Then('I see {string} description',
  async (title) => {
    expect((await demoApp.getworkSpaceArea.allTextContents()).toString()).includes(title);

  });

When('I click the TopBar button', async () => {
  await demoApp.getTopBarButton.click();
});

