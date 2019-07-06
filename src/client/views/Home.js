export default class Home {
  constructor() {
    this.container = document.getElementById('app');
  }

  async render() {
    this.container.innerHTML = `<div>Main Page</div>`;
  }
}
