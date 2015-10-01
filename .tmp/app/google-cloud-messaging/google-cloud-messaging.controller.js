'use strict';

angular.module('snippetsApp').controller('GoogleCloudMessagingCtrl', function ($scope) {

    $scope.sendMessage = function () {

        $http.post('/cloud-message').then(function (response) {

            $scope.data = response;
        }, function (response) {

            $scope.error = response;
        });
    };
});
//# sourceMappingURL=google-cloud-messaging.controller.js.map
