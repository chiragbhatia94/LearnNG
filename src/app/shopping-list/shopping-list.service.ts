import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients: Ingredient[];

  ingredientAdded = new EventEmitter<Ingredient[]>();

  constructor() {
    this.ingredients = [new Ingredient('pulse', 4), new Ingredient('flour', 4)];
  }

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  pushIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientAdded.emit(this.ingredients.slice());
  }
}
