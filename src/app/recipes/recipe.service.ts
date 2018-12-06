import { EventEmitter } from "@angular/core";

import { Recipe } from "./recipe.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
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

  getRecipes() {
    return this.recipes.slice();
  }
}
