import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shoppingList.service';


@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('A Recipe', 
        'This is a test', 
        'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/8/6/0/WU2301_Four-Cheese-Pepperoni-Pizzadilla_s4x3.jpg.rend.hgtvcom.826.620.suffix/1565115622965.jpeg',
        [
            new Ingredients('Meat', 1),
            new Ingredients('French Fries', 20)
        ]
        ),
        new Recipe('A Test Recipe', 
        'This is a Recipe', 
        'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/8/6/0/WU2301_Four-Cheese-Pepperoni-Pizzadilla_s4x3.jpg.rend.hgtvcom.826.620.suffix/1565115622965.jpeg',
        [new Ingredients('Buns', 1),
        new Ingredients('French Fries', 20)]
        )
      ];

      constructor(private slService: ShoppingListService) {}
    getRecipes(){
        //returning the copy of the recipes array
        return this.recipes.slice();
    }  

    AddIngredientToShoppingList(ingredients: Ingredients[])
    {
        this.slService.addIngredients(ingredients);
    }
}