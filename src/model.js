/* eslint-disable eqeqeq */
/* eslint-disable no-return-assign */
import { EventEmitter } from './helpers';

class Model extends EventEmitter {
  constructor(items = []) {
    super();

    this.items = items;
  }

  getItem(id) {
    return this.items.find(item => item.id == id);
  }

  addItem(item) {
    this.items.push(item);
    this.emit('change', this.items);
    return item;
  }

  updateItem(id, data) {
    const item = this.getItem(id);

    Object.keys(data).forEach(prop => (item[prop] = data[prop]));

    this.emit('change', this.items);

    return item;
  }
}

export default Model;
