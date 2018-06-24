import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  public recipes: Recipe[];

  constructor() {
    this.recipes = [
      new Recipe(
        'Dal Bati',
        'My favorite dish',
        'https://i.ndtvimg.com/i/2017-10/easy-dal-recipes_806x605_41507285934.jpg'
      ),
      new Recipe(
        'Dal Bati',
        'My favorite dish',
        'https://i.ndtvimg.com/i/2017-10/easy-dal-recipes_806x605_41507285934.jpg'
      )
    ];
  }

  ngOnInit() {}
}
