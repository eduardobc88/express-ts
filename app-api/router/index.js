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
var AppAPIRouter = (function (_super) {
    __extends(AppAPIRouter, _super);
    function AppAPIRouter() {
        return _super.call(this) || this;
    }
    AppAPIRouter.create = function (router) {
        console.log('== AppAPIRouter - Creating index route. ==');
        router.get(app_global_conf_1.AppGlobalConf.appAPIBaseRoute, function (req, res, next) {
            new AppAPIRouter().index(req, res, next);
        });
    };
    AppAPIRouter.prototype.index = function (req, res, next) {
        res.json({
            title: 'AppAPIRouter - API'
        });
    };
    return AppAPIRouter;
}(base_route_1.BaseRoute));
exports.AppAPIRouter = AppAPIRouter;
//# sourceMappingURL=index.js.map