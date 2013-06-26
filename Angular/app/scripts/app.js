'use strict';

angular.module('AngularApp', ['ngCookies'])
  .config(function ($routeProvider, $httpProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
          templateUrl: 'views/login.html',
          controller: 'LoginCtrl'
      })
      .when('/logout', {
          templateUrl: 'views/logout.html',
          controller: 'LogoutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function($rootScope) {
    $rootScope.CONFIG = {
        apiUrl: 'http://localhost:8000',
        clientId: '2a1bde6f65eaf93efaca',
        clientSecret: '1167c2570cda47b6cedb135c3bb9d6bde404628b',
    };
  })
  .run(function($cookieStore, $location, $http, $rootScope, Auth) {
    Auth.authenticate()
  });
