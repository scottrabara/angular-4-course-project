import { NgModule } from "@angular/core";
import { DropdownDirective } from "app/shared/dropdown.directive";

@NgModule({
    declarations: [
        DropdownDirective
    ],
    exports: [ DropdownDirective]
    //NEVER PROVIDE SERVICES IN SHARED MODULES
    // This will create child instances for each feature module
    // that uses this SharedModule instead of using the Root
    // injector's instance
})
export class SharedModule {

}