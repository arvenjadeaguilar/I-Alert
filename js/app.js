'use strict';

var app = angular.module('app', []);

  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'homeController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
