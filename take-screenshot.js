const { chromium } = require('playwright');

async function takeScreenshot() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  console.log('Navigating to https://habr.com/en/articles/895896...');
  await page.goto('https://habr.com/en/articles/895896', { waitUntil: 'networkidle' });

  console.log('Taking full-page screenshot...');
  await page.screenshot({
    path: 'habr-article-895896-screenshot.png',
    fullPage: true
  });

  console.log('Screenshot saved to habr-article-895896-screenshot.png');

  await browser.close();
}

takeScreenshot().catch(error => {
  console.error('Error taking screenshot:', error);
  process.exit(1);
});
