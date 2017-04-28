import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component ({
	selector: 'app-recipes-list',
	templateUrl: "./recipe_list.html",
	styleUrls: ["./recipe_list.css"]
})

export class recipeListComponent {
	recipes: Recipe[];

	constructor(private recipeService: RecipeService) {}

	ngOnInit() {
		this.recipes = this.recipeService.getRecipes();
	}
}