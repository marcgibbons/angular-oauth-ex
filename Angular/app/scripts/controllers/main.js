'use strict';

angular.module('AngularApp')
  .controller('MainCtrl', function ($scope, $cookieStore, $http, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  });
