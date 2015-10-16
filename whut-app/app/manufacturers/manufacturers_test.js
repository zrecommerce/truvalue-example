'use strict';

describe('myApp.manufacturers module', function() {

  beforeEach(module('myApp.manufacturers'));

  describe('manufacturers controller', function(){

    it('should define ManufacturersCtrl', inject(function($controller) {
      //spec body
      var manufacturersCtrl = $controller('ManufacturersCtrl');
      expect(manufacturersCtrl).toBeDefined();
    }));

  });
});