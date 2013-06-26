'use strict';

angular.module('AngularApp')
  .controller('LogoutCtrl', function ($scope, Auth) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    Auth.logout();
  });
