require([
    'environments/environment',
    'app/app.module'
], function (environment, AppModule) {
    'use strict';

    /** if (environment.production) {
        enableProdMode();
    }**/

    ng.platformBrowserDynamic
        .platformBrowserDynamic()
        .bootstrapModule(AppModule);
});
