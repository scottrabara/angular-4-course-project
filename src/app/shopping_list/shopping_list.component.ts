import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
	selector:  'app-shopping-list',
	templateUrl: './shopping_list.html',
	styleUrls: ['./shopping_list.css']
})

export class shoppingListComponent { 
	public ingredients: Ingredient[] = [
		new Ingredient ('Apples', 5),
		new Ingredient ('Tomatoes', 5)
	];

 	public onIngredientAdded(ing: Ingredient) {
		this.ingredients.push(ing);
	}
}