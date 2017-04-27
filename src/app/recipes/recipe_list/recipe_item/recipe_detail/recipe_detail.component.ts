import { Component, Input } from '@angular/core';
import { Ingredient } from '../../../../shared/ingredient.model';
import { Recipe } from '../../../recipe.model';

@Component ({
	selector: 'app-recipe-detail',
	templateUrl: './recipe_detail.html',
	styleUrls: ['./recipe_detail.css']
})

export class recipeDetailComponent {
	@Input() public recipe: Recipe;
}