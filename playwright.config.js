const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({

  reporter: [
    ['list'],
    ['html', {
      outputFolder: 'playwright-report',
      open: 'never'
    }]
  ],

  use: {
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry'
  }
});