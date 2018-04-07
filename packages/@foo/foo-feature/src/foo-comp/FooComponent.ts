import {Component, OnInit, OnDestroy} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: "foo-comp",
    templateUrl: "./FooComponent.html"
})
export class FooComponent implements OnInit, OnDestroy {

    private _route: ActivatedRoute | null = null;

    constructor(route: ActivatedRoute) {
        this._route = route;
    }

    ngOnInit() {}

    ngOnDestroy() {}
}
