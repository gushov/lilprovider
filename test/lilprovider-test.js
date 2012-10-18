/*jshint curly:true, eqeqeq:true, immed:true, latedef:true,
  newcap:true, noarg:true, sub:true, undef:true, boss:true,
  strict:false, eqnull:true, browser:true, node:true */
/*global buster assert provide */

buster.testCase("LilProvider", {

  "should require via provide": function () {

    var testA = { test: 'A' };
    var testB = { test: 'B' };

    provide('testA', testA);
    provide('testB', testB);

    assert.equals(require(null, 'testA'), testA);
    assert.equals(require('testB'), testB);

  }

});