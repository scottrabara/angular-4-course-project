import { Component } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model'
import { ShoppingListService } from '../../shopping_list/shopping_list.service';

@Component({
	selector:  'app-shopping-list-edit',
	templateUrl: './shopping_list_edit.html',
	styleUrls: ['./shopping_list_edit.css']
})

export class shoppingListEditComponent {
	newName: string;
	newAmount: number;

	constructor(private shoppingListService: ShoppingListService) {}

	onAddIngredient() {
		this.shoppingListService.addIngredient(new Ingredient(this.newName, this.newAmount));
	}
}