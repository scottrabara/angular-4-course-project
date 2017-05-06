import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { Ingredient } from '../../shared/ingredient.model'
import { ShoppingListService } from '../../shopping_list/shopping_list.service';

@Component({
	selector:  'app-shopping-list-edit',
	templateUrl: './shopping_list_edit.html',
	styleUrls: ['./shopping_list_edit.css']
})

export class shoppingListEditComponent implements OnInit, OnDestroy {
	ingredientForm: FormGroup;
	editMode: boolean = false;
	editModeIndex: number;
	constructor(private shoppingListService: ShoppingListService) {}

	ngOnInit() {
		this.ingredientForm = new FormGroup({
			'name': new FormControl(''),
			'amount': new FormControl('')
		});

		this.shoppingListService.ingredientEdit.subscribe(
			(i) => {
				this.editMode = true;
				this.editModeIndex = i;
				this.ingredientForm.setValue({
					'name': this.shoppingListService.getIngredient(i).name,
					'amount': this.shoppingListService.getIngredient(i).amount
				});
				this.ingredientForm.get('name').disable();
			}
		);

		// this.ingredientForm.valueChanges.subscribe(
		// 	(changes) => {
		// 		console.log(changes.name);
		// 		this.editMode = false;
		// 	}
		// );
	}

	onAddIngredient() {
		const ingredient = new Ingredient(this.ingredientForm.get('name').value, 
						   this.ingredientForm.get('amount').value);

		if (this.editMode) {
			this.shoppingListService.updateIngredient(this.editModeIndex, ingredient);
		}
		else {
			this.shoppingListService.addIngredient(ingredient);
		}
		this.onClear();
	}

	onDelete() {
		this.shoppingListService.deleteIngredient(this.editModeIndex);
		this.onClear();
	}

	onClear() {
		this.editMode = false;
		this.ingredientForm.get('name').enable();
		this.ingredientForm.reset();
	}

	ngOnDestroy() {
		this.shoppingListService.ingredientEdit.unsubscribe;
	}
}