import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
    recipe: Recipe;
    id: number;

    constructor(
        private recipeService: RecipeService,
        private shoppingListService: ShoppingListService,
        private router: Router,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.id = Number(params['id']);
            this.recipe = this.recipeService.getRecipe(this.id);
        });
    }

    addToShoppingList = () => {
        this.shoppingListService.addToShoppingList(this.recipe.ingredients);
    }

    editRecipe = () => {
        this.router.navigate(['edit'], {relativeTo: this.route})
    }

    removeFromRecipeList = () => {
        this.recipeService.removeRecipe(this.id);
    }

}
