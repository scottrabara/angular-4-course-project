import {EventEmitter} from '@angular/core';
import {Recipe} from './recipe.model';

export class RecipeService {
	recipeSelected = new EventEmitter<Recipe>();

	private recipes: Recipe[] = [
	new Recipe('A test recipe', 
			   'Description', 
			   'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg'),
	new Recipe('Another test recipe', 
			   'Another description', 
			   'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/7/25/2/FNM_090112-Weeknight-Lasagna-Dinner-Recipe_s4x3.jpg.rend.hgtvcom.966.725.jpeg')
	];


	getRecipes() {
		return this.recipes.slice(); //returns copy of array
	}
}