import { NcRedistrictingPage } from './app.po';

describe('nc-redistricting App', function() {
  let page: NcRedistrictingPage;

  beforeEach(() => {
    page = new NcRedistrictingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
