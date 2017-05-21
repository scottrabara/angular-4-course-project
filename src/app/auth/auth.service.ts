import { AngularFireDatabase } from "angularfire2/database";
import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";

@Injectable()

export class AuthService {
    token: string;

    constructor(private auth: AngularFireAuth) {
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
}