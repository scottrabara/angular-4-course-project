import { NgModule } from "@angular/core";
import { HomeComponent } from "app/core/home/home.component";
import { headerComponent } from "app/core/header/header.component";
import { SharedModule } from "app/shared/shared.module";
import { AppRoutingModule } from "app/app-routing.module";
import { CommonModule } from "@angular/common";
import { DataStorageService } from "app/shared/data-storage.service";
import { RecipeService } from "app/recipes/recipe.service";
import { ShoppingListService } from "app/shopping_list/shopping_list.service";
import { AngularFireDatabase } from "angularfire2/database";
import { AuthService } from "app/auth/auth.service";
import { AngularFireAuth } from "angularfire2/auth";
import { AuthGuard } from "app/auth/auth-guard.service";

@NgModule({
    declarations: [
        headerComponent,
        HomeComponent
    ],
    imports: [
        SharedModule,
        AppRoutingModule,
        CommonModule
    ],
    exports: [
        AppRoutingModule,
        headerComponent
    ],
    providers: [DataStorageService, 
              RecipeService, 
              ShoppingListService, 
              AngularFireDatabase,
              AuthService,
              AngularFireAuth,
              AuthGuard
    ]
})

export class CoreModule {

}