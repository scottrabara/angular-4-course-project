import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { shoppingListComponent } from './shopping_list/shopping_list.component';
import { recipeDetailComponent } from './recipes/recipe_list/recipe_item/recipe_detail/recipe_detail.component';
import { recipesComponent } from './recipes/recipes.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ShenanigansComponent } from './shenanigans/shenanigans.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', 
    component: recipesComponent,
    children: [
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: recipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent }
    ]
  },
  { path: 'shopping-list',
    component: shoppingListComponent},
  { path: 'shenanigans',
    component: ShenanigansComponent},
  { path: 'signup',
    component: SignupComponent}
]; 

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
