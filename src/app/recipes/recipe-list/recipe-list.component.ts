import { Component, OnInit } from "@angular/core";

import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "Hamburger",
      "Recipe for a hamburguer",
      "http://www.magimix.com/files/rec_22546/in_uk_hamburger.jpg"
    )
  ];

  constructor() {}

  ngOnInit() {}
}
