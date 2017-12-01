import {ModuleWithProviders} from "@angular/core";
import {Route, Routes, RouterModule} from "@angular/router";
import {FeatureComponent} from "./feat-comp/FeatureComponent";
// :: import {{{comp_class}}} from "./{{comp_selector}}/{{comp_file}}";

export const ROUTES: Routes = [
    {path: "feature", component: FeatureComponent }
    // :: ,{path: "{{comp_route}}", component: {{comp_class}} }
];
export const RoutesModule: ModuleWithProviders = RouterModule.forChild(ROUTES);
