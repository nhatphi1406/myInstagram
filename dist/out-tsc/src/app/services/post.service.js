import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var PostService = /** @class */ (function () {
    function PostService() {
        this._list = [
            {
                user: "SKY1",
                like: 123,
                post: "ádas",
                image: [
                    "https://images.pexels.com/photos/2555589/pexels-photo-2555589.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "https://images.pexels.com/photos/2574643/pexels-photo-2574643.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                ]
            },
            {
                user: "SKY2",
                like: 123,
                post: "ádas",
                image: [
                    "https://images.pexels.com/photos/2555589/pexels-photo-2555589.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                ]
            },
            {
                user: "SKY3",
                like: 123,
                post: "ádas",
                image: [
                    "https://images.pexels.com/photos/2574643/pexels-photo-2574643.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                ]
            }
        ];
    }
    PostService.prototype.getList = function () {
        return this._list;
    };
    PostService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], PostService);
    return PostService;
}());
export { PostService };
//# sourceMappingURL=post.service.js.map