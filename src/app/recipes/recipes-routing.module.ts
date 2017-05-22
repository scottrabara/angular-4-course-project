import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { recipesComponent } from "app/recipes/recipes.component";
import { RecipeEditComponent } from "app/recipes/recipe-edit/recipe-edit.component";
import { recipeDetailComponent } from "app/recipes/recipe_list/recipe_item/recipe_detail/recipe_detail.component";
import { AuthGuard } from "app/auth/auth-guard.service";

const recipesRoutes: Routes = [
   { path: 'recipes', 
    component: recipesComponent,
    children: [
      { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
      { path: ':id', component: recipeDetailComponent, canActivate: [AuthGuard]},
      { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] }
    ]
  },
]

@NgModule({
    imports: [
        RouterModule.forChild(recipesRoutes)
    ],
    exports: [RouterModule]
}) 
export class RecipesRoutingModule {

}