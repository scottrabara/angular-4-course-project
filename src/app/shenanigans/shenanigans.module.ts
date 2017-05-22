import { NgModule } from "@angular/core";
import { ShenanigansComponent } from "app/shenanigans/shenanigans.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { SharedModule } from "app/shared/shared.module";
import { ShenanigansRoutingModule } from "app/shenanigans/shenanigans-routing.module";

@NgModule({
    declarations: [
        ShenanigansComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        SharedModule,
        ShenanigansRoutingModule
    ]
})

export class ShenanigansModule {

}