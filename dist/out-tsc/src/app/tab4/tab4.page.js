import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { SideMenuComponent } from '../tab4/side-menu/side-menu.component';
import { myEnterAnimation } from '../animation/enter';
import { myLeaveAnimation } from '../animation/leave';
var Tab4Page = /** @class */ (function () {
    function Tab4Page(menu, router, modalController) {
        this.menu = menu;
        this.router = router;
        this.modalController = modalController;
    }
    Tab4Page.prototype.ngOnInit = function () {
        this.router.navigate(['tabs/tab4/gallary']);
    };
    Tab4Page.prototype.presentModal = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: SideMenuComponent,
                            cssClass: 'my-custom-modal-css',
                            enterAnimation: myEnterAnimation,
                            leaveAnimation: myLeaveAnimation
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Tab4Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab4',
            templateUrl: './tab4.page.html',
            styleUrls: ['./tab4.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [MenuController, Router, ModalController])
    ], Tab4Page);
    return Tab4Page;
}());
export { Tab4Page };
//# sourceMappingURL=tab4.page.js.map