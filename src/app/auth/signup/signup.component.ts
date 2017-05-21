import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AuthService } from "app/auth/auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private AuthService: AuthService) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
  	const email = form.value.email;
  	const password = form.value.password;

    console.log(form.value.email);
    console.log(form.value.password);
    this.AuthService.signupUser(email, password);
  }

}
