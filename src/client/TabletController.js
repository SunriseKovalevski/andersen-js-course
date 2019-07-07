export default class TabletController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    view.on('addTablet', this.addTablet);
    view.on('deleteTablet', this.deleteTablet);
    view.on('editeTablet', this.editeTablet);
  }

  addTablet = async tablet => {
    await this.model.addNewTablet(tablet);
    this.view.render();
  };

  deleteTablet = async tabletUrl => {
    await this.model.deleteTablet(tabletUrl);
    this.view.history.push('/tablets');
  };

  editeTablet = async (tabletUrl, tabletData) => {
    await this.model.updateTablet(tabletUrl, tabletData);
    this.view.render();
  };
}
