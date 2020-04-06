import { Component, OnInit } from "@angular/core";
import {
  ShoppingListService,
  Ingredient,
} from "src/app/services/shopping-list.service";

@Component({
  selector: "app-shopping-listing",
  templateUrl: "./shopping-listing.component.html",
  styleUrls: ["./shopping-listing.component.css"],
})
export class ShoppingListingComponent implements OnInit {
  public list: Ingredient[];
  constructor(private shoppingService: ShoppingListService) {}

  ngOnInit(): void {
    this.list = this.shoppingService.getList();
  }
}
