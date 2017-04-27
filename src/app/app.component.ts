import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	currentPage: string = 'recipes';

	onHeaderSelect(redirect: string) {
		this.currentPage = redirect;
	}

	isRecipes() {
		return this.currentPage === 'recipes';
	}

	isShoppingList() {
		return this.currentPage === 'shopping-list';
	}
}
