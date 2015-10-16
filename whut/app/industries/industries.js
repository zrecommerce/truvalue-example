'use strict';

angular.module('myApp.industries', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/industries', {
    templateUrl: 'industries/industries.html',
    controller: 'IndustriesCtrl',
    navTab: 'industries'
  });
}])

.controller('IndustriesCtrl', ['$scope', '$route', function($scope, $route) {
    $scope.navTab = $route.current.navTab;
}]);