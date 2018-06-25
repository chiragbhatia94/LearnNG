import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  public recipes: Recipe[];

  @Output() recipeSelected = new EventEmitter<{ recipe: Recipe }>();

  constructor() {
    this.recipes = [
      new Recipe('Dal Bati', 'My favorite dish', 'assets/images/dalbati.jpg'),
      new Recipe('Dal Bati', 'My favorite dish', 'assets/images/dalbati.jpg')
    ];
  }

  ngOnInit() {}

  selectRecipe(i: number) {
    this.recipeSelected.emit({ recipe: this.recipes[i] });
  }
}
