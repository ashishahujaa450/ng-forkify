import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { AppComponent } from "./app.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingComponent } from "./shopping/shopping.component";

const routes: Routes = [{ path: ":id", component: RecipeDetailComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
