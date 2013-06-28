'use strict';

angular.module('AngularApp')
  .controller('LoginCtrl', function ($scope, $http, $cookieStore, $location, Auth) {
    $scope.authenticate = function() {
        Auth.getAccessToken($scope.username, $scope.password);
    };
  });
