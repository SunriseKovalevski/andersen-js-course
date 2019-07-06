import UrlPattern from 'url-pattern';
import fetch from 'unfetch';
import { createBrowserHistory } from 'history';
import Home from './views/Home';
import Catalog from './views/Catalog';
import Tablet from './views/Tablet';
import TabletModel from './TabletModel';
import TabletController from './TabletController';

const container = window.document.getElementById('app');
const history = createBrowserHistory();

const tablets = new TabletModel(fetch);

const mathPages = pathname => {
  const mainPage = {
    url: new UrlPattern('/'),
    view: Home,
    model: () => {},
    controller: () => {},
  };
  const tabletsPage = {
    url: new UrlPattern('/tablets'),
    view: Catalog,
    model: tablets,
    controller: TabletController,
  };
  const tabletPage = {
    url: new UrlPattern('/tablets(/:id)'),
    view: Tablet,
    model: tablets,
    controller: TabletController,
  };

  return [mainPage, tabletsPage, tabletPage].filter(({ url }) => url.match(pathname))[0];
};

history.listen(async location => {
  const { view: View, model: pageModel } = mathPages(location.pathname);
  const pageView = new View(pageModel, location.pathname, container);
  await pageView.render();
});

window.addEventListener('click', e => {
  if (e.target.matches('a')) {
    const href = e.target.getAttribute('href');
    // local url
    if (href.startsWith('/')) {
      history.push(href);
      e.preventDefault();
    }
  }
});

window.addEventListener('load', () => history.push(window.location.pathname));
