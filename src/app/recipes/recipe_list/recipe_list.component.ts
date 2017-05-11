import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { DataStorageService } from '../../shared/data-storage.service';

@Component ({
	selector: 'app-recipes-list',
	templateUrl: "./recipe_list.html",
	styleUrls: ["./recipe_list.css"]
})

export class recipeListComponent implements OnInit {
	recipes: Recipe[] = [];

	recipesChangesSub: Subscription;
	dataSub: Subscription;

	constructor(private recipeService: RecipeService,
				private router: Router,
				private route: ActivatedRoute,
				private data: DataStorageService) {}

	ngOnInit() {
		this.recipesChangesSub = this.recipeService.recipesChanges.subscribe(
			(recipes => {
				this.recipes = recipes;
			})
		);
		this.dataSub = this.data.fetchRecipes().subscribe(
			(recipes => {
				for (let recipe of recipes) {
					if (!recipes['ingredients']) {
						recipes['ingredients'] = [];
					}
				}
				this.recipeService.updateRecipes(recipes);
			})
		);
		this.recipes = this.recipeService.getRecipes();
	}

	// onNew() {
	// 	this.router.navigate(['new']);
	// }

	ngOnDestroy() {
		this.recipesChangesSub.unsubscribe();
		this.dataSub.unsubscribe();
	}
}