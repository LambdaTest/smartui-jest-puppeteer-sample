jest.setTimeout(30000); // 30000 milliseconds = 30 seconds

const puppeteer = require('puppeteer');

const credentials = {
    user: process.env.LT_USERNAME || '<your username>',
    key: process.env.LT_ACCESS_KEY || '<your access key>',
};

const capabilities = {
    'browserName': 'Chrome',
    'browserVersion': 'latest',
    'LT:Options': {
        'platform': 'Windows 10',
        'build': 'Puppeteer Sample Build',
        'name': 'Puppeteer Sample Test',
        'user': credentials.user,
        'accessKey': credentials.key,
        'network': true,
        'video': true,
        'console': true,
        'smartUIProjectName': "Puppeteer-Project"
    }
};

describe('LambdaTest SmartUI Puppeteer Jest Sample', () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.connect({
            browserWSEndpoint: `wss://cdp.lambdatest.com/puppeteer?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
        });
        page = await browser.newPage();
    }, 30 * 1000);

    afterAll(async () => {
        await browser.close();
    });

    test('Check LambdaTest Homepage Title', async () => {
        await page.goto('https://www.lambdatest.com/');
        const title = await page.title();

        try {
            console.log("taking webpage screenshot")
            await page.evaluate((_) => {},
            `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: true, screenshotName: 'webpage' }
            })}`);

            expect(title).toEqual('Next-Generation Mobile Apps and Cross Browser Testing Cloud | LambdaTest');
            await page.evaluate(_ => { }, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'passed', remark: 'Title matched' } })}`)
        } catch {
            await page.evaluate(_ => { }, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'failed', remark: 'Title not matched' } })}`)
        }


    });
});
