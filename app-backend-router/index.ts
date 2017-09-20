import {
    NextFunction,
    Request,
    Response,
    Router
} from 'express';
import { BaseRoute } from "../base-route";


export class AppBackendRouter extends BaseRoute {

    // constructor
    constructor() {
        super();
    }


    public static create(router: Router) {
        // log
        console.log('[IndexRoute::create] Creating index route.');

        // add home page
        router.get('/',(req: Request, res: Response, next: NextFunction) => {
            new AppBackendRouter().index(req, res, next);
        });

        // add test page
        router.get('/test/',(req: Request, res: Response, next: NextFunction) => {
            new AppBackendRouter().index(req, res, next);
        });
    }


    public index(req: Request, res: Response, next: NextFunction) {
        // set custom title
        this.title = "HOME PAGE";
        // set options
        let options: Object =  {
            'message': 'Wellcome to Home Page'
        }
        // render template
        this.render(req, res, 'index', options);
    }

}