/**
 * Created by Thibault on 20/12/2016.
 */
define([
    'app/foo/foo.component'
], function (FooComponent) {
    'use strict';

    var ROUTES = [
        {path: '', redirectTo: 'foo', pathMatch: 'full'},
        {path: 'foo', component: FooComponent}
    ];

    return ng.router.RouterModule.forRoot(ROUTES, {useHash: true});
});
