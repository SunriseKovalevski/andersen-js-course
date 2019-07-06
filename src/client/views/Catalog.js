export default class Catalog {
  constructor(model, url, container) {
    this.model = model;
    this.container = container;
    this.url = url;
  }

  async render() {
    await this.model.getAllTablets(this.url);
    console.log(this.model.tablets);
    this.container.innerHTML = `<div>
      ${this.model.tablets.map(tablet => `<div>${tablet.title}</div>`).join('')}
    </div>`;
  }
}
