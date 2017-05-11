import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Recipe } from '../recipes/recipe.model';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/Rx';


@Injectable()
export class DataStorageService {

	constructor(private http: Http,
				private db: AngularFireDatabase) {
	}

	saveRecipes(recipes: Recipe[]) {
		// return this.http.put('https://ng-recipe-book-srabara.firebaseio.com/data.json', this.rService.getRecipes())
		// 	.map(
		// 		(response: Response) => {
		// 			const data = response.json();
		// 			return data;
		// 		}
		// 	);
		this.db.object('/data').set(recipes);
	}

	fetchRecipes(): FirebaseListObservable<Recipe[]> {
		// return this.http.get('https://ng-recipe-book-srabara.firebaseio.com/data.json')
		// 	.map(
		// 		(response: Response) => {
		// 			const data = response.json();
		// 			for (let recipe of data) {
		// 				if (!recipe['ingredients']) {
		// 					console.log(recipe)
		// 					recipe['ingredients'] = [];
		// 				}
		// 			}
		// 			return data;
		// 		}
		// 	)
		// 	.subscribe(
		// 		(recipes: Recipe[]) => {
		// 			this.rService.updateRecipes(recipes);
		// 		}
		// 	);
		return this.db.list('/data');
	}

}