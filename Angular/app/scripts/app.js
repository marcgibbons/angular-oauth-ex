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
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function($cookieStore, $location, $http, $rootScope) {
    var auth = $cookieStore.get('auth');

    if (auth) {
        // Let's attempt an API call
        $http.defaults.headers.common['Authorization'] = 'Bearer ' + auth.access_token;
        var config = {
            'method': 'GET',
            'url': 'http://localhost:8000/api/user'
        };

        $http(config) // Get user data
          .success(function(data, status) {
            $rootScope.user = data;
          })
          .error(function(data, status) {
              $location.path('/login');
          });
    }
    else {
        $location.path('/login');
    }

  });
