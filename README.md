# lilprovider

A li'l provide/require shim to share modules in the browser.

## Description

lilprovider adds provide and require methods to the current context.

## Basic usage

```javascript
(function () {

  var blender = {
    blend: function () {}
  }

  provide('blender', blender);

}());

(function () {
  
  var blender = require('blender');
  blender.blend();


}());
```

## License
Copyright (c) 2012 August Hovland
Licensed under the MIT license.
