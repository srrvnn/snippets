'use strict';

describe('Controller: GoogleCloudMessagingCtrl', function () {

  // load the controller's module
  beforeEach(module('snippetsApp'));

  var GoogleCloudMessagingCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GoogleCloudMessagingCtrl = $controller('GoogleCloudMessagingCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
