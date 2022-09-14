import { When, Then, After } from "@cucumber/cucumber";
import { page } from '@support/bdd';
import { Message } from '@demoApp/demo-app-e2e-api'
import { expect } from 'chai';

let info: Message;

After({ tags: '@infobubble' }, async () => {
  const el = page.locator('p-toast-summary');
  await el.waitFor({ state: 'detached', timeout: 11000 });
});

When('{string} button from {string} infobubble is clicked',
  async (infobubble_type, buttonLocation) => {
    if (infobubble_type === 'error') {
      infobubble_type = 'danger';
    }
    if (buttonLocation.includes('second')) {
      info = new Message(page.locator('div > ng-component > div > div:nth-child(2) > div'), page);
    }
    else {
      info = new Message(page.locator('div > ng-component > div > div:nth-child(1) > div'), page);
    }
    await info.clickButton(infobubble_type);
  });

Then('{string} with {string} body is displayed',
  async (infobubble_type, infobubble_body) => {
    await info.getTitle().then(async function (type) {
      await info.getBody().then(function (body) {
        expect(body).equals(infobubble_body);
      });
      expect(type).equals(infobubble_type);
    });
  }
);

