import { NgModule } from "@angular/core";

import { recipesComponent } from "app/recipes/recipes.component";
import { recipeDetailComponent } from "app/recipes/recipe_list/recipe_item/recipe_detail/recipe_detail.component";
import { recipeItemComponent } from "app/recipes/recipe_list/recipe_item/recipe_item.component";
import { recipeListComponent } from "app/recipes/recipe_list/recipe_list.component";
import { RecipeEditComponent } from "app/recipes/recipe-edit/recipe-edit.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { DropdownDirective } from "app/shared/dropdown.directive";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "app/app-routing.module";
import { RecipesRoutingModule } from "app/recipes/recipes-routing.module";
import { SharedModule } from "app/shared/shared.module";

@NgModule({
    declarations: [
        recipesComponent,
        recipeListComponent,
        recipeItemComponent,
        recipeDetailComponent,
        RecipeEditComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RecipesRoutingModule,
        SharedModule
    ]
})
export class RecipesModule {

}