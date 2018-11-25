import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { AuthService } from '../auth/auth.service';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable()
export class DataStorageService {
  url = 'https://portfolio-e9b32.firebaseio.com/recipes.json';

  constructor(
    private httpClient: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  storeRecipes() {
    const token = this.authService.getToken();
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
        params: new HttpParams().set('auth', token),
        reportProgress: true
      }
    );
    return this.httpClient.request(req);
  }

  getRecipes() {
    const token = this.authService.getToken();

    this.httpClient
      .get<Recipe[]>('', {
        params: new HttpParams().set('auth', this.url)
      })
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
