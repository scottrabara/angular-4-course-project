import {Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';
import {ShoppingListService} from '../shopping_list/shopping_list.service';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { DataStorageService } from '../shared/data-storage.service';
import 'rxjs';


@Injectable()
export class RecipeService {

	private recipes: Recipe[] = [];
	// = [
	// new Recipe('Chicken Soup', 
	// 		   'Delicious', 
	// 		   'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg',
	// 		   [new Ingredient('Chicken', 2),
	// 		    new Ingredient('Red Soup', 1)]),
	// new Recipe('Lasagna', 
	// 		   'Italian!', 
	// 		   'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/7/25/2/FNM_090112-Weeknight-Lasagna-Dinner-Recipe_s4x3.jpg.rend.hgtvcom.966.725.jpeg',
	// 		   [new Ingredient('Lasagna Sheet', 2),
	// 		    new Ingredient('Beef', 10)])
	// ];
 
	recipesChanges = new Subject<Recipe[]>();

	constructor(private slService: ShoppingListService,
				private dataStorageService: DataStorageService) {
	}

	getRecipes() {
		return this.recipes.slice();
	}

	getRecipe(id: number) {
		return this.recipes[id];
	}

	fetchRecipes() {
		this.dataStorageService.fetchRecipes().subscribe(
			(recipes) => {
				this.recipes = recipes;
				this.updateRecipes(this.recipes.slice());
				console.log(this.recipes.slice());
			}
		);
	}

	addIngredientsToShoppingList(ings: Ingredient[]) {
		this.slService.addIngredients(ings);
	}

	addRecipe(r: Recipe) {
		this.recipes.push(r);
		console.log(this.recipes.slice());
		this.recipesChanges.next(this.recipes.slice());
		this.dataStorageService.saveRecipes(this.recipes.slice());
	}

	updateRecipe(i: number, newRecipe: Recipe) {
		this.recipes[i] = newRecipe;
		this.recipesChanges.next(this.recipes.slice());
		console.log(this.recipes.slice());
		this.dataStorageService.saveRecipes(this.recipes.slice());
	}

	updateRecipes(recipes: Recipe[]) {
		this.recipes = recipes;
		this.recipesChanges.next(this.recipes.slice());
	}

	deleteRecipe(i: number) {
		this.recipes.splice(i, 1);
		this.recipesChanges.next(this.recipes.slice());	
		this.dataStorageService.saveRecipes(this.recipes.slice());
	}
}