/**
 * Created by Thibault on 20/12/2016.
 */
define([], function () {
    'use strict';

    return ng.core.Component({
        selector: 'app-list',
        templateUrl: 'app/list/list.component.html'
    })
        .Class({
            constructor: function () {
                this.title = 'liste';
            }
        });
});
