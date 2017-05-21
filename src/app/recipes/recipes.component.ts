import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import { AuthService } from "app/auth/auth.service";
@Component({
 	selector: 'app-recipes',
 	templateUrl: './recipes.html',
 	styleUrls: ['./recipes.css']
})

export class recipesComponent {
	constructor(private auth: AuthService) {
		
	}

	getAuth() {
		return this.auth.isAuthenticated();
	}
}