import { Demo4Page } from './app.po';

describe('demo4 App', () => {
  let page: Demo4Page;

  beforeEach(() => {
    page = new Demo4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
