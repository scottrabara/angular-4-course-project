import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms/src/forms";
import { AuthService } from "app/auth/auth.service";
import { RecipeService } from "app/recipes/recipe.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private AuthService: AuthService,
              private rService: RecipeService) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
  	const email = form.value.email;
  	const password = form.value.password;

    console.log(form.value.email);
    console.log(form.value.password);
    this.AuthService.signinUser(email, password);
  }
}
