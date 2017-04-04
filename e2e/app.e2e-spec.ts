import { AngularDataPage } from './app.po';

describe('angular-data App', () => {
  let page: AngularDataPage;

  beforeEach(() => {
    page = new AngularDataPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
