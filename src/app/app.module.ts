import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { shoppingListEditComponent } from './shopping_list/shopping_list_edit/shopping_list_edit.component';
import { shoppingListComponent } from './shopping_list/shopping_list.component';
import { recipeListComponent } from './recipes/recipe_list/recipe_list.component';
import { recipeItemComponent } from './recipes/recipe_list/recipe_item/recipe_item.component';
import { recipeDetailComponent } from './recipes/recipe_list/recipe_item/recipe_detail/recipe_detail.component';
import { headerComponent } from './header/header.component';
import { recipesComponent } from './recipes/recipes.component';
import { RecipeService } from './recipes/recipe.service';
import { ShoppingListService } from './shopping_list/shopping_list.service';
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    shoppingListEditComponent,
    shoppingListComponent,
    recipeListComponent,
    recipeItemComponent,
    recipeDetailComponent,
    recipesComponent,
    headerComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [RecipeService, ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
