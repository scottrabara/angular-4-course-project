import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AuthService } from "app/auth/auth.service";
import { Thenable } from "firebase/app";
import { Router } from "@angular/router/";
import { RecipeService } from "app/recipes/recipe.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  error: string;

  constructor(private AuthService: AuthService,
              private rService: RecipeService,
              private router: Router) {
  }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
  	const email = form.value.email;
  	const password = form.value.password;

    // console.log(form.value.email);
    // console.log(form.value.password);

    this.AuthService.signupUser(email, password)
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
        if (this.error.indexOf('email') > 0) {
          form.controls
          .email
          .setErrors({error: 'yes'});
        }
        else if (this.error.indexOf('password') > 0) {
          form.controls
          .password
          .setErrors({error: 'yes'});
        }
      }
    );
}

}
