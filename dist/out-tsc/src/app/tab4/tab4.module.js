import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Tab4Page } from './tab4.page';
import { Tab4PageRoutingModule } from './tab4.router.module';
import { SideMenuComponent } from './side-menu/side-menu.component';
var Tab4PageModule = /** @class */ (function () {
    function Tab4PageModule() {
    }
    Tab4PageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                Tab4PageRoutingModule
            ],
            declarations: [Tab4Page, SideMenuComponent],
            entryComponents: [SideMenuComponent]
        })
    ], Tab4PageModule);
    return Tab4PageModule;
}());
export { Tab4PageModule };
//# sourceMappingURL=tab4.module.js.map