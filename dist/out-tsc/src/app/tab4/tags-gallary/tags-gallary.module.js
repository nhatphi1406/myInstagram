import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TagsGallaryPage } from './tags-gallary.page';
var routes = [
    {
        path: '',
        component: TagsGallaryPage
    }
];
var TagsGallaryPageModule = /** @class */ (function () {
    function TagsGallaryPageModule() {
    }
    TagsGallaryPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [TagsGallaryPage]
        })
    ], TagsGallaryPageModule);
    return TagsGallaryPageModule;
}());
export { TagsGallaryPageModule };
//# sourceMappingURL=tags-gallary.module.js.map