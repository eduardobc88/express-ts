"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var base_route_1 = require("../../lib/base-route");
var app_global_conf_1 = require("../../conf/app-global-conf");
var AppFrontEndRouter = (function (_super) {
    __extends(AppFrontEndRouter, _super);
    function AppFrontEndRouter() {
        return _super.call(this) || this;
    }
    AppFrontEndRouter.create = function (router) {
        console.log('== AppFrontEndRouter - Creating index route. ==');
        router.get(app_global_conf_1.AppGlobalConf.appFrontEndBaseRoute, function (req, res, next) {
            new AppFrontEndRouter().index(req, res, next);
        });
    };
    AppFrontEndRouter.prototype.index = function (req, res, next) {
        this.title = "AppFrontEndRouter - index";
        var options = {
            'message': 'AppFrontEndRouter - index'
        };
        this.render(req, res, app_global_conf_1.AppGlobalConf.appFrontEndViewPrefix + 'index', options);
    };
    return AppFrontEndRouter;
}(base_route_1.BaseRoute));
exports.AppFrontEndRouter = AppFrontEndRouter;
//# sourceMappingURL=index.js.map