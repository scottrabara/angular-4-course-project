import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../../../shared/ingredient.model';
import { Recipe } from '../../../recipe.model';
import { RecipeService } from '../../../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component ({
	selector: 'app-recipe-detail',
	templateUrl: './recipe_detail.html',
	styleUrls: ['./recipe_detail.css']
})

export class recipeDetailComponent implements OnInit {
	public recipe: Recipe;
	id: number;

	constructor(private rService: RecipeService,
				private route: ActivatedRoute,
				private router: Router) {}

	ngOnInit() {
		this.route.params.subscribe(
			(newParams) => {
				this.id = +newParams['id'];
				this.recipe = this.rService.getRecipe(this.id);
			}
		);
	}

	onAddRecipeIngredients() {
		this.rService.addIngredientsToShoppingList(this.recipe.ingredients);
	}

	onEdit() {
		this.router.navigate(['edit'], {relativeTo: this.route})
	}

	onDelete() {
		this.rService.deleteRecipe(this.id);
		this.router.navigate(['/recipes'])
	}
}