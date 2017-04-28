import {Component, Input} from '@angular/core';
import {Recipe} from '../../recipe.model';
import {RecipeService} from '../../recipe.service';

@Component ({
	selector: 'app-recipe-item',
	templateUrl: './recipe_item.html',
	styleUrls: ['./recipe_item.css']
})

export class recipeItemComponent {
	@Input() recipeItem: Recipe;

	constructor(private recipeService: RecipeService) {}

	onSelected() {
		this.recipeService.recipeSelected.emit(this.recipeItem);
	}
}