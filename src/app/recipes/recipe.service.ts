import {EventEmitter} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {
	recipeSelected = new EventEmitter<Recipe>();

	private recipes: Recipe[] = [
	new Recipe('Chicken Soup', 
			   'Delicious', 
			   'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg',
			   [new Ingredient('Chicken', 2),
			    new Ingredient('Red Soup', 1)]),
	new Recipe('Lasagna', 
			   'Italian!', 
			   'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/7/25/2/FNM_090112-Weeknight-Lasagna-Dinner-Recipe_s4x3.jpg.rend.hgtvcom.966.725.jpeg',
			   [new Ingredient('Lasagna Sheet', 2),
			    new Ingredient('Beef', 10)])
	];


	getRecipes() {
		return this.recipes.slice(); //returns copy of array
	}
}