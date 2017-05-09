import { Component, EventEmitter, Output } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Response } from '@angular/Http';

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
	constructor(private rService: RecipeService) {}

	onSave() {
		this.rService.saveRecipes(this.rService.getRecipes())
		.subscribe(
			(response: Response) => {
				console.log(response);
			}
		);
	}

	onFetch() {
		this.rService.fetchRecipes()
		.subscribe(
			(response: Response) => {
				console.log(response);
			}
		);
	}
}