'use strict';

angular.module('myApp.cars', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cars', {
    templateUrl: 'cars/cars.html',
    controller: 'CarsCtrl',
    navTab: 'cars'
  });
}])

.controller('CarsCtrl', ['$scope', '$route', function($scope, $route) {
    $scope.navTab = $route.current.navTab;
    $scope.searchValue = '';
    $scope.searchHints = [];
    $scope.searchResults = [];

    $scope.searchNow = function () {
        console.log("search for cars!", $scope.searchValue);
    }
}]);