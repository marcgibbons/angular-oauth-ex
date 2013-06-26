'use strict';

angular.module('AngularApp')
  .controller('LoginCtrl', function ($scope, $http, $cookieStore, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.authenticate = function() {
        var data = {
            client_id: '2a1bde6f65eaf93efaca',
            client_secret: '1167c2570cda47b6cedb135c3bb9d6bde404628b',
            grant_type: 'password',
            username: $scope.username,
            password: $scope.password
        };
        $http({
            url: "http://localhost:8000/oauth2/access_token",
            method: "POST",
            data: $.param(data),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function(data, status, headers, config) {
            console.log('Authentication Successful!');

            $http.defaults.headers.common['Authorization'] = 'Bearer ' + data.access_token;
            $cookieStore.put('auth', data)
            $location.path('/');
        });
    };
  });
