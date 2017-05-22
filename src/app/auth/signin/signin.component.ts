import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms/src/forms";
import { AuthService } from "app/auth/auth.service";
import { RecipeService } from "app/recipes/recipe.service";
import { Router } from "@angular/router/";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  error: string;

  constructor(private AuthService: AuthService,
              private rService: RecipeService,
              private router: Router) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
  	const email = form.value.email;
  	const password = form.value.password;

    // console.log(form.value.email);
    // console.log(form.value.password);
    this.AuthService.signinUser(email, password)
    .then(
      // When successful
      () => {
        //Fetch recipes and navigate back to root
        this.rService.fetchRecipes();
        this.router.navigate(['/']);
      }
    )
    .catch(
      //if not successful
      error => {
        //do not navigate away, retrieve error message
        //update the form controls, and output error
        this.error = error.message;
        if (this.error.toLocaleUpperCase().indexOf('EMAIL') > 0) {
          form.controls
          .email
          .setErrors({error: 'yes'});
        }
        else if (this.error.toLocaleUpperCase().indexOf('PASSWORD') > 0) {
          form.controls
          .password
          .setErrors({error: 'yes'});
        }
      }
    );;
  }
}
