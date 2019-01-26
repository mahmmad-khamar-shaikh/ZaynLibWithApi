import { browser, element, by } from 'protractor';

export class AppPage {
  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }
  navigateTo() {
    return browser.get('/');
  }

}
