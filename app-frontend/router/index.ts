import {
    NextFunction,
    Request,
    Response,
    Router
} from 'express';

import { BaseRoute } from "../../lib/base-route";
import { AppGlobalConf } from '../../conf/app-global-conf';


export class AppFrontEndRouter extends BaseRoute {

    // constructor
    constructor() {
        super();
    }


    public static create(router: Router) {
        // log
        console.log('== AppFrontEndRouter - Creating index route. ==');

        // add home page
        router.get(AppGlobalConf.appFrontEndBaseRoute, (req: Request, res: Response, next: NextFunction) => {
            new AppFrontEndRouter().index(req, res, next);
        });

        // here add more entries
    }


    public index(req: Request, res: Response, next: NextFunction) {
        // set custom title
        this.title = "AppFrontEndRouter - index";
        // set options
        let options: Object =  {
            'message': 'AppFrontEndRouter - index'
        }
        // render template
        this.render(req, res, AppGlobalConf.appFrontEndViewPrefix+'index', options);
    }

}
