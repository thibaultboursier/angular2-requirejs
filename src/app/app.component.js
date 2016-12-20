/**
 * Created by Thibault on 20/12/2016.
 */
define([], function () {
    'use strict';

    return ng.core.Component({
        selector: 'app-root',
        templateUrl: 'app/app.component.html'
    })
        .Class({
            constructor: function () {
                this.title = 'angular2-requirejs';
            }
        });
});
