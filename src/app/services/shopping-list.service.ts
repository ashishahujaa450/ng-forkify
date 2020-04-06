import { Injectable } from "@angular/core";

export interface Ingredient {
  unit: string;
  amount: number;
  description: number;
}

@Injectable({
  providedIn: "root",
})
export class ShoppingListService {
  private shoppingList: Ingredient[] = [];

  constructor() {}

  getList() {
    return this.shoppingList;
  }

  addItem(item: Ingredient) {
    this.shoppingList.push(item);
  }

  removeItem(index: number) {
    this.shoppingList.splice(index, 1);
  }
}
