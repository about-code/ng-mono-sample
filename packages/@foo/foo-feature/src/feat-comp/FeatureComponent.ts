import {Component, OnInit, OnDestroy} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: "feat-comp",
    templateUrl: "./FeatureComponent.html"
})
export class FeatureComponent implements OnInit, OnDestroy {

    private _route: ActivatedRoute = null;

    constructor(route: ActivatedRoute) {
        this._route = route;
    }

    ngOnInit() {}

    ngOnDestroy() {}
}
