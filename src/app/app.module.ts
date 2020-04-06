import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { RecipeListComponent } from "./recipes/recipe-list/recipe-list.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingComponent } from "./shopping/shopping.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeListItemComponent } from "./recipes/recipe-list-item/recipe-list-item.component";
import { ShoppingListingComponent } from "./shopping/shopping-listing/shopping-listing.component";
import { ShoppingListItemComponent } from "./shopping/shopping-list-item/shopping-list-item.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeListComponent,
    RecipesComponent,
    ShoppingComponent,
    RecipeDetailComponent,
    RecipeListItemComponent,
    ShoppingListingComponent,
    ShoppingListItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
