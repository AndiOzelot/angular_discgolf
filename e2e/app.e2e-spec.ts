import { DiscgolfPage } from './app.po';

describe('discgolf App', () => {
  let page: DiscgolfPage;

  beforeEach(() => {
    page = new DiscgolfPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
