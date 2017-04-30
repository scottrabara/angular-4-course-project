import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { shoppingListComponent } from './shopping_list/shopping_list.component';
import { recipeDetailComponent } from './recipes/recipe_list/recipe_item/recipe_detail/recipe_detail.component';
import { recipesComponent } from './recipes/recipes.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { SelectRecipeComponent } from './select-recipe/select-recipe.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', 
    component: recipesComponent,
    children: [
      { path: '', component: SelectRecipeComponent, pathMatch: 'full' },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: recipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent }
    ]
  },
  { path: 'shopping-list',
    component: shoppingListComponent}
]; 

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
