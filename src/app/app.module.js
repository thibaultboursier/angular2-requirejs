define([
    'app/app.component',
    'app/app.route',
    'app/home/home.component',
    'app/list/list.component'
], function (AppComponent, APP_ROUTES, HomeComponent, ListComponent) {
    'use strict';

    return ng.core.NgModule({
        imports: [
            ng.platformBrowser.BrowserModule,
            APP_ROUTES
        ],
        declarations: [
            AppComponent,
            HomeComponent,
            ListComponent
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