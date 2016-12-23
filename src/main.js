require([
    'environments/environment',
    'app/app.module'
], function (environment, AppModule) {
    'use strict';

    if (environment.production) {
        ng.core.enableProdMode();
    }

    ng.platformBrowserDynamic
        .platformBrowserDynamic()
        .bootstrapModule(AppModule);
});
