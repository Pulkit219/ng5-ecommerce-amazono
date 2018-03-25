import { AngularAmazonooPage } from './app.po';

describe('angular-amazonoo App', () => {
  let page: AngularAmazonooPage;

  beforeEach(() => {
    page = new AngularAmazonooPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
