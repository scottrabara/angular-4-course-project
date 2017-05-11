import { Component, EventEmitter, Output } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Response } from '@angular/http';
import { DataStorageService } from '../shared/data-storage.service';

@Component ({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})

export class headerComponent {
	// @Output() headerSelected = new EventEmitter<string>();

	// onSelected(redirect: string) {
	// 	this.headerSelected.emit(redirect);
	// }
	constructor(private data: DataStorageService,
				private rService: RecipeService) {}

	onSave() {
		this.data.saveRecipes(this.rService.getRecipes());
	}

	onFetch() {
		this.data.fetchRecipes();
	}
}