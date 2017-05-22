import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "app/auth/auth-guard.service";
import { SignupComponent } from "app/auth/signup/signup.component";
import { SigninComponent } from "app/auth/signin/signin.component";
import { ManageAccountComponent } from "app/auth/manage-account/manage-account.component";

const authRoutes: Routes = [
    { path: 'signup',
        component: SignupComponent},
    { path: 'signin',
        component: SigninComponent},
    { path: 'manage-account',
        component: ManageAccountComponent}
]

@NgModule({
    imports: [
        RouterModule.forChild(authRoutes)
    ],
    exports: [RouterModule]
}) 
export class AuthRoutingModule {

}