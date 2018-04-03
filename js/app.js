/*global angular */

/**
 * The main TodoMVC app module
 *
 * @type {angular.Module}
 */

angular = require('angular');
require('angular-route');
require('../dist/templateCachePartials');

angular.module('jeanetteApp', ['ngRoute','jeanettePartials'])
	.config(function ($routeProvider) {
		'use strict';

		var routeConfig = {
			controller: 'JeanetteCtrl',
			templateUrl: '/partials/home.html'
		};

		$routeProvider
			.when('/', routeConfig)
            // .when('/:status', routeConfig)
            .when('/graphics', {
                templateUrl: '/partials/graphics.html',
                controller: 'JeanetteCtrl'
            })
			.otherwise({
				redirectTo: '/'
			});

        // $routeProvider.when('/graphics', {
        //     templateUrl: 'graphics.html',
        //     controller: 'GraphicsCtrl'
        // });

        // $locationProvider.html5Mode(true);
    });

require('jeanetteCtrl');
// require('graphicsCtrl');
// require('footer');
