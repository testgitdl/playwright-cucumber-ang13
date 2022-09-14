import { Locator, Page } from 'playwright';

export class Message {

  /**
   * @param el an <infobubble> element
   */
  constructor(private el: Locator, public page: Page) {
    if (el.toString().includes('2')) {
      this.titleEl = el.locator('p-messages > div > div > div > span.p-message-summary');
      this.bodyEl = el.locator('p-messages > div > div > div > span.p-message-detail');
    }
    else {
      this.titleEl = el.locator('p-toast > div > p-toastitem > div > div > div > div.p-toast-summary');
      this.bodyEl = el.locator('p-toast > div > p-toastitem > div > div > div > div.p-toast-detail');
    }
  }

  private bodyEl: Locator;
  private titleEl: Locator;

  /**
   * Returns the infobubble title
   */
  getTitle(): PromiseLike<string> {
    return this.titleEl.textContent();
  }

  /**
   * Returns the infobubble content
   */
  getBody(): PromiseLike<string> {
    return this.bodyEl.textContent();
  }

  async clickButton(buttonName: string): Promise<void> {
    await this.el.locator('button.p-button-' + buttonName).click();
  }
}
