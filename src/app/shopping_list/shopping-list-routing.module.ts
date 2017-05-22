import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { shoppingListComponent } from "app/shopping_list/shopping_list.component";
import { AuthGuard } from "app/auth/auth-guard.service";

const shoppingListRoutes: Routes = [
  { path: 'shopping-list',
    component: shoppingListComponent,
    canActivate: [AuthGuard] },
]

@NgModule({
    imports: [
        RouterModule.forChild(shoppingListRoutes)
    ],
    exports: [RouterModule]
})
export class ShoppingListRoutingModule {

}