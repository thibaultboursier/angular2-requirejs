define([
    'app/app.component',
    'app/app.route',
    'app/foo/foo.component'
], function (AppComponent, APP_ROUTES, FooComponent) {
    'use strict';

    return ng.core.NgModule({
        imports: [
            ng.platformBrowser.BrowserModule,
            APP_ROUTES
        ],
        declarations: [
            AppComponent,
            FooComponent
        ],
        bootstrap: [
            AppComponent
        ]
    })
        .Class({
            constructor: function () {
            }
        });
});