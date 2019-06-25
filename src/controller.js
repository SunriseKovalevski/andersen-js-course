class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    view.on('add', this.addItem.bind(this));
    view.on('toggle', this.toggleItem.bind(this));
    view.on('edit', this.editItem.bind(this));
    view.on('remove', this.removeItem.bind(this));

    view.show(model.items);
  }

  addItem(title) {
    const item = this.model.addItem({
      id: Date.now(),
      title,
      completed: false,
    });

    this.view.addItem(item);
  }

  toggleItem({ id, completed }) {
    const item = this.model.updateItem(id, { completed });

    this.view.toggleItem(item);
  }

  editItem({ id, title }) {
    const item = this.model.updateItem(id, { title });

    this.view.editItem(item);
  }

  removeItem(id) {
    this.model.removeItem(id);
    this.view.removeItem(id);
  }
}

export default Controller;
