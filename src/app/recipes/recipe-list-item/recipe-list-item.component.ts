import { Component, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-recipe-list-item",
  templateUrl: "./recipe-list-item.component.html",
  styleUrls: ["./recipe-list-item.component.css"],
})
export class RecipeListItemComponent implements OnInit {
  @Input("item") item;
  @Input("index") index;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}
}
