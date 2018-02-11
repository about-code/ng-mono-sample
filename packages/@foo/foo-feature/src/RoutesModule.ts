import {ModuleWithProviders} from "@angular/core";
import {Route, Routes, RouterModule} from "@angular/router";
import {FooComponent} from "./foo-comp/FooComponent";
// :: import {{{comp_class}}} from "./{{comp_selector}}/{{comp_file}}";

export const ROUTES: Routes = [
    {path: "foo", component: FooComponent }
    // :: ,{path: "{{comp_route}}", component: {{comp_class}} }
];
export const RoutesModule: ModuleWithProviders = RouterModule.forChild(ROUTES);
