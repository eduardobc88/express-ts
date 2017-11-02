export class AppGlobalConf {

    public static appBackEndBaseRoute = '/admin/';
    public static appFrontEndBaseRoute = '/';
    public static appAPIBaseRoute = '/api/';
    public static appBackEndView = 'app-backend/view/';
    public static appFrontEndView = 'app-frontend/view/';
    public static appBackEndPublic = 'app-backend/public/';
    public static appFrontEndPublic = 'app-frontend/public/';
    public static appBackEndViewPrefix = 'app-admin/';
    public static appFrontEndViewPrefix = 'app/';
    public static appBackEndPublicPrefix = 'app/';
    public static appFrontEndPublicPrefix = 'app-admin/';
    public static appUploads = 'app-uploads/';


    public static getJSON() {
        return {
            appBackEndBaseRoute: this.appBackEndBaseRoute,
            appFrontEndBaseRoute: this.appFrontEndBaseRoute,
            appAPIBaseRoute: this.appAPIBaseRoute,
            appBackEndView: this.appBackEndView,
            appFrontEndView: this.appFrontEndView,
            appBackEndPublic: this.appBackEndPublic,
            appFrontEndPublic: this.appFrontEndPublic,
            appBackEndViewPrefix: this.appBackEndViewPrefix,
            appFrontkEndViewPrefix: this.appFrontEndViewPrefix,
            appBackEndPublicPrefix: this.appBackEndPublicPrefix,
            appFrontEndPublicPrefix: this.appFrontEndPublicPrefix,
            appUploads: this.appUploads,
        }
    }

}
