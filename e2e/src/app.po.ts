import { browser, by, element } from "protractor";

export class AppPage {
  navigateTo(): Promise<unknown> {
    browser.waitForAngularEnabled(false);
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText() {
    const selector = by.css("app-root .content span");
    return element(selector).getText();
  }
}
