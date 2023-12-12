### Установка и настройка Playwright для TypeScript

##### Проверяем версии пакетов node.js
```bash
node --version
npm --version
npx --version
```
##### Инсталляция playwright последней версии
```
npm init playwright@latest
```
##### Если необходимо установить зависимости
```
sudo npx playwright install-deps
```
(как я понял, это для workflow на github)

### Примеры часто используемых команд (внутри рабочей директории)

##### Запуск end-to-end тестов
```
npx playwright test
```
##### Запуск в интерактивном режиме (Starts the interactive UI mode)
```
npx playwright test --ui
```
##### Запуск в установленном в системе Google Chrome
```
npx playwright test --project=chromium
```
##### Запуск определенного файла
 ```
npx playwright test example
 ```
##### Запуск тестов в режиме отладки
```
npx playwright test --debug
```
##### Запуск генератора кода Codegen
```
npx playwright codegen
```
##### Посмотреть файл html c отчетом
```
npx playwright show-report
```

And check out the following files:
  - ./tests/example.spec.ts - Example end-to-end test
  - ./tests-examples/demo-todo-app.spec.ts - Demo Todo App end-to-end tests
  - ./playwright.config.ts - Playwright Test configuration


## Quick Start playwright-tests

#### playwright.config.ts

```typescript
import { defineConfig, devices } from '@playwright/test';


require('dotenv').config();

// See https://playwright.dev/docs/test-configuration.

export default defineConfig({
  // Look for test files in the "tests" directory, relative to this configuration file.
  testDir: './tests',

  //  Run tests in files in parallel
  fullyParallel: true,

  // Fail the build on CI if you accidentally left test.only in the source code.
  forbidOnly: !!process.env.CI,

  // Retry on CI only
  retries: process.env.CI ? 2 : 0,

  // Opt out of parallel tests on CI.
  workers: process.env.CI ? 1 : undefined,

  // Reporter to use.
  reporter: 'html',

  use: {
    baseURL: 'https://demoqa.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      // viewport: { width:1280, height: 720 },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});

```
## Полезные настройки

### Внутри тестов
### В fixture
### В package.json
### В playwright.json

### PageObject example

#### ./pages/home.page.ts
```typescript
import { type Page, type Locator , expect } from '@playwright/test';

class HomePage {
  readonly page: Page;
  readonly url: string;

  constructor(page: Page, baseURL: string) {
    this.page = page;
    this.url = baseURL + '/';
  }

  async load(){
    await  this.page.goto(this.url);
  }
}

export default HomePage;
```
