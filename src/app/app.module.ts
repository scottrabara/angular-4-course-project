import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { shoppingListEditComponent } from './shopping_list/shopping_list_edit/shopping_list_edit.component';
import { shoppingListComponent } from './shopping_list/shopping_list.component';
import { headerComponent } from './header/header.component';
import { RecipeService } from './recipes/recipe.service';
import { ShoppingListService } from './shopping_list/shopping_list.service';
import { DropdownDirective } from './shared/dropdown.directive';
import { DataStorageService } from './shared/data-storage.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { ShenanigansComponent } from './shenanigans/shenanigans.component';
import { AuthService } from "app/auth/auth.service";
import { AuthGuard } from "app/auth/auth-guard.service";
import { RecipesModule } from "app/recipes/recipes.module";
import { SharedModule } from "app/shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    shoppingListEditComponent,
    shoppingListComponent,
    headerComponent,
    SignupComponent,
    SigninComponent,
    ShenanigansComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RecipesModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [DataStorageService, 
              RecipeService, 
              ShoppingListService, 
              AngularFireDatabase,
              AuthService,
              AngularFireAuth,
              AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
