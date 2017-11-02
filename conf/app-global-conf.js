"use strict";
exports.__esModule = true;
var AppGlobalConf = (function () {
    function AppGlobalConf() {
    }
    AppGlobalConf.getJSON = function () {
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
            appUploads: this.appUploads
        };
    };
    AppGlobalConf.appBackEndBaseRoute = '/admin/';
    AppGlobalConf.appFrontEndBaseRoute = '/';
    AppGlobalConf.appAPIBaseRoute = '/api/';
    AppGlobalConf.appBackEndView = 'app-backend/view/';
    AppGlobalConf.appFrontEndView = 'app-frontend/view/';
    AppGlobalConf.appBackEndPublic = 'app-backend/public/';
    AppGlobalConf.appFrontEndPublic = 'app-frontend/public/';
    AppGlobalConf.appBackEndViewPrefix = 'app-admin/';
    AppGlobalConf.appFrontEndViewPrefix = 'app/';
    AppGlobalConf.appBackEndPublicPrefix = 'app/';
    AppGlobalConf.appFrontEndPublicPrefix = 'app-admin/';
    AppGlobalConf.appUploads = 'app-uploads/';
    return AppGlobalConf;
}());
exports.AppGlobalConf = AppGlobalConf;
//# sourceMappingURL=app-global-conf.js.map