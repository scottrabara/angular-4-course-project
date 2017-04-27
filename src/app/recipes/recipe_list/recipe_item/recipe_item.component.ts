import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Recipe} from '../../recipe.model';

@Component ({
	selector: 'app-recipe-item',
	templateUrl: './recipe_item.html',
	styleUrls: ['./recipe_item.css']
})

export class recipeItemComponent {
	@Input() recipeItem: Recipe;
	@Output() selectedItem = new EventEmitter<void>();

	onSelected() {
		this.selectedItem.emit();
	}
}