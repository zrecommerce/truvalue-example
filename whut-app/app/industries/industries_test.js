'use strict';

describe('myApp.industries module', function() {

  beforeEach(module('myApp.industries'));

  describe('industries controller', function(){

    it('should define IndustriesCtrl', inject(function($controller) {
      //spec body
      var industriesCtrl = $controller('IndustriesCtrl');
      expect(industriesCtrl).toBeDefined();
    }));

  });
});