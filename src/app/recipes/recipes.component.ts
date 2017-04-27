import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component ({
 	selector: 'app-recipes',
 	templateUrl: './recipes.html',
 	styleUrls: ['./recipes.css']
})

export class recipesComponent {
	recipeSelected: Recipe;

	onSelectedItem(recipe: Recipe) {
		this.recipeSelected = recipe;
	}
}