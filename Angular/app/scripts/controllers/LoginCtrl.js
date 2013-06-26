'use strict';

angular.module('AngularApp')
  .controller('LoginCtrl', function ($scope, $http, $cookieStore, $location, Auth) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.authenticate = function() {
        Auth.getAccessToken($scope.username, $scope.password);
    };
  });
