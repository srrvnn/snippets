'use strict';

angular.module('snippetsApp').config(function ($routeProvider) {
  $routeProvider.when('/admin', {
    templateUrl: 'app/admin/admin.html',
    controller: 'AdminCtrl'
  });
});
//# sourceMappingURL=admin.js.map
