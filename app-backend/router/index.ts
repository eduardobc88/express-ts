import {
    NextFunction,
    Request,
    Response,
    Router
} from 'express';

import { BaseRoute } from "../../lib/base-route";
import { AppGlobalConf } from '../../conf/app-global-conf';


export class AppBackEndRouter extends BaseRoute {

    // constructor
    constructor() {
        super();
    }


    public static create(router: Router) {
        // log
        console.log('== AppBackEndRouter - Creating index route. ==');

        // add home page
        router.get(AppGlobalConf.appBackEndBaseRoute, (req: Request, res: Response, next: NextFunction) => {
            new AppBackEndRouter().index(req, res, next);
        });

        // here add more entries
    }


    public index(req: Request, res: Response, next: NextFunction) {
        // set custom title
        this.title = "AppBackEndRouter - index";
        // set options
        let options: Object =  {
            'message': 'AppBackEndRouter - index'
        }
        // render template
        this.render(req, res, AppGlobalConf.appBackEndViewPrefix+'index', options);
    }

}
