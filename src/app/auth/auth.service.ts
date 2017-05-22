import { AngularFireDatabase } from "angularfire2/database";
import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from "@angular/router";
import { DataStorageService } from "app/shared/data-storage.service";
import { RecipeService } from "app/recipes/recipe.service";
import * as firebase from 'firebase/app';

@Injectable()

export class AuthService {
    token: string;

    constructor(private auth: AngularFireAuth,
                private router: Router,
                private rService: RecipeService) {
        this.token = '';
    }

    signupUser(email: string, password: string): firebase.Promise<any> {
        return this.auth
            .app
            .auth()
            .createUserWithEmailAndPassword(email, password);
        
    }

    signinUser(email: string, password: string) {
        return this.auth
            .app
            .auth()
            .signInWithEmailAndPassword(email, password);
    }

    signoutUser() {
        this.auth.app.auth().signOut();
        this.router.navigate(['/']);
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

    getUser() {
        return this.auth.app.auth().currentUser;
    }

    getAuthState() {
        return this.auth.authState;
    }

}