import { Component, OnInit } from "@angular/core";
import {
  ShoppingListService,
  Ingredient,
} from "../services/shopping-list.service";

@Component({
  selector: "app-shopping",
  templateUrl: "./shopping.component.html",
  styleUrls: ["./shopping.component.css"],
})
export class ShoppingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
