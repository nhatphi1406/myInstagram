import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Tab3Page } from './tab3.page';
import { UserActivityComponent } from './user-activity/user-activity.component';
import { FollowingActivityComponent } from './following-activity/following-activity.component';
var routes = [
    {
        path: '',
        component: Tab3Page,
        children: [
            {
                path: 'following',
                component: FollowingActivityComponent
            },
            {
                path: 'user',
                component: UserActivityComponent
            },
        ]
    }
];
var Tab3PageRoutingModule = /** @class */ (function () {
    function Tab3PageRoutingModule() {
    }
    Tab3PageRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [],
            declarations: [],
        })
    ], Tab3PageRoutingModule);
    return Tab3PageRoutingModule;
}());
export { Tab3PageRoutingModule };
//# sourceMappingURL=tab3.routing.module.js.map