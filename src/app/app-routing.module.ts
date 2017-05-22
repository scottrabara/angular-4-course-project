import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { shoppingListComponent } from './shopping_list/shopping_list.component';
import { recipeDetailComponent } from './recipes/recipe_list/recipe_item/recipe_detail/recipe_detail.component';
import { recipesComponent } from './recipes/recipes.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ShenanigansComponent } from './shenanigans/shenanigans.component';
import { SigninComponent } from "app/auth/signin/signin.component";
import { AuthGuard } from "app/auth/auth-guard.service";

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'shopping-list',
    component: shoppingListComponent,
    canActivate: [AuthGuard] },
  { path: 'shenanigans',
    component: ShenanigansComponent,
    canActivate: [AuthGuard] },
  { path: 'signup',
    component: SignupComponent},
  { path: 'signin',
    component: SigninComponent}
]; 

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
