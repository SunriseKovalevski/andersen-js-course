import EventEmitter from '../EventEmmiter';
import { createButton, createInput, extendValuesFromInputs } from '../utils';

export default class Tablet extends EventEmitter {
  constructor(model, url, container, history) {
    super();
    this.model = model;
    this.container = container;
    this.url = url;
    this.history = history;
  }

  deleteTablet() {
    this.emit('deleteTablet', this.url);
  }

  editeTablet(inputs) {
    this.emit('editeTablet', this.url, extendValuesFromInputs(inputs));
  }

  renderEditorPanel(data) {
    const formContainer = document.createElement('div');
    const inputs = Object.keys(data).map(key => createInput({ id: key, value: data[key] }));
    const buttonEdit = createButton('Edit', ['btn', 'btn-warning']);
    const buttonDelete = createButton('Delete', ['btn', 'btn-danger']);

    buttonDelete.addEventListener('click', () => this.deleteTablet(inputs));
    buttonEdit.addEventListener('click', () => this.editeTablet(inputs));

    inputs.forEach(el => formContainer.appendChild(el));
    formContainer.appendChild(buttonEdit);
    formContainer.appendChild(buttonDelete);
    this.container.appendChild(formContainer);
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

    this.renderEditorPanel({ link, title, color, sensitivityLvls, resolution, cost, image });
  }
}
