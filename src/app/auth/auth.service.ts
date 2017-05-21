import { AngularFireDatabase } from "angularfire2/database";
import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from "@angular/router";

@Injectable()

export class AuthService {
    token: string;

    constructor(private auth: AngularFireAuth,
                private router: Router) {
        this.token = '';
    }

    signupUser(email: string, password: string) {
        this.auth
            .app
            .auth()
            .createUserWithEmailAndPassword(email, password);
    }

    signinUser(email: string, password: string) {
        this.auth
            .app
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(
                response => {
                    this.router.navigate(['/']);
                    console.log(response)
                    this.auth.app
                    .auth()
                    .currentUser
                    .getToken()
                    .then(
                        (token: string) => this.token = token
                    );
                }
            )
            .catch(
                error => console.log(error)
            ); 
    }

    signoutUser() {
        this.auth.app.auth().signOut();
        this.token = '';
    }
    // getToken() {
    //     this.auth.app
    //     .auth()
    //     .currentUser
    //     .getToken()
    //     .then(
    //        (token: string) => this.token = token
    //      );
    //      return this.token || '';
    // }

    isAuthenticated() {
        return this.auth.app.auth().currentUser != null;
    }

}