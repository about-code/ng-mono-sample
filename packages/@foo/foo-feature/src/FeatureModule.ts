// Modules
import {NgModule, ModuleWithProviders} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

import {RoutesModule} from "./RoutesModule";
import {FooComponent} from "./foo-comp/FooComponent";
// :: import {{{comp_class}}} from "./{{comp_selector}}/{{comp_class}}";

@NgModule({
    imports: [
        BrowserModule
        , CommonModule
        , RouterModule
        , RoutesModule
    ],
    declarations: [
        FooComponent
        // :: , {{comp_class}}
    ],
    exports: [
        FooComponent
        // :: , {{comp_class}}
    ],
    providers: []
})
export class FeatureModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: FeatureModule,
            providers: []
        };
    }
}
