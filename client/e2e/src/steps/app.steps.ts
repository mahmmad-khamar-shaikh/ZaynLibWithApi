import { given, when, then, binding } from 'cucumber-tsflow';
import { expect } from 'chai';

import { AppPage } from '../page-objects/app.po';


@binding()
class AppStepsD {
  page;
  constructor() {
    this.page = new AppPage();
  }

  @given(/^I am on the home page$/, null, 10000)
  public async lendingOnHome() {
    await this.page.navigateTo();
  }
  @when(/^I do nothing$/, null, 10000)
  public doNothing() {
    return;
  }
  @then(/^I should see the title$/, null, 100000)
  public async userShouldSeeTitle() {
    expect(await this.page.getTitleText()).to.equal('Welcome to zyanlib!');
  }
}

// let page: AppPage;

// Before(() => {
//   page = new AppPage();
// });

// Given(/^I am on the home page$/, async () => {
//   await page.navigateTo();
// });

// When(/^I do nothing$/, () => { });

// Then(/^I should see the title$/, async () => {
//   expect(await page.getTitleText()).to.equal('Welcome to zyanlib!');
// });
