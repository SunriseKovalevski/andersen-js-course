import UrlPattern from 'url-pattern';
import Home from './views/Home';
import Catalog from './views/Catalog';
import Tablet from './views/Tablet';

// Добавить 404 страницу если не сматчилось
const mathPages = pathname => {
  const mainPage = {
    url: new UrlPattern('/'),
    view: Home,
  };
  const tabletsPage = {
    url: new UrlPattern('/tablets'),
    view: Catalog,
  };
  const tabletPage = {
    url: new UrlPattern('/tablets(/:id)'),
    view: Tablet,
  };

  return [mainPage, tabletsPage, tabletPage].filter(({ url }) => url.match(pathname))[0];
};

const router = async () => {
  const { view: View } = mathPages(window.location.pathname);
  const pageView = new View();
  await pageView.render();
};

// Listen on hash change:
window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);
