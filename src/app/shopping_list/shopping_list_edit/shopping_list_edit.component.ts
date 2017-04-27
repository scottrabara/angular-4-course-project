import { Component, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model'


@Component({
	selector:  'app-shopping-list-edit',
	templateUrl: './shopping_list_edit.html',
	styleUrls: ['./shopping_list_edit.css']
})

export class shoppingListEditComponent {

	@Output() ingredientAdded = new EventEmitter<Ingredient>();
	@Output() ingredientRemoved = new EventEmitter<Ingredient>();
	newName: string;
	newAmount: number;


	onAddIngredient() {
		this.ingredientAdded.emit(new Ingredient(this.newName, this.newAmount));
	}

	onRemoveIngredient() {
		
	}

	onClearForm() {

	}
}