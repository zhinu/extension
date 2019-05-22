import { After, Before, Status, setDefaultTimeout, World } from 'cucumber';
import puppeteer, { Browser, Page } from 'puppeteer';
import path from 'path';

setDefaultTimeout(60 * 1000);

const CRX_PATH = path.resolve(process.cwd(), 'build', 'dev');

const config = {
  screenshotPath: path.resolve(process.cwd(), 'test', 'screenshots')
};

export interface BubbleWorld extends World {
  browser?: Browser;
  page?: Page;
}

export interface InitializedBubbleWorld extends BubbleWorld {
  browser: Browser;
  page: Page;
}

Before(async function(this: BubbleWorld) {
  this.browser = await puppeteer.launch({
    headless: false,
    args: [
      '--no-sandbox',
      '--disable-dev-shm-usage',
      `--disable-extensions-except=${CRX_PATH}`,
      `--load-extension=${CRX_PATH}`
    ],
    ignoreHTTPSErrors: true
  });
  const background = await this.browser.newPage();
  await background.goto(
    'chrome-extension://iddjnlppdcfkhliebhkhbidlhemoncon/background.html',
    { waitUntil: 'networkidle0' }
  );

  this.page = await this.browser.newPage();
  await background.close();
});

After(async function(this: BubbleWorld, scenario) {
  if (scenario.result.status === Status.FAILED && this.page) {
    const screenShotName = scenario.pickle.name.replace(/[\W_]+/g, '-');
    await this.page.screenshot({
      path: `${config.screenshotPath}/error/${screenShotName}.png`
    });
  }
});
