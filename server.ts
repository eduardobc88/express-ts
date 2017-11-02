import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import * as logger from 'morgan';
import * as path from 'path';
import errorHandler = require('errorhandler');
import methodOverride = require('method-override');

import { AppGlobalConf } from './conf/app-global-conf';
import { AppBackEndRouter } from './app-backend/router/';
import { AppFrontEndRouter } from './app-frontend/router/';
import { AppAPIRouter } from './app-api/router/';


// server class
export class Server {

    public app: express.Application;

    constructor() {
        // create express application
        console.log("== Server - global config ==", AppGlobalConf.getJSON());
        this.app = express();
        this.config();
        this.appBackEndRouter();
        this.appFrontEndRouter();
        this.appAPIRouter();
    }


    public static bootstrap(): Server {
        return new Server();
    }


    public config() {
        // static paths
        this.app.use(express.static(path.join(__dirname, AppGlobalConf.appFrontEndPublic)));
        this.app.use(express.static(path.join(__dirname, AppGlobalConf.appBackEndPublic)));
        this.app.use(express.static(path.join(__dirname, AppGlobalConf.appUploads)));

        // configure pug
        this.app.set('views', [path.join(__dirname, AppGlobalConf.appFrontEndView), path.join(__dirname, AppGlobalConf.appBackEndView)]);
        this.app.set('view engine', 'pug');

        // user logger middlware
        this.app.use(logger('dev'));

        // use json form parser middlware
        this.app.use(bodyParser.json());

        // use query string parser middlware
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));

        // use cookie parser middleware
        this.app.use(cookieParser('SECRET_APP_HERE'));

        // use override middlware
        this.app.use(methodOverride());

        // catch 404 and forward to error handler
        this.app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
            err.status = 404;
            next(err);
        });

        // error handling
        this.app.use(errorHandler());
    }


    public appBackEndRouter() {
        let router: express.Router;
        router = express.Router();

        // index router
        AppBackEndRouter.create(router);

        // router middlware
        this.app.use(router);
    }


    public appFrontEndRouter() {
        let router: express.Router;
        router = express.Router();

        // index router
        AppFrontEndRouter.create(router);

        // router middlware
        this.app.use(router);
    }


    public appAPIRouter() {
        let router: express.Router;
        router = express.Router();

        // index router api
        AppAPIRouter.create(router);

        // router middlware
        this.app.use(router);
    }

}

