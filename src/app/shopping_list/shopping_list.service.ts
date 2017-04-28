import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
	private ingredients: Ingredient[] = [
		new Ingredient ('Apples', 5),
		new Ingredient ('Tomatoes', 5)
	];
	ingredientsChanged = new EventEmitter<Ingredient[]>();

	getIngredients(){
		return this.ingredients.slice();
	}

	addIngredient(i: Ingredient){
		this.ingredients.push(i);
		this.ingredientsChanged.emit(this.ingredients.slice());
	}
	addIngredients(is: Ingredient[]){
		for (let i of is) { 
			this.ingredients.push(i);
		}
		this.ingredientsChanged.emit(this.ingredients.slice());
	}
}