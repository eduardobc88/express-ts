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
var base_route_1 = require("../base-route");
var AppBackendRouter = (function (_super) {
    __extends(AppBackendRouter, _super);
    function AppBackendRouter() {
        return _super.call(this) || this;
    }
    AppBackendRouter.create = function (router) {
        console.log('[IndexRoute::create] Creating index route.');
        router.get('/', function (req, res, next) {
            new AppBackendRouter().index(req, res, next);
        });
        router.get('/test/', function (req, res, next) {
            new AppBackendRouter().index(req, res, next);
        });
    };
    AppBackendRouter.prototype.index = function (req, res, next) {
        this.title = "HOME PAGE";
        var options = {
            'message': 'Wellcome to Home Page'
        };
        this.render(req, res, 'index', options);
    };
    return AppBackendRouter;
}(base_route_1.BaseRoute));
exports.AppBackendRouter = AppBackendRouter;
//# sourceMappingURL=index.js.map