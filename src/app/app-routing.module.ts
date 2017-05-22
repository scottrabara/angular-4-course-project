import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { ShenanigansComponent } from './shenanigans/shenanigans.component';
import { AuthGuard } from "app/auth/auth-guard.service";
import { shoppingListComponent } from "app/shopping_list/shopping_list.component";
import { HomeComponent } from "app/core/home/home.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'recipes', 
    loadChildren: './recipes/recipes.module#RecipesModule'
    //Can add canLoad: [AuthGuard]
    //Must implement the canLoad interface in AuthGuard however  
  },
  { path: 'shopping-list',
    //this works because shoppinglistcomponent is declared elsewhere
    //and is loaded before the link for this route has a chance to execute
    component: shoppingListComponent,
    canActivate: [AuthGuard] },
]; 

@NgModule({
  imports: [
    //Preloads lazy loading modules once the app is loaded firstly
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
