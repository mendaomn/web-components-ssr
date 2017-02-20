var binder = require('../utils/binder');
var elements = require('./elements/*.js', {mode: 'list'});

elements.forEach( function registerElement(element) {
  var element = element.module;
  document.registerElement(element.name, {
    prototype: binder(element.prototype, HTMLElement)
  });
});
