 /*jshint curly:true, eqeqeq:true, immed:true, latedef:true,
  newcap:true, noarg:true, sub:true, undef:true, boss:true,
  strict:false, eqnull:true, browser:true, node:true */

(function (ctx) {

  var modules = {};

  if (typeof ctx.provide !== 'function' ) {

    ctx.provide = function (name, module) {
      modules[name] = module;
    };

    ctx.require = function (path, name) {
      return name ? modules[name] : modules[path];
    };

  }

}(this));