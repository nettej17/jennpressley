angular.module('jeanetteApp')
    .directive('jWebsite', function () {
        'use strict';

        return {
            restrict: 'E',
            templateUrl: '/partials/website.html'
        };

    });
