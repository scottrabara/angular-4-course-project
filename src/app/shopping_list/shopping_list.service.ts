import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
	private ingredients: Ingredient[] = [
		new Ingredient ('Apples', 5),
		new Ingredient ('Tomatoes', 5)
	];
	ingredientsChanged = new Subject<Ingredient[]>();

	getIngredients(){
		return this.ingredients.slice();
	}

	addIngredient(i: Ingredient){
		this.ingredients.push(i);
		this.ingredientsChanged.next(this.ingredients.slice());
	}
	addIngredients(is: Ingredient[]){
		this.ingredients.push(...is); //spread operator (...) ES6 functionality
		this.ingredientsChanged.next(this.ingredients.slice());
	}
}