import { TestmePage } from './app.po';

describe('testme App', function() {
  let page: TestmePage;

  beforeEach(() => {
    page = new TestmePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
