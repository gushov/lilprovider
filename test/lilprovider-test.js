/*jshint curly:true, eqeqeq:true, immed:true, latedef:true,
  newcap:true, noarg:true, sub:true, undef:true, boss:true,
  strict:false, eqnull:true, browser:true, node:true */
/*global buster, assert, provide, define */

buster.testCase("LilProvider", {

  "should require via provide": function () {

    var testA = { test: 'A' };
    var testB = { test: 'B' };

    provide('testA', testA);
    provide('testB', testB);

    assert.equals(require(null, 'testA'), testA);
    assert.equals(require('testB'), testB);

  },

  "should require via define": function () {

    provide('packTest/packB/modB', function (require, module, exports) {
      module.exports = { name: 'B' };
    }, true);

    provide('packTest/packA/modA', function (require, module, exports) {
      var b = require('../packB/modB');
      exports.name = 'A';
      exports.buddy = b.name;
    }, true);

    var a = require('packTest/packA/modA');
    assert.equals(a, { name: 'A', buddy: 'B' });
    
  }

});