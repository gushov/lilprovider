/*! lilprovider - v0.0.1 - 2012-11-18
 * https://github.com/gushov/lilprovider
 * Copyright (c) 2012 August Hovland <gushov@gmail.com> Licensed MIT */

(function (ctx) {

  "use strict";

  var defined = {};
  var exported = {};

  function resolve(from, name) {

    if (name.indexOf('.') === -1) {
      return name;
    }

    name = name.split('/');
    from = from ? from.split('/') : [];
    from.pop();

    if (name[0] === '.') {
      name.shift();
    }

    while(name[0] === '..') {
      name.shift();
      from.pop();
    }

    return from.concat(name).join('/');

  }

  //@TODO handle provide/require/define already in scope

  ctx.provide = function (name, module, isDefinition) {

    if (isDefinition) {
      return defined[name] = module;
    } else {
      return exported[name] = module;
    }

  };

  ctx.require = function (path, canonical) {

    var exports, module;
    var name = canonical || path;

    if (exported[name]) {
      return exported[name];
    } else {

      exports = exported[name] = {};
      module = { exports: exports };
      defined[name](function (path) {
        return ctx.require(path, resolve(name, path));
      }, module, exports);

      return (exported[name] = module.exports);

    }

  };

}(this));
 