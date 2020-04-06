import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  public recipeSearch: string = "";
  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  onSearch(form: NgForm) {
    this.recipeSearch = form.form.value.recipeName;

    this.dataService
      .fetchRecipes(this.recipeSearch)
      .subscribe((recipes: any) => {});
  }
}
