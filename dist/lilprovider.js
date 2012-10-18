/*! lilprovider - v0.0.0 - 2012-10-18
* https://github.com/gushov/lilprovider
 * Copyright (c) 2012 August Hovland <contact@augusthovland.com>; Licensed MIT */

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