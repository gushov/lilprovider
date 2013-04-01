/*! lilprovider - v0.0.2 - 2013-04-01
 * https://github.com/gushov/lilprovider
 * Copyright (c) 2013 August Hovland <gushov@gmail.com> Licensed MIT */

(function (ctx) {

  "use strict";

  var defined = {};
  var exported = {};
  var oldRequire = ctx.require;

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
  //@TODO make define a separte function

  ctx.define = function (name, definition) {
    return defined[name] = definition;
  };

  ctx.provide = function (name, module) {
    return exported[name] = module;
  };

  ctx.require = function (path, canonical) {

    var exports, module;
    var name = canonical || path;

    if (exported[name]) {
      return exported[name];
    } else if (defined[name]){

      exports = exported[name] = {};
      module = { exports: exports };
      defined[name](function (path) {
        return ctx.require(path, resolve(name, path));
      }, module, exports);

      return (exported[name] = module.exports);

    } else if (oldRequire(name)) {
      return (exported[name] = oldRequire(name));
    }

  };

}(this));
 