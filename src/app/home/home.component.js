/**
 * Created by Thibault on 20/12/2016.
 */
define([], function () {
    'use strict';

    return ng.core.Component({
        selector: 'app-home',
        templateUrl: 'app/home/home.component.html'
    })
        .Class({
            constructor: function () {
                this.title = 'Angular 2 running with RequireJS';
            }
        });
});
