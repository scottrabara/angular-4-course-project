
import { NgModule } from "@angular/core";
import { shoppingListComponent } from "app/shopping_list/shopping_list.component";
import { shoppingListEditComponent } from "app/shopping_list/shopping_list_edit/shopping_list_edit.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { SharedModule } from "app/shared/shared.module";

@NgModule({
    declarations: [
        shoppingListEditComponent,
        shoppingListComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        SharedModule
    ]
})
export class ShoppingListModule {

}