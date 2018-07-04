// Modules
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FeatureModule } from "@foo/foo-feature";
import { AppComponent } from "./app/AppComponent";
import { HomeViewComponent } from "./home-view/HomeViewComponent";
import { RoutesModule } from "./RoutesModule";

// :: import {{{comp_class}}} from "./{{comp_selector}}/{{comp_file}}";

@NgModule({
    imports: [
        BrowserModule
        , CommonModule
        , RouterModule
        , ReactiveFormsModule
        , RoutesModule
        , FeatureModule
    ],
    declarations: [
        AppComponent
        , HomeViewComponent
        // :: ,{{comp_class}}
    ],
    providers: [
        /* Put app-wide DI config here*/
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
