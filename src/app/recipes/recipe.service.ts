import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {Recipe} from './recipe.model';

@Injectable({providedIn: 'root'})
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Schnitzel',
            'Original Schnitzel from Austria',
            'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
            [
                new Ingredient('Schnitzel', 1),
                new Ingredient('Fries', 20)
            ]),
        new Recipe(
            'Big Fat Burger',
            'American Beef Burger',
            'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
            [
                new Ingredient('Angus Burger', 1),
                new Ingredient('Buns', 2),
                new Ingredient('Salade', 1),
                new Ingredient('Cheddar Cheese', 1)
            ])
    ];

    getRecipes = () => {
        return this.recipes.slice();
    }

    getRecipe = (index: number) => {
        return this.recipes[index];
    }

    removeRecipe = (index: number) => {
        return this.recipes.splice(index, 1);
    }
}
