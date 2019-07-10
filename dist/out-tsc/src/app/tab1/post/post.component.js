import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { PopoverController, IonSlides } from '@ionic/angular';
import { PopoverComponent } from '../../tab1/popover/popover.component';
import { ViewChild } from '@angular/core';
var PostComponent = /** @class */ (function () {
    function PostComponent(popoverController) {
        this.popoverController = popoverController;
        this.currentIndex = 0;
        this.list = {
            user: "đasa",
            like: 123,
            post: "ádas",
            image: [
                "1",
                "2"
            ]
        };
        this.slideOpts = {
            initialSlide: 1,
            speed: 400,
            scrollbar: true
        };
    }
    PostComponent.prototype.ngOnInit = function () { };
    PostComponent.prototype.presentPopover = function (ev) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var popover;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: PopoverComponent,
                            event: ev,
                            translucent: true
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PostComponent.prototype.slideChanged = function () {
        var _this = this;
        this.slides.getActiveIndex().then(function (x) {
            _this.currentIndex = x;
        });
        console.log(this.currentIndex);
        return this.currentIndex;
    };
    PostComponent.prototype.dotShow = function (dot) {
        console.log(dot);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], PostComponent.prototype, "item", void 0);
    tslib_1.__decorate([
        ViewChild(IonSlides),
        tslib_1.__metadata("design:type", IonSlides)
    ], PostComponent.prototype, "slides", void 0);
    PostComponent = tslib_1.__decorate([
        Component({
            selector: 'app-post',
            templateUrl: './post.component.html',
            styleUrls: ['./post.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [PopoverController])
    ], PostComponent);
    return PostComponent;
}());
export { PostComponent };
//# sourceMappingURL=post.component.js.map