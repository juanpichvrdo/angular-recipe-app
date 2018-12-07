import { EventEmitter, Injectable } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "Hamburger",
      "Recipe for a hamburguer",
      "https://static.olocdn.net/menu/applebees/db21d0fba2f611d95ba3d79bda75178c.jpg",
      [new Ingredient("Meat", 1), new Ingredient("Fren Fries", 1)]
    ),
    new Recipe(
      "Another Hamburger",
      "Recipe for a hamburguer",
      "http://www.magimix.com/files/rec_22546/in_uk_hamburger.jpg",
      [new Ingredient("Onions", 3), new Ingredient("bread", 2)]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
