export default class Tablet {
  constructor(model, url, container) {
    this.model = model;
    this.container = container;
    this.url = url;
  }

  async render() {
    const tablet = await this.model.getTablet(this.url);

    this.container.innerHTML = `<div>${tablet.title}</div>`;
  }
}
