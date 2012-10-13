/*! lilprovider - v0.0.0 - 2012-10-13
 * Copyright (c) 2012 August Hovland; Licensed MIT */

(function (ctx) {

  var modules = {};

  if (typeof ctx.provide !== 'function' ) {

    ctx.provide = function (name, module) {
      modules[name] = module;
    };

    ctx.require = function (path, name) {
      return modules[name];
    };

  }

}(this));