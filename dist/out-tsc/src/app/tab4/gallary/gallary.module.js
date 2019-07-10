import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { GallaryPage } from './gallary.page';
var routes = [
    {
        path: '',
        component: GallaryPage
    }
];
var GallaryPageModule = /** @class */ (function () {
    function GallaryPageModule() {
    }
    GallaryPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [GallaryPage]
        })
    ], GallaryPageModule);
    return GallaryPageModule;
}());
export { GallaryPageModule };
//# sourceMappingURL=gallary.module.js.map