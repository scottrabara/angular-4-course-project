import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { AuthService } from "app/auth/auth.service";
import { User } from "firebase/app";

@Component({
  selector: 'app-manage-account',
  templateUrl: './manage-account.component.html',
  styleUrls: ['./manage-account.component.css']
})
export class ManageAccountComponent implements OnInit {

  user: User;
  verified: boolean = false;
  updated: boolean = false;
  profileForm: FormGroup;
  updatedTime: string;
  authState;
  message: string = "E-mail has not been verified! Click here to verify!";

  constructor(private auth: AuthService) { }

  ngOnInit() {

    this.initForm();

    this.auth.getAuthState().subscribe(
      user => {
        this.user = this.auth.getUser();
        this.verified = this.user.emailVerified;
        this.profileForm = new FormGroup({
          'username': new FormControl(this.user.displayName),
          'email': new FormControl(this.user.email),
          'uid': new FormControl({value: this.user.uid, disabled: true}) 
        });
      }
    );
  }

  initForm() {
    this.profileForm = new FormGroup({
      'username': new FormControl(''),
      'email': new FormControl(''),
      'uid': new FormControl({value: '', disabled: true}) 
    }); 
  }

  isVerified() {
    return this.verified;
  }

  onVerify() {
    this.user.sendEmailVerification();
    this.message = "Verification Email has been sent, please check your inbox."
  }

  onSubmit() {
    const newUserName = this.profileForm.get('username').value;
    this.user.updateProfile({displayName: newUserName, photoURL: this.user.photoURL})
    .then(
      () => {
        console.log(this.user.displayName)
      }
    );
    this.updatedTime = this.getTime();
    this.updated = true;
  }

  isUpdated() {
    return this.updated;
  }

  getTime() {
    return '[' + new Date().toLocaleTimeString() + ']';
  }
}
