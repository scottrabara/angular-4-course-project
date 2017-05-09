import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component ({
	selector: 'app-recipes-list',
	templateUrl: "./recipe_list.html",
	styleUrls: ["./recipe_list.css"]
})

export class recipeListComponent implements OnInit {
	recipes: Recipe[];

	recipesChangesSub: Subscription;

	constructor(private recipeService: RecipeService,
				private router: Router,
				private route: ActivatedRoute) {}

	ngOnInit() {
		this.recipesChangesSub = this.recipeService.recipesChanges.subscribe(
			(recipes => {
				this.recipes = recipes;
			})
		);
		this.recipeService.fetchRecipes().subscribe();
		this.recipes = this.recipeService.getRecipes();
	}

	// onNew() {
	// 	this.router.navigate(['new']);
	// }

	ngOnDestroy() {
		this.recipesChangesSub.unsubscribe();
	}
}