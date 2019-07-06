export default class Tablet {
  constructor() {
    this.container = document.getElementById('app');
  }

  async render() {
    this.container.innerHTML = `<div>Tablet</div>`;
  }
}
