import { Component, OnInit, Output, EventEmitter } from "@angular/core";

import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      "Hamburger",
      "Recipe for a hamburguer",
      "http://www.magimix.com/files/rec_22546/in_uk_hamburger.jpg"
    ),
    new Recipe(
      "Another Hamburger",
      "Recipe for a hamburguer",
      "http://www.magimix.com/files/rec_22546/in_uk_hamburger.jpg"
    )
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

  constructor() {}

  ngOnInit() {}
}
