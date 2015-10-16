'use strict';

angular.module('myApp.whutbar.whutbar-directive', [])

.directive('whutToSearch', [function() {
  return {
    restrict: 'AE', // Match by attribute, or element
    scope: {
        searchQuery: '=query', // try <whut-to-search value="Foo"></whut-to-search>
        searchContext: '=context', // try <whut-to-search context="cars"></whut-to-search>
        searchResults: '=results', // try <whut-to-search results></whut-to-search>
        searchHints: '=hints', // try <whut-to-search hints></whut-to-search>
        searchDataUri: '=uri'
    },
    link: function (scope, element, attrs, controller) {
        
        element.on('keyup', function (ev) {
            
            /**
             * @todo We need to debounce. Only search if a regex pattern is matched.
             * A DI approach to providing a debounce service would be best.
             */
            console.log('STUB: query data URI with value:', scope.searchQuery);

            /**
             * @todo We need to hit the data URI endpoint using $http
             * and a data factory.
             */
            // scope.searchHints.push('whut');
            // scope.$apply();
        });
    }
  };
}]);
