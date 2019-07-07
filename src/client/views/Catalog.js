import EventEmitter from '../EventEmmiter';
import { createButton, createInput, extendValuesFromInputs } from '../utils';

export default class Catalog extends EventEmitter {
  constructor(model, url, container) {
    super(model, url, container);
    this.model = model;
    this.container = container;
    this.url = url;
  }

  addTablet(inputs) {
    this.emit('addTablet', extendValuesFromInputs(inputs));
  }

  renderAddForm() {
    const formContainer = document.createElement('div');
    const inputsTitle = [
      'title',
      'link',
      'color',
      'sensitivityLvls',
      'resolution',
      'cost',
      'image',
    ];
    const inputs = inputsTitle.map(input => createInput({ id: input, placeholder: input }));
    const button = createButton('Add Tablet', ['btn', 'btn-primary']);
    button.addEventListener('click', () => this.addTablet(inputs));
    inputs.forEach(el => formContainer.appendChild(el));
    formContainer.appendChild(button);
    this.container.appendChild(formContainer);
  }

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
    this.renderAddForm();
  }
}
