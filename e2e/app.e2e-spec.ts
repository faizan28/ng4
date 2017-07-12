import { NgfbPage } from './app.po';

describe('ngfb App', () => {
  let page: NgfbPage;

  beforeEach(() => {
    page = new NgfbPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
