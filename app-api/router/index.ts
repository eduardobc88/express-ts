import {
    NextFunction,
    Request,
    Response,
    Router
} from 'express';

import { BaseRoute } from "../../lib/base-route";
import { AppGlobalConf } from '../../conf/app-global-conf';


export class AppAPIRouter extends BaseRoute {

    constructor() {
        super();
    }

    // router API
    public static create(router: Router) {
        // log
        console.log('== AppAPIRouter - Creating index route. ==');

        // add index entry
        router.get(AppGlobalConf.appAPIBaseRoute, (req: Request, res: Response, next: NextFunction) => {
            new AppAPIRouter().index(req, res, next);
        });

        // here add more entries
    }


    // router callbacks
    public index(req: Request, res: Response, next: NextFunction) {
        // render response
        res.json({
            title: 'AppAPIRouter - API'
        });
    }

}
