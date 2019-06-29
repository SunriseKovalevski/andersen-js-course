/* eslint-disable import/no-unresolved */
/* eslint-disable import/named */
/* eslint-disable no-alert */
import { drop, allowDrop, findFreeCell, createListItem } from './helpers';
import EventEmitter from './EventEmitter';

class View extends EventEmitter {
  constructor() {
    super();
    this.buttonItem = document.getElementById('buttonItem');
    this.listItems = document.getElementsByClassName('itemCell');
    this.listRecipes = document.getElementsByClassName('recipeCell');
    this.listCraft = document.getElementsByClassName('craftCell');
    this.trashcan = document.querySelector('img');
    this.addEventsListener();
  }

  craftItem(item) {
    if (item === null) alert('Ингридиенты подобраны неверно');
    else {
      const newItem = createListItem(item);
      newItem.className = 'item';
      findFreeCell(this.listItems).appendChild(newItem);
    }
  }

  craftItemHandler() {
    const recipe = document.querySelector('.craftCell p[class = "recipe"]');
    const items = document.querySelectorAll('.craftCell p[class = "item"]');
    if (recipe && items) this.emit('craftItem', { recipe, items });
    else alert('Невозможно создать предмет');
  }

  deleteHandler(ev) {
    ev.preventDefault();
    this.emit('delete', ev);
  }

  // eslint-disable-next-line class-methods-use-this
  deleteElement(ev) {
    const data = ev.dataTransfer.getData('text');
    document.getElementById(data).parentElement.removeChild(document.getElementById(data));
  }

  addEventsListener() {
    this.buttonItem.addEventListener('click', this.craftItemHandler.bind(this));
    this.trashcan.addEventListener('drop', this.deleteHandler.bind(this));
    this.trashcan.addEventListener('dragover', allowDrop);
    Array.from(this.listItems).forEach(cell => {
      cell.addEventListener('drop', drop);
      cell.addEventListener('dragover', allowDrop);
    });
    Array.from(this.listRecipes).forEach(cell => {
      cell.addEventListener('drop', drop);
      cell.addEventListener('dragover', allowDrop);
    });
    Array.from(this.listCraft).forEach(cell => {
      cell.addEventListener('drop', drop);
      cell.addEventListener('dragover', allowDrop);
    });
  }

  show(items, recipes) {
    items.forEach(item => {
      const listItem = createListItem(item);
      listItem.className = 'item';
      findFreeCell(this.listItems).appendChild(listItem);
    });
    recipes.forEach(recipe => {
      const listRecipe = createListItem(recipe);
      listRecipe.className = 'recipe';
      listRecipe.setAttribute('info', recipe.ingredients.toString());
      findFreeCell(this.listRecipes).appendChild(listRecipe);
    });
  }
}
export default View;
