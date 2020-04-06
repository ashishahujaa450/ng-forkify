import { Component, OnInit } from "@angular/core";
import { RecipeService } from "src/app/services/recipe.service";
import { DataService } from "src/app/services/data.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent implements OnInit {
  public recipeListing;
  public isDataArrived: boolean;
  public page: number = 0;

  constructor(
    private recipeService: RecipeService,
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.dataService.isFetching.subscribe((data) => {
      this.isDataArrived = data;
    });

    this.recipeListing = this.recipeService.getFilteredList();
  }

  onPrev() {
    this.page = this.page - 1;
    this.router.navigate([], {
      queryParams: { page: this.page },
    });
  }

  onNext() {
    this.page = this.page + 1;
    this.router.navigate([], {
      queryParams: { page: this.page },
    });
  }
}
