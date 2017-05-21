import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Response } from '@angular/http';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from "app/auth/auth.service";

@Component ({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})

export class headerComponent implements OnInit {
	// @Output() headerSelected = new EventEmitter<string>();

	// onSelected(redirect: string) {
	// 	this.headerSelected.emit(redirect);
	// }
	constructor(private data: DataStorageService,
				private rService: RecipeService,
				private auth: AuthService) {}

	ngOnInit() {
		this.onFetch();
		
	}
	onSave() {
		this.data.saveRecipes(this.rService.getRecipes());
	}

	onFetch() {
		this.rService.fetchRecipes();
		
	}

	onLogout() {
		this.auth.signoutUser();
		this.rService.fetchRecipes();
	}

	getAuth() {
		return this.auth.isAuthenticated();
	}
}