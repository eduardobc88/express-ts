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
var AppBackEndRouter = (function (_super) {
    __extends(AppBackEndRouter, _super);
    function AppBackEndRouter() {
        return _super.call(this) || this;
    }
    AppBackEndRouter.create = function (router) {
        console.log('== AppBackEndRouter - Creating index route. ==');
        router.get(app_global_conf_1.AppGlobalConf.appBackEndBaseRoute, function (req, res, next) {
            new AppBackEndRouter().index(req, res, next);
        });
    };
    AppBackEndRouter.prototype.index = function (req, res, next) {
        this.title = "AppBackEndRouter - index";
        var options = {
            'message': 'AppBackEndRouter - index'
        };
        this.render(req, res, app_global_conf_1.AppGlobalConf.appBackEndViewPrefix + 'index', options);
    };
    return AppBackEndRouter;
}(base_route_1.BaseRoute));
exports.AppBackEndRouter = AppBackEndRouter;
//# sourceMappingURL=index.js.map