'use strict';

angular.module('myApp.manufacturers', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/manufacturers', {
    templateUrl: 'manufacturers/manufacturers.html',
    controller: 'ManufacturersCtrl',
    navTab: 'manufacturers'
  });
}])

.controller('ManufacturersCtrl', ['$scope', '$route', function($scope, $route) {
    $scope.navTab = $route.current.navTab;
}]);