'use strict';

angular.module('snippetsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/google-cloud-messaging', {
        templateUrl: 'app/google-cloud-messaging/google-cloud-messaging.html',
        controller: 'GoogleCloudMessagingCtrl'
      });
  });
