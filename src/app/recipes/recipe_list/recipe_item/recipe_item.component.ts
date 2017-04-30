import {Component, Input} from '@angular/core';
import {Recipe} from '../../recipe.model';

@Component ({
	selector: 'app-recipe-item',
	templateUrl: './recipe_item.html',
	styleUrls: ['./recipe_item.css']
})

export class recipeItemComponent {
	@Input() recipeItem: Recipe;
	@Input() index: number;

}