import { Locator, Page } from 'playwright';

export class Dialog {

  /**
   * @param el an <dialog> element
   */
  constructor(public el: Locator, public page: Page) {
    this.headerEl = el.locator('p-dialog > div > div > div.p-dialog-header');
    this.bodyEl = el.locator('p-dialog > div > div > div.p-dialog-content > p');
  }

  private headerEl: Locator;
  private bodyEl: Locator;
  /**
   * Returns if the dialog is visible or not
   */
  async isVisible(): Promise<boolean> {
    return (await this.el.locator('ocean-header').isVisible({ timeout: 3000 }));
  }

  /**
   * Returns the header text
   */
  getHeaderText(): PromiseLike<string> {
    return this.headerEl.textContent();
  }

  /**
   * Returns the body text
   */
  getBodyText(): PromiseLike<string> {
    return this.bodyEl.textContent();
  }

  /**
   * Close the dialog
   */
  get closeDialog(): Locator {
    return this.el.locator('span.p-dialog-header-close-icon');
  }


  get openDialogButton(): Locator {
    return this.el.locator('div > div > button');
  }
  /**
   * Waits until dialog is closed or timeout reached
   */
  async dialogIsVisible(timeout: number): Promise<boolean> {
    await this.page.waitForTimeout(timeout);
    return this.bodyEl.isVisible();

  }

}
