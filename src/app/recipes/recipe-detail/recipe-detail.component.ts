import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { RecipeService } from "src/app/services/recipe.service";
import { ShoppingListService } from "src/app/services/shopping-list.service";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"],
})
export class RecipeDetailComponent implements OnInit {
  public recipeIndex: number;
  public selectedRecipe;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService,
    private shoppingService: ShoppingListService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.recipeIndex = +params["id"];

      this.selectedRecipe = this.recipeService.getRecipeByIndex(
        this.recipeIndex
      );

      //transform ingredients
      console.log(this.selectedRecipe.ingredientLines);
      this.selectedRecipe.ingredientLines = this.recipeService.transformIngredients(
        this.selectedRecipe.ingredientLines
      );
    });
  }

  addShoppingList() {
    this.selectedRecipe.ingredientLines.forEach((elm) => {
      this.shoppingService.addItem(elm);
    });
  }
}
