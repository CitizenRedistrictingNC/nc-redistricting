import { browser, element, by } from 'protractor/globals';

export class NcRedistrictingPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
