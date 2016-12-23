define([
    'app/app.component',
    'app/app.route',
    'app/home/home.component',
    'app/list/list.component',
    'app/shared/users/users.service'
], function (AppComponent, APP_ROUTES, HomeComponent, ListComponent, UsersService) {
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
        providers: [
            UsersService
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