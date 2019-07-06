import EventEmitter from './EventEmmiter';

export default class TabletModel extends EventEmitter {
  constructor(fetch, items) {
    super();
    this.fetch = fetch;
    this.tablets = items || [];
  }

  async getAllTablets(url) {
    const response = await this.fetch(`http://localhost:3000${url}`);
    const data = await response.json();
    this.tablets = data;
  }

  /* async getTablet(url) {
    const response = await this.fetch(url);
    const data = await response.json();
    
  }  */
}
