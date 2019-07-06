export default class Catalog {
  constructor(model, url, container) {
    this.model = model;
    this.container = container;
    this.url = url;
  }

  async render() {
    await this.model.getAllTablets(this.url);
    this.container.innerHTML = `<div>${this.model.tablets
      .map(
        tablet =>
          `<div><a class="nav-link client-router" href="/tablets/${tablet.link}">${
            tablet.title
          }</a></div>
      `
      )
      .join('')}
      </div>`;
  }
}
