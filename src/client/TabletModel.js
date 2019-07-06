/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
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

  async getTablet(url) {
    const tablet = this.tablets.find(
      ({ link }) =>
        link ===
        url
          .split('/')
          .slice(-1)
          .join('')
    );

    if (tablet) return tablet;

    const response = await this.fetch(`http://localhost:3000${url}`);
    const data = await response.json();

    return data;
  }

  async addNewTablet(tablet) {
    const response = await this.fetch('http://localhost:3000/tablets', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: tablet,
    });

    const content = await response.json();
  }

  async deleteTablet() {}
}
