/**
 * Created by Thibault on 20/12/2016.
 */
define([], function () {
    'use strict';

    return ng.core.Injectable()
        .Class({
            constructor: function () {
            },
            findAll: function () {
                return [{
                    id: 1,
                    name: 'Stan'
                }, {
                    id: 2,
                    name: 'Jenny'
                }, {
                    id: 3,
                    name: 'John'
                }];
            }
        });
});
