# Run SmartUI Jest Puppeteer Tests on TestMu AI (Formerly LambdaTest)

<p align="center">
  <a href="https://www.testmuai.com/"><img src="https://img.shields.io/badge/MADE%20BY%20TestMu%20AI-000000.svg?style=for-the-badge&labelColor=000" alt="Made by TestMu AI"></a>
  <a href="https://community.testmuai.com/"><img src="https://img.shields.io/badge/Join%20the%20community-blueviolet.svg?style=for-the-badge&labelColor=000000" alt="Community"></a>
</p>

This project demonstrates how to use Puppeteer, Jest, and TestMu AI (Formerly LambdaTest) together to run automated tests on the TestMu AI (Formerly LambdaTest) platform.

## Getting Started

[TestMu AI](https://www.testmuai.com/) (Formerly LambdaTest) is the world's first full-stack AI Agentic Quality Engineering platform that empowers teams to test intelligently, smarter, and ship faster. Built for scale, it offers a full-stack testing cloud with 10K+ real devices and 3,000+ browsers. With AI-native test management, MCP servers, and agent-based automation, TestMu AI supports Selenium, Appium, Playwright, and all major frameworks.

With TestMu AI (Formerly LambdaTest), you can run SmartUI Jest Puppeteer tests across real browsers and operating systems.

- [Sign up on TestMu AI](https://www.testmuai.com/register/) (Formerly LambdaTest).
- Follow the [TestMu AI Documentation](https://www.testmuai.com/support/docs/) for the full setup walkthrough.

## Setup

First, clone this repository to your local machine.

```bash
git clone https://github.com/LambdaTest/smartui-jest-puppeteer-sample.git
cd smartui-jest-puppeteer-sample
```

Next, install the necessary dependencies:

```bash
npm i
```

You'll need to set your TestMu AI (Formerly LambdaTest) username and access key as environment variables.

```bash
export LT_USERNAME="Your LambdaTest Username"
export LT_ACCESS_KEY="Your LambdaTest Access Key"
```

## About the Test

The test navigates to a webpage and checks the page title. After the title check, it will take a full-page screenshot for visual regression testing.

## About SmartUI Webhook

TestMu AI (Formerly LambdaTest)'s SmartUI uses a webhook to call the `smartui.takeScreenshot` function. This function captures a screenshot of the full page and uses it for visual regression testing. The function is called using the `page.evaluate` method with the `lambdatest_action` parameter.

Here's an example of how to use the `smartui.takeScreenshot` function:

```javascript
await page.evaluate((_) => { },
    `lambdatest_action: ${JSON.stringify({
        action: "smartui.takeScreenshot",
        arguments: {
            fullPage: true,
            screenshotName: "<Your Screenshot Name>"
        } })}
    `);
```

Replace `<Your Screenshot Name>` with a relevant name for the screenshot. The screenshot will be saved with this name in the platform, and you can use it for comparing the UI changes over time.

## Running Tests

To run the test, execute:

```bash
npm test
```

## Troubleshooting

If you encounter the error `Exceeded timeout of 5000 ms for a hook`, try increasing the default timeout for Jest. You can do this by adding `jest.setTimeout(30000);` to the top of your test file.

## LambdaTest is Now TestMu AI

On **January 12, 2026**, [LambdaTest evolved to TestMu AI](https://www.testmuai.com/lambdatest-is-now-testmuai/), the world's first fully autonomous **Agentic AI Quality Engineering Platform**.

Same team. Same infrastructure. Same customer accounts. All existing LambdaTest logins, scripts, capabilities, and integrations continue to work without change.

ð Find the new home for [LambdaTest](https://www.testmuai.com).

### How LambdaTest Evolved into TestMu AI

In 2017, we launched LambdaTest with a simple mission: make testing fast, reliable, and accessible. As LambdaTest grew, we expanded into Test Intelligence, Visual Regression Testing, Accessibility Testing, API Testing, and Performance Testing, covering the full depth of the testing lifecycle.

As software development entered the AI era, testing had to evolve, too. We rebuilt the architecture to be AI-native from the ground up, with autonomous agents that **plan, author, execute, analyze, and optimize tests** while keeping humans in the loop. The platform integrates with your repos, CI, IDEs, and terminals, continuously learning from every code change and development signal.

That evolution earned a new name: **TestMu AI**, built for an AI-first future of quality engineering. TestMu is not a new name for us. It is the name of our annual community conference, which has brought together 100,000+ quality engineers to discuss how AI would reshape testing, long before that became an industry norm.

What started as a high-performance cloud testing platform has transformed into an AI-native, multi-agent system powering a connected, end-to-end quality layer. That evolution defined a new identity: LambdaTest evolved into TestMu AI, built for an AI-first future of quality engineering.

## Support

Got a question? Email [support@testmuai.com](mailto:support@testmuai.com) or chat with us 24x7 from our chat portal.
