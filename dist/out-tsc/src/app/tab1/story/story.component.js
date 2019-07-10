import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
var StoryComponent = /** @class */ (function () {
    function StoryComponent(modalController) {
        this.modalController = modalController;
    }
    StoryComponent.prototype.ngOnInit = function () { };
    StoryComponent.prototype.dismiss = function () {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            'dismissed': true
        });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], StoryComponent.prototype, "img", void 0);
    StoryComponent = tslib_1.__decorate([
        Component({
            selector: 'app-story',
            templateUrl: './story.component.html',
            styleUrls: ['./story.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController])
    ], StoryComponent);
    return StoryComponent;
}());
export { StoryComponent };
//# sourceMappingURL=story.component.js.map