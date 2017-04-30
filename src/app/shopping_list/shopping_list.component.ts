import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping_list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector:  'app-shopping-list',
	templateUrl: './shopping_list.html',
	styleUrls: ['./shopping_list.css']
})

export class shoppingListComponent implements OnInit, OnDestroy { 
	ingredients: Ingredient[];
	private sub: Subscription;

	constructor(private shoppingListService: ShoppingListService) {
		this.sub = this.shoppingListService.ingredientsChanged.subscribe(
			(i => this.ingredients = i)
		);
	}

	ngOnInit () {
		this.ingredients = this.shoppingListService.getIngredients();
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}
}
