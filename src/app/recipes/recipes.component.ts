import { Component, Input } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component ({
 	selector: 'app-recipes',
 	templateUrl: './recipes.html',
 	styleUrls: ['./recipes.css']
})

export class recipesComponent {
	recipeSelected: Recipe;

	constructor(private recipeService: RecipeService) {
		this.recipeService.recipeSelected.subscribe(
			(recipe => this.recipeSelected = recipe)
		);
	}
}