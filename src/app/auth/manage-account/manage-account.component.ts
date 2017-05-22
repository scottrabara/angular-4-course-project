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
  profileForm: FormGroup;
  authState;

  constructor(private auth: AuthService) { }

  ngOnInit() {

    this.initForm();

    this.auth.getAuthState().subscribe(
      user => {
        this.user = this.auth.getUser();
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

    return this.user == null ? true : this.user.emailVerified;
  }

}
