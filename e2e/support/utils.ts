import { Before, BeforeAll, AfterAll, After, setDefaultTimeout, Status } from "@cucumber/cucumber";
import { chromium, firefox, Locator } from "playwright";
import { Browser, Page, BrowserContext, webkit } from "playwright";
// import { DUI } from '@canonpp/duif-e2e-api';
import { expect } from 'chai';

// export let dui: DUI;
export let browser: Browser;
export let page: Page;

export let context: BrowserContext;
const BASE_URL_CHROME = 'http://localhost:4200';
const BASE_URL_EDGE = 'http://localhost:4200';
const BASE_URL_FIREFOX = 'http://localhost:4200';
const BASE_URL_SAFARI = 'http://10.40.16.132:4200';

export let url: string;
export let consoleLogs: string[] = [];
export let browserName: string;

setDefaultTimeout(120000);

const configChrome = {
  slowMo: 0,
  headless: false,
  channel: 'chrome',
  args: [
    '--no-sandbox',
    '--no-zygote'
  ]
};

const configEdge = {
  slowMo: 0,
  headless: false,
  channel: "msedge",
  args: [
    "--no-sandbox",
    "--no-zygote"
  ]
};

const configFirefox = {
  slowMo: 0,
  args: ['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream'],
  headless: false,
  firefoxUserPrefs: {
    'media.navigator.streams.fake': true,
    'media.navigator.permission.disabled': true,
  }
};

const configSafari = {
  slowMo: 0,
  headless: false,
  args: ["--start-maximized", "--no-sandbox", "--disable-web-security"]
}

// launch the browser
BeforeAll(async function () {
  browserName = 'firefox';
  switch (browserName) {
    case 'firefox':
      url = BASE_URL_FIREFOX;
      browser = await chromium.launch({
        headless: false,
        channel: "chrome"
      });
      break;
    case 'chrome':
      url = BASE_URL_CHROME;
      browser = await chromium.launch(configChrome);
      break;
    case 'edge':
      url = BASE_URL_EDGE;
      browser = await chromium.launch(configEdge);
      break;
    case 'safari':
      url = BASE_URL_SAFARI;
      browser = await webkit.launch(configSafari);
      break;
    default:
      browserName = 'chrome';
      url = BASE_URL_CHROME;
      browser = await chromium.launch(configChrome);
  }
});

// close the browser
AfterAll(async function () {
  await browser?.close();
});

// Create a new browser context and page per scenario
Before(async function (scenario) {
  context = await browser.newContext();
  page = await context.newPage();
  await page.goto(url);
  // await page.setViewportSize({ width: 1920, height: 1080 });
  // dui = new DUI(page);
});

// Cleanup after each scenario
After(async function () {
  await page?.close();
  await context?.close();
});

After(async function (scenario) {
  if (scenario.result.status === Status.FAILED) {
    const scenarioName = scenario.pickle.name.replace(/ /g, '');
    var buffer = await page.screenshot({ path: `e2e/screenshots/${scenarioName}.png`, fullPage: true })
    this.attach(buffer, 'image/png');
  }
});
// export async function waitForCount(el: Locator, timeout: number, count: number): Promise<number> {
//   let newTimeout = timeout;
//   while ((newTimeout > 0) && ((await el.count()) !== count)) {
//     newTimeout = newTimeout - 500;
//     await page.waitForTimeout(500);
//   }
//   return await el.count();
// }

export async function startApp() {
  const found_title = await page.locator('body > app-root > app-main > div > app-topbar > div > a.layout-topbar-logo > span').textContent();
  expect(found_title.trim()).equals('Demo Application');
}