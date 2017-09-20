"use strict";
exports.__esModule = true;
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var express = require("express");
var logger = require("morgan");
var path = require("path");
var errorHandler = require("errorhandler");
var methodOverride = require("method-override");
var _1 = require("./app-backend-router/");
var Server = (function () {
    function Server() {
        this.app = express();
        this.config();
        this.routes();
        this.api();
    }
    Server.bootstrap = function () {
        return new Server();
    };
    Server.prototype.config = function () {
        this.app.use(express.static(path.join(__dirname, 'public')));
        this.app.set('views', path.join(__dirname, 'app-views'));
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
    Server.prototype.routes = function () {
        var router;
        router = express.Router();
        _1.AppBackendRouter.create(router);
        this.app.use(router);
    };
    Server.prototype.api = function () {
    };
    return Server;
}());
exports.Server = Server;
//# sourceMappingURL=server.js.map