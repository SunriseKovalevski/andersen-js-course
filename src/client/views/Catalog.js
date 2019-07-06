export default class Catalog {
  constructor() {
    this.container = document.getElementById('app');
    //  this.url = 'url_be-side-app-all-tablets';
  }

  async render() {
    this.container.innerHTML = `<div>Catalog</div>`;
  }
}
