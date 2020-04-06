import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { map, tap } from "rxjs/operators";
import { RecipeService } from "./recipe.service";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DataService {
  private apiKey: string = "9c10e43cd9d2a9f0c849aef349370721";
  private appId: string = "c66e5198";
  private maxResult: number = 30;

  public isFetching = new Subject<boolean>();

  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  fetchRecipes(query: string) {
    this.isFetching.next(true);
    return this.http
      .get(
        `https://api.edamam.com/search?q=${query}&to=${this.maxResult}&app_id=${this.appId}&app_key=${this.apiKey}`
      )
      .pipe(
        map((response: any) => {
          const recipes = [];

          response.hits.forEach((elm) => {
            if (elm.recipe) {
              recipes.push(elm.recipe);
            }
          });

          return recipes;
        }),
        tap((recipes) => {
          this.recipeService.setList(recipes);
          this.isFetching.next(false);
          console.log(recipes);
        })
      );
  }
}
