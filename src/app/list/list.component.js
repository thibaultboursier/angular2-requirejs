/**
 * Created by Thibault on 20/12/2016.
 */
define([
    'app/shared/users/users.service'
], function (UsersService) {
    'use strict';

    return ng.core.Component({
        selector: 'app-list',
        templateUrl: 'app/list/list.component.html'
    })
        .Class({
            constructor: [UsersService, function (UsersService) {
                this.users = UsersService.findAll();
            }]
        });
});
