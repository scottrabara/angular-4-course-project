import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { Ingredient } from '../../shared/ingredient.model'
import { ShoppingListService } from '../../shopping_list/shopping_list.service';

@Component({
	selector:  'app-shopping-list-edit',
	templateUrl: './shopping_list_edit.html',
	styleUrls: ['./shopping_list_edit.css']
})

export class shoppingListEditComponent implements OnInit {
	ingredientForm: FormGroup;
	editMode: boolean = false;
	constructor(private shoppingListService: ShoppingListService) {}

	ngOnInit() {
		this.ingredientForm = new FormGroup({
			'name': new FormControl(''),
			'amount': new FormControl('')
		});

		this.shoppingListService.ingredientEdit.subscribe(
			(i) => {
				this.editMode = true;
				this.ingredientForm.setValue({
					'name': this.shoppingListService.getIngredient(i).name,
					'amount': this.shoppingListService.getIngredient(i).amount
				});
			}
		);
	}

	onAddIngredient() {
		this.shoppingListService.addIngredient(
			new Ingredient(this.ingredientForm.get('name').value, 
						   this.ingredientForm.get('amount').value));
		this.ingredientForm.reset();
		this.editMode = false;
	}

	onIngredientFormSubmit() {
		console.log(this.ingredientForm.value);
	}
}