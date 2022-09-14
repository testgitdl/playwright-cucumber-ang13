import { When, Then, After } from "@cucumber/cucumber";
import { page } from '@support/bdd';
import { Dialog } from '@demoApp/demo-app-e2e-api';
import { expect } from 'chai';

let dialog: Dialog;

When('show button from dialog is clicked',
  async () => {
    dialog = new Dialog(page.locator('div > ng-component > div > div:nth-child(2) > div:nth-child(1)'), page);
    await dialog.openDialogButton.click();
  }
);

Then('dialog window contains {string} header title',
  async (header) => {
    const actualHeader = await dialog.getHeaderText();
    expect(actualHeader.trim()).equals(header);
  }
);

Then('dialog window has text in the body',
  async () => {
    const actualHeader = await dialog.getBodyText();
    expect(actualHeader.trim()).not.empty;
  }
);

When('dialog is closed',
  async () => {
    await dialog.closeDialog.click();
  }
);

Then('dialog window is no longer visible',
  async () => {
    expect(await dialog.dialogIsVisible(5000)).equals(false);
  }
);