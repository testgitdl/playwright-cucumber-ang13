import { Locator, Page } from 'playwright';

export class App {

    constructor(private el: Locator, public page: Page) {
        this.page = page;
        this.widget = this.el.locator('app-menu > div > ul > li:nth-child(2) > ul');
    }

    private widget: Locator;

    getWidget(appName: string): Locator {
        return this.widget.locator('li >> text=' + appName);
    }

    get getTopBarButton(): Locator {
        return this.page.locator('app-topbar > div > a.p-link.layout-menu-button.layout-topbar-button');
    }

    get getworkSpaceArea(): Locator {
        return this.el.locator('ng-component > div.grid > div');
    }

}
