'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.bootstrap',
  'ngRoute',
  'myApp.cars',
  'myApp.industries',
  'myApp.manufacturers',
  'myApp.version',

  'myApp.whutbar'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/cars'});
}]);
