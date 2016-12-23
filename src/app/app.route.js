/**
 * Created by Thibault on 20/12/2016.
 */
define([
    'app/home/home.component',
    'app/list/list.component'
], function (HomeComponent, ListComponent) {
    'use strict';

    var ROUTES = [
        {path: '', redirectTo: 'home', pathMatch: 'full'},
        {path: 'home', component: HomeComponent},
        {path: 'list', component: ListComponent}
    ];

    return ng.router.RouterModule.forRoot(ROUTES, {useHash: true});
});
