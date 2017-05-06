import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component ({
	selector: 'app-recipes-list',
	templateUrl: "./recipe_list.html",
	styleUrls: ["./recipe_list.css"]
})

export class recipeListComponent implements OnInit {
	recipes: Recipe[];

	constructor(private recipeService: RecipeService,
				private router: Router,
				private route: ActivatedRoute) {}

	ngOnInit() {
		this.recipeService.recipesChanges.subscribe(
			(recipes => {
				this.recipes = recipes;
			})
		);
		this.recipes = this.recipeService.getRecipes();
	}

	// onNew() {
	// 	this.router.navigate(['new']);
	// }

	// ngOnDestroy() {
	// 	this.recipeService.recipesChanges.unsubscribe();
	// }
}