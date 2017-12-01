// Modules
import {NgModule, ModuleWithProviders} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

import {RoutesModule} from "./RoutesModule";
import {FeatureComponent} from "./feat-comp/FeatureComponent";
// :: import {{{comp_class}}} from "./{{comp_selector}}/{{comp_class}}";

@NgModule({
    imports: [
        BrowserModule
        , CommonModule
        , RouterModule
        , RoutesModule
    ],
    declarations: [
        FeatureComponent
        // :: , {{comp_class}}
    ],
    exports: [
        FeatureComponent
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
