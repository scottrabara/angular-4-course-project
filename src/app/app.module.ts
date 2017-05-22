import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { headerComponent } from './header/header.component';
import { RecipeService } from './recipes/recipe.service';
import { ShoppingListService } from './shopping_list/shopping_list.service';
import { DataStorageService } from './shared/data-storage.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AuthService } from "app/auth/auth.service";
import { AuthGuard } from "app/auth/auth-guard.service";
import { SharedModule } from "app/shared/shared.module";
import { ShoppingListModule } from "app/shopping_list/shopping-list.module";
import { AuthModule } from "app/auth/auth.module";
import { ShenanigansModule } from "app/shenanigans/shenanigans.module";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    ShoppingListModule,
    ShenanigansModule,
    SharedModule,
    AuthModule,
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
