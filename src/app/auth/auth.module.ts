import { NgModule } from "@angular/core";
import { SignupComponent } from "app/auth/signup/signup.component";
import { SigninComponent } from "app/auth/signin/signin.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { SharedModule } from "app/shared/shared.module";
import { AuthRoutingModule } from "app/auth/auth-routing.module";

@NgModule({
    declarations: [ 
        SignupComponent,
        SigninComponent,],

    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        SharedModule,
        AuthRoutingModule
    ]
})

export class AuthModule {

}