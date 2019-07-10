import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Tab4Page } from './tab4.page';
var routes = [
    {
        path: '',
        component: Tab4Page,
        children: [
            {
                path: 'gallary',
                loadChildren: '../tab4/gallary/gallary.module#GallaryPageModule'
            },
            {
                path: 'tags-gallary',
                loadChildren: '../tab4/tags-gallary/tags-gallary.module#TagsGallaryPageModule'
            },
        ]
    }
];
var Tab4PageRoutingModule = /** @class */ (function () {
    function Tab4PageRoutingModule() {
    }
    Tab4PageRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [],
            declarations: [],
        })
    ], Tab4PageRoutingModule);
    return Tab4PageRoutingModule;
}());
export { Tab4PageRoutingModule };
//# sourceMappingURL=tab4.router.module.js.map