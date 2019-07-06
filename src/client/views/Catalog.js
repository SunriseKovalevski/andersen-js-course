export default class Catalog {
  constructor() {
    this.container = document.getElementById('app');
    //  this.url = 'url_be-side-app-all-tablets';
  }

  /*  createRouterLink(link) {
    window.location.hash = link;
  }

  createTabletCard({ title, link, image, ...param }) {
    return `<div class="btn-class-one">
      <a href="/tablets/${link}" class="link">${title}</a>
      <img src="${image}" />
    </div>`;
  }
  */

  async render() {
    //  const data = await fetch(this.url);
    this.container.innerHTML = '<div>Catalog</div>';
    /*   this.container.innerHTML = `<div>${data.map(tablet => createTabletCard(tablet))}</div>`;
     */
  }
}
