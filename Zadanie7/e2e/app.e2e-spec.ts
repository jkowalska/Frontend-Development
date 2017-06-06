import { CompFilmAngPage } from './app.po';

describe('comp-film-ang App', () => {
  let page: CompFilmAngPage;

  beforeEach(() => {
    page = new CompFilmAngPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
