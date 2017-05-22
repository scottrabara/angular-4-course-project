import { NgModule } from "@angular/core";
import { AuthGuard } from "app/auth/auth-guard.service";
import { ShenanigansComponent } from "app/shenanigans/shenanigans.component";
import { Routes, RouterModule } from "@angular/router";

const shenanigansRoutes: Routes = [
    { path: 'shenanigans',
    component: ShenanigansComponent,
    canActivate: [AuthGuard] }
]

@NgModule({
    imports: [RouterModule.forChild(shenanigansRoutes)],
    exports: [RouterModule]
})
export class ShenanigansRoutingModule {

}