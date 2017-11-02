"use strict";
exports.__esModule = true;
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var express = require("express");
var logger = require("morgan");
var path = require("path");
var errorHandler = require("errorhandler");
var methodOverride = require("method-override");
var app_global_conf_1 = require("./conf/app-global-conf");
var _1 = require("./app-backend/router/");
var _2 = require("./app-frontend/router/");
var _3 = require("./app-api/router/");
var Server = (function () {
    function Server() {
        console.log("== Server - global config ==", app_global_conf_1.AppGlobalConf.getJSON());
        this.app = express();
        this.config();
        this.appBackEndRouter();
        this.appFrontEndRouter();
        this.appAPIRouter();
    }
    Server.bootstrap = function () {
        return new Server();
    };
    Server.prototype.config = function () {
        this.app.use(express.static(path.join(__dirname, app_global_conf_1.AppGlobalConf.appFrontEndPublic)));
        this.app.use(express.static(path.join(__dirname, app_global_conf_1.AppGlobalConf.appBackEndPublic)));
        this.app.use(express.static(path.join(__dirname, app_global_conf_1.AppGlobalConf.appUploads)));
        this.app.set('views', [path.join(__dirname, app_global_conf_1.AppGlobalConf.appFrontEndView), path.join(__dirname, app_global_conf_1.AppGlobalConf.appBackEndView)]);
        this.app.set('view engine', 'pug');
        this.app.use(logger('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.app.use(cookieParser('SECRET_APP_HERE'));
        this.app.use(methodOverride());
        this.app.use(function (err, req, res, next) {
            err.status = 404;
            next(err);
        });
        this.app.use(errorHandler());
    };
    Server.prototype.appBackEndRouter = function () {
        var router;
        router = express.Router();
        _1.AppBackEndRouter.create(router);
        this.app.use(router);
    };
    Server.prototype.appFrontEndRouter = function () {
        var router;
        router = express.Router();
        _2.AppFrontEndRouter.create(router);
        this.app.use(router);
    };
    Server.prototype.appAPIRouter = function () {
        var router;
        router = express.Router();
        _3.AppAPIRouter.create(router);
        this.app.use(router);
    };
    return Server;
}());
exports.Server = Server;
//# sourceMappingURL=server.js.map