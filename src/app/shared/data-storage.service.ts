import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable()
export class DataStorageService {
  url = 'https://portfolio-e9b32.firebaseio.com/recipes.json';

  constructor(
    private httpClient: HttpClient,
    private recipeService: RecipeService
  ) {}

  storeRecipes() {
    // return this.httpClient.put(
    //   this.url,
    //   this.recipeService.getRecipes(),
    //   {
    //     params: new HttpParams().set('auth', token),
    //     reportProgress: true
    //   }
    // );

    const req = new HttpRequest(
      'PUT',
      this.url,
      this.recipeService.getRecipes(),
      {
        reportProgress: true
      }
    );
    return this.httpClient.request(req);
  }

  getRecipes() {
    this.httpClient
      .get<Recipe[]>(this.url)
      .pipe(
        // map((recipes: Recipe[]) => {
        map(recipes => {
          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        })
      )
      .subscribe((recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      });
  }
}
