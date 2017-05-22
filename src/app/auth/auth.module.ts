import { NgModule } from "@angular/core";
import { SignupComponent } from "app/auth/signup/signup.component";
import { SigninComponent } from "app/auth/signin/signin.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { SharedModule } from "app/shared/shared.module";
import { AuthRoutingModule } from "app/auth/auth-routing.module";
import { ManageAccountComponent } from './manage-account/manage-account.component';

@NgModule({
    declarations: [ 
        SignupComponent,
        SigninComponent,
        ManageAccountComponent],

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