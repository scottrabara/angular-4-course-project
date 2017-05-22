import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ShenanigansComponent } from './shenanigans/shenanigans.component';
import { AuthGuard } from "app/auth/auth-guard.service";

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' }
]; 

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
