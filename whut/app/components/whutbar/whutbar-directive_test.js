'use strict';

describe('myApp.whutbar module', function() {
  beforeEach(module('myApp.whutbar'));

  describe('app-whutbar directive', function() {
    it('should only search after at least 2 characters are typed.', function() {
      // module(function($provide) {
      //   $provide.value('version', 'TEST_VER');
      // });
      inject(function($compile, $rootScope) {
        $rootScope.hints = ["test1", "test2", "test3"];
        $rootScope.results = ["test2 bar"];

        var element = $compile('<span whut-to-search query="bar" context="foo" hint="hints" results="results"></span>')($rootScope);
        expect(element.value()).toEqual('bar');
      });
    });


    it('should not display any results when the input is empty', function() {
      inject(function($compile, $rootScope) {
        var element = $compile('<span whut-to-search></span>')($rootScope);
        expect(element.text()).toEqual('TEST_VER');
      });
    });
  });
});
