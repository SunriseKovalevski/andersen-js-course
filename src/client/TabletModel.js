/* eslint-disable no-shadow */
/* eslint-disable no-else-return */
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

    if (tablet) {
      return tablet;
    } else {
      const response = await this.fetch(`http://localhost:3000${url}`);
      const tablet = await response.json();

      return tablet;
    }
  }
}
