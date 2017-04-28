import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping_list.service';

@Component({
	selector:  'app-shopping-list',
	templateUrl: './shopping_list.html',
	styleUrls: ['./shopping_list.css']
})

export class shoppingListComponent implements OnInit { 
	ingredients: Ingredient[];

	constructor(private shoppingListService: ShoppingListService) {
		this.shoppingListService.ingredientsChanged.subscribe(
			(i => this.ingredients = i)
		);
	}

	ngOnInit () {
		this.ingredients = this.shoppingListService.getIngredients();
	}
}
