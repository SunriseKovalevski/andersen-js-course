/* eslint-disable no-unused-vars */
export default class Tablet {
  constructor(model, url, container) {
    this.model = model;
    this.container = container;
    this.url = url;
  }

  async render() {
    const {
      link,
      title,
      color,
      sensitivityLvls,
      resolution,
      cost,
      image,
    } = await this.model.getTablet(this.url);

    this.container.innerHTML = `<div class="container">
    <h1 class="title">${title}</h1>
    <div class="row">
      <div class="col">
        <img src="${image}" />
      </div>
      <div class="col">
        <p>Color: ${color}</p>
        <p>Sensitivity levels: ${sensitivityLvls}</p>
        <p>Resolution: ${resolution}</p>
        <p>Cost: ${cost} BYN</p>
      </div>
    </div>
    </div>`;
  }
}
