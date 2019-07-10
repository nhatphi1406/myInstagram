import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
var PopoverComponent = /** @class */ (function () {
    function PopoverComponent(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    PopoverComponent.prototype.ngOnInit = function () { };
    PopoverComponent.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    PopoverComponent = tslib_1.__decorate([
        Component({
            selector: 'app-popover',
            templateUrl: './popover.component.html',
            styleUrls: ['./popover.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController])
    ], PopoverComponent);
    return PopoverComponent;
}());
export { PopoverComponent };
//# sourceMappingURL=popover.component.js.map