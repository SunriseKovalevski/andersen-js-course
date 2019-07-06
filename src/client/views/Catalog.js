/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
export default class Catalog {
  constructor(model, url, container) {
    this.model = model;
    this.container = container;
    this.url = url;
  }

  renderAddButton(tablet) {
    //    this.model.addNewTablet(tablet);
    const button = document.createElement('button');
    button.classList.add('btn', 'btn-primary');
    button.innerHTML = 'Add Tablet';
    button.addEventListener('click', () => console.log('click'));
    this.container.appendChild(button);
  }

  renderAddForm() {}

  async render() {
    await this.model.getAllTablets(this.url);
    this.container.innerHTML = `<div class="container"><div class="row">${this.model.tablets
      .map(
        ({ link, title, color, sensitivityLvls, resolution, cost, image }) =>
          `<div class="product-layout col-lg-3 col-md-3 col-sm-6 col-xs-12">
          <div class="product-thumb">
            <img src="${image}" />
            <h4><a class="title" href="/tablets/${link}">${title}</a></h4>
            <p>Color: ${color}</p>
            <p>Sensitivity levels: ${sensitivityLvls}</p>
            <p>Resolution: ${resolution}</p>
            <p>Cost: ${cost} BYN</p>
          </div>
          </div>
      `
      )
      .join('')}
      </div></div>`;
    this.renderAddButton();
  }
}
