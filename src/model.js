/* eslint-disable import/no-unresolved */
import EventEmitter from './EventEmitter';
import Recipe from './Recipe';
import Item from './Item';

class Model extends EventEmitter {
  constructor(
    // El, Eld, Tir, Nef, Eth, Ith, Tal, Ral, Ort
    items = [
      new Item('item0', 'El'),
      new Item('item1', 'Eld'),
      new Item('item2', 'Tir'),
      new Item('item3', 'Nef'),
      new Item('item4', 'El'),
      new Item('item5', 'Nef'),
      new Item('item6', 'Nef'),
      new Item('item7', 'El'),
    ],
    recipes = [
      new Recipe('recipe8', 'Eld', ['El', 'El', 'El'], new Item('item', 'Eld')),
      new Recipe('recipe10', 'Nef', ['Tir', 'Tir', 'Tir'], new Item('item', 'Nef')),
      new Recipe('recipe11', 'Eth', ['Nef', 'Nef', 'Nef'], new Item('item', 'Eth')),
      new Recipe('recipe12', 'Ith', ['Eth', 'Eth', 'Eth'], new Item('item', 'Ith')),
    ]
  ) {
    super();
    this.items = items;
    this.recipes = recipes;
    this.idCounter = this.items.length + this.recipes.length;
  }

  getRecipe(id) {
    return this.recipes.find(recipe => recipe.id === id);
  }

  getItem(id) {
    return this.items.find(item => item.id === id);
  }

  deleteElement(ev) {
    const data = ev.dataTransfer.getData('text');
    if (data.replace(/[^a-z]/g, '') === 'item') {
      const itemsId = this.items.map(value => value.id);
      this.items.splice(itemsId.indexOf(data), 1);
    } else {
      const recipesId = this.recipes.map(value => value.id);
      this.recipes.splice(recipesId.indexOf(data), 1);
    }
  }

  craftItem(recipeId, ingredients = []) {
    let result = null;
    const recipe = this.getRecipe(recipeId);
    if (
      ingredients.every(item => recipe.ingredients.includes(this.getItem(item).name)) &&
      ingredients.length === recipe.ingredients.length
    ) {
      ({ result } = recipe);
      result.id = `item${(this.idCounter += 1)}`;
      this.items.push(result);
    }
    return result;
  }

  craftRecipe(recipeName, itemName, ingredients = []) {
    let result = this.items.find(item => item.name === itemName);
    if (result === undefined) result = new Item(null, itemName);
    const newRecipe = new Recipe(`recipe${(this.idCounter += 1)}`, recipeName, ingredients, result);
    this.recipes.push(newRecipe);
    return newRecipe;
  }
}
export default Model;
