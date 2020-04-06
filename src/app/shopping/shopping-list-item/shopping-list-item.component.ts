import { Component, OnInit, Input } from "@angular/core";
import {
  Ingredient,
  ShoppingListService,
} from "src/app/services/shopping-list.service";

@Component({
  selector: "app-shopping-list-item",
  templateUrl: "./shopping-list-item.component.html",
  styleUrls: ["./shopping-list-item.component.css"],
})
export class ShoppingListItemComponent implements OnInit {
  @Input("item") selectedItem: Ingredient;
  @Input("index") index: number;

  constructor(private shoppingService: ShoppingListService) {}

  ngOnInit(): void {}

  removeIng() {
    this.shoppingService.removeItem(this.index);
  }
}
