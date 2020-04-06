import { Injectable } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { parseHostBindings } from "@angular/compiler";
import { ShoppingListItemComponent } from "../shopping/shopping-list-item/shopping-list-item.component";

@Injectable({
  providedIn: "root",
})
export class RecipeService {
  private recipesArr = [];
  private start: number = 0;
  private end: number = 9;
  private filteredRecipe = [];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe((param: Params) => {
      const page = +param["page"];

      switch (page) {
        case 1:
          this.start = 10;
          this.end = 19;

          this.changeFilteredArr(this.start, this.end);
          break;

        case 2:
          this.start = 20;
          this.end = 29;

          this.changeFilteredArr(this.start, this.end);
          break;

        default:
          this.start = 0;
          this.end = 9;

          this.changeFilteredArr(this.start, this.end);
      }
    });
  }

  private changeFilteredArr(start, end) {
    this.filteredRecipe.splice(0, 100);
    this.recipesArr.forEach((elm, index) => {
      if (index >= start && index <= end) {
        this.filteredRecipe.push(elm);
      }
    });
  }

  getList() {
    return this.recipesArr;
  }

  getFilteredList() {
    return this.filteredRecipe;
  }

  setList(recipeList) {
    const recipes = recipeList;
    this.recipesArr.splice(0, 100);
    recipes.forEach((elm, index) => {
      this.recipesArr.push(elm);

      if (index >= this.start && index <= this.end) {
        this.filteredRecipe.push(elm);
      }
    });
  }

  getRecipeByIndex(index) {
    return this.filteredRecipe[index];
  }

  transformIngredients(arr: any) {
    const ingredient = arr;
    let newIngredientArr = [];

    ingredient.forEach((elm: string) => {
      const filteredIngred = {
        unit: "",
        amount: 0,
        description: "",
      };

      //final units & possible units
      const possibleUnit = [
        "g",
        "gram",
        "tablespoons",
        "tablespoon",
        "teaspoon",
        "teaspoons",
        "pound",
        "cups",
      ];
      const finalUnit = ["g", "g", "tbsp", "tbsp", "tsp", "tsp", "lbs", "cup"];

      //split into arr
      const singleItemArr = elm.split(" ");

      //filter amount
      if (parseInt(singleItemArr[0]) && parseInt(singleItemArr[1])) {
        //store amount
        filteredIngred.amount = eval(singleItemArr[0]) + eval(singleItemArr[1]);

        //store unit
        filteredIngred.unit = singleItemArr[2];

        //store description
        filteredIngred.description = singleItemArr.splice(3).join(" ");
      } else if (parseInt(singleItemArr[0])) {
        //store amount
        filteredIngred.amount = eval(singleItemArr[0]);

        //store unit
        filteredIngred.unit = singleItemArr[1];

        //store description
        filteredIngred.description = singleItemArr.splice(2).join(" ");
      } else if (parseInt(singleItemArr[1])) {
        //store maount
        filteredIngred.amount = eval(singleItemArr[1]);

        //store unit
        filteredIngred.unit = singleItemArr[2];

        //store description
        filteredIngred.description = singleItemArr.splice(3).join(" ");
      } else {
        //store maount
        filteredIngred.amount = 0;

        //store unit
        filteredIngred.unit = singleItemArr[1];

        //store description
        filteredIngred.description = singleItemArr.splice(2).join(" ");
      }

      //filter possible units
      for (let i = 0; i < possibleUnit.length; i++) {
        if (filteredIngred.unit === possibleUnit[i]) {
          filteredIngred.unit = finalUnit[i];
        }
      }

      //fixed decimal
      filteredIngred.amount = parseFloat(filteredIngred.amount.toFixed(2));
      newIngredientArr.push(filteredIngred);
    });

    return newIngredientArr;
  }
}
