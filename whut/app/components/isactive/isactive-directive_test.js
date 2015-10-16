'use strict';

describe('myApp.isactive module', function() {
  beforeEach(module('myApp.version'));

  describe('is-active directive', function() {
    it('should detect if it is the active value', function() {
      module(function($location) {
        $location.path('/foo');
      });
      inject(function($compile, $rootScope) {
        
        var element = $compile('<a is-active href="#/foo"></a>')($rootScope);
        expect(element.hasClass('active').toEqual('TEST_VER');
      });
    });
  });
});
