import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private rService: RecipeService) { }

  ngOnInit() {
  	this.route.params.subscribe(
  		(params) => {
  			this.id = +params['id'];
  			this.editMode = params['id'] != null;
  			this.initForm();
  		}
  	);
  }

  private initForm() {
  let recipeName = '';
  let recipeImagePath = '';
  let recipeDesc = '';
  let recipeIngredients = new FormArray([]);

  if (this.editMode) {
    const recipe = this.rService.getRecipe(this.id);
    recipeName = recipe.name;
    recipeImagePath = recipe.imagePath;
    recipeDesc = recipe.descrip;
    if (recipe['ingredients']) {
      for (let ing of recipe.ingredients) {
        recipeIngredients.push(
          new FormGroup({
            'name': new FormControl(ing.name, Validators.required),
            'amount': new FormControl(ing.amount, 
                [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
          })
        )
      }
    }
  }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'descrip': new FormControl(recipeDesc, Validators.required),
      'ingredients': recipeIngredients
    });
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
        new FormGroup({
          'name': new FormControl(null, Validators.required),
          'amount': new FormControl(null,
             [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
        })
      )
  }

  getIngredientsControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onSubmit() {
    const newRecipe = new Recipe(this.recipeForm.value['name'],
                                 this.recipeForm.value['descrip'],
                                 this.recipeForm.value['imagePath'],
                                 this.recipeForm.value['ingredients']);
    console.log(this.recipeForm);
    if (this.editMode) {
      this.rService.updateRecipe(this.id, this.recipeForm.value);
    }
    else {
      this.rService.addRecipe(newRecipe);
    }

    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['..']);
  }
}
