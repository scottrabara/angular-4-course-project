import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ShenanigansComponent } from './shenanigans/shenanigans.component';
import { AuthGuard } from "app/auth/auth-guard.service";
import { shoppingListComponent } from "app/shopping_list/shopping_list.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' }, 
  { path: 'shopping-list',
    //this works because shoppinglistcomponent is declared elsewhere
    //and is loaded before the link for this route has a chance to execute
    component: shoppingListComponent,
    canActivate: [AuthGuard] },
]; 

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
