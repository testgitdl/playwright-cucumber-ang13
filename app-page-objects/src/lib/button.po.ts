import { Locator } from 'playwright';

export class Button {

    /**
     * @param el an <button> element
     */

    constructor(public el: Locator) {
    }



    /**
     * Returns the text displayed on the button
     */
    getText(): PromiseLike<string> {
        return this.el.textContent();
    }

    /**
     * Returns the true/false if the button has an icon or not
     */
    hasIcon(): PromiseLike<boolean> {
        return this.el.locator('ocean-svg-icon').nth(0).isVisible();
    }

    /**
    * Clicks on the button
    */
    async click(): Promise<void> {
        await this.el.click();
    }

    /**
     * Returns if the tooltip is displayed
     */
    isTooltipDisplayed(): PromiseLike<boolean> {
        return this.el.getAttribute('title').then(v => v !== '');
    }
    /**
         * Returns if the button is displayed
    */
    async isVisible(): Promise<boolean> {
        let result = false;
        if (await this.el.isVisible) {
            result = true;
        }
        return result;
    }


    /**
     * Returns the tooltip
     */
    getTooltip(): PromiseLike<string> {
        return this.el.getAttribute('title');
    }

    /**
     * Moves mouse over the button
     */
    async moveMouse(): Promise<void> {
        await this.el.hover();
    }

    /**
     * Retuns whether the button is disabled or not
     */
    isDisabled(): Promise<boolean> {
        return this.el.locator('p-button > button').isDisabled();
    }

}
