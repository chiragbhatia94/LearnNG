import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../shared/recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[];
  recipeSelected = new EventEmitter<Recipe>();

  constructor() {
    this.recipes = [
      new Recipe('Dal bafla', 'Dal bafla', 'assets/images/recipe.jpg', [
        new Ingredient('Dal', 1),
        new Ingredient('Bafla', 4)
      ]),
      new Recipe('Egg Curry', 'Easy to cook', 'assets/images/recipe.jpg', [
        new Ingredient('Egg', 3),
        new Ingredient('Roti', 4)
      ])
    ];
  }

  getRecipes(): Recipe[] {
    return this.recipes.splice(0);
  }
}
