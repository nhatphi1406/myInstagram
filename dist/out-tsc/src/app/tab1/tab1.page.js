import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';
import { PostService } from '../services/post.service';
import { ModalController } from '@ionic/angular';
import { StoryComponent } from './story/story.component';
var Tab1Page = /** @class */ (function () {
    function Tab1Page(camera, PostSVC, modalController) {
        this.camera = camera;
        this.PostSVC = PostSVC;
        this.modalController = modalController;
        this.story = [
            {
                img: 'https://images.pexels.com/photos/2611813/pexels-photo-2611813.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            },
            {
                img: 'https://images.pexels.com/photos/2439625/pexels-photo-2439625.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            },
            {
                img: 'https://images.pexels.com/photos/1698482/pexels-photo-1698482.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            },
            {
                img: 'https://images.pexels.com/photos/2583847/pexels-photo-2583847.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            },
            {
                img: 'https://images.pexels.com/photos/2611813/pexels-photo-2611813.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            },
            {
                img: 'https://images.pexels.com/photos/2439625/pexels-photo-2439625.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            },
            {
                img: 'https://images.pexels.com/photos/1698482/pexels-photo-1698482.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            },
            {
                img: 'https://images.pexels.com/photos/2583847/pexels-photo-2583847.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            },
            {
                img: 'https://images.pexels.com/photos/2611813/pexels-photo-2611813.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            },
            {
                img: 'https://images.pexels.com/photos/2439625/pexels-photo-2439625.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            },
            {
                img: 'https://images.pexels.com/photos/1698482/pexels-photo-1698482.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            },
            {
                img: 'https://images.pexels.com/photos/2583847/pexels-photo-2583847.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            },
        ];
    }
    Tab1Page.prototype.ngOnInit = function () {
        this.list = this.PostSVC.getList();
    };
    Tab1Page.prototype.presentModal = function (img) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: StoryComponent,
                            componentProps: {
                                'img': img,
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Tab1Page.prototype.takePhoto = function () {
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            var myPhoto = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    Tab1Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab1',
            templateUrl: 'tab1.page.html',
            styleUrls: ['tab1.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Camera, PostService, ModalController])
    ], Tab1Page);
    return Tab1Page;
}());
export { Tab1Page };
//# sourceMappingURL=tab1.page.js.map