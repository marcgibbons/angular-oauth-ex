'use strict';

describe('Controller: LoginCtrlJsCtrl', function () {

  // load the controller's module
  beforeEach(module('AngularApp'));

  var LoginCtrlJsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoginCtrlJsCtrl = $controller('LoginCtrlJsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
