import UrlPattern from 'url-pattern';
import fetch from 'unfetch';
import Home from './views/Home';
import Catalog from './views/Catalog';
import Tablet from './views/Tablet';
import TabletModel from './TabletModel';
import TabletController from './TabletController';

// Добавить 404 страницу если не сматчилось
const mathPages = pathname => {
  const mainPage = {
    url: new UrlPattern('/'),
    view: Home,
    model() {},
    controller() {},
  };
  const tabletsPage = {
    url: new UrlPattern('/tablets'),
    view: Catalog,
    model: TabletModel,
    controller: TabletController,
  };
  const tabletPage = {
    url: new UrlPattern('/tablets(/:id)'),
    view: Tablet,
  };

  return [mainPage, tabletsPage, tabletPage].filter(({ url }) => url.match(pathname))[0];
};

const router = async () => {
  const { view: View, model: Model } = mathPages(window.location.pathname);
  const pageModel = new Model(fetch);
  const pageView = new View(
    pageModel,
    window.location.pathname,
    window.document.getElementById('app')
  );

  await pageView.render();
};

// Listen on hash change:
window.addEventListener('pushState', router);

// Listen on page load:
window.addEventListener('load', router);

function initClientRouterLinks() {
  const links = window.document.querySelectorAll('.client-router');
  links.forEach(link =>
    link.addEventListener('click', ev => {
      ev.preventDefault();
      ev.stopPropagation();
      window.history.pushState('', '', ev.target.href);
      router();
    })
  );
}

initClientRouterLinks();
