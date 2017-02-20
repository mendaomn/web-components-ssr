(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var MyHeader = {
    createdCallback: function() {
      this.innerHTML = "<h1>Super Mega Title</h1>";
      this.addEventListener('click', this._handler);
    },
    _handler: function() {
      console.log("Click!");
    }
};

module.exports = {
  prototype: MyHeader,
  name: 'my-header'
};

},{}],2:[function(require,module,exports){
var MyNewElement = {
    createdCallback: function() {
      this.innerHTML = "Hi dude!";
    },
    _superFn: function() {
      console.log( "Alive" );
    }
};

module.exports = {
  prototype: MyNewElement,
  name: 'my-new-element'
};

},{}],3:[function(require,module,exports){
var binder = require('../utils/binder');
// var element = require('./elements/myNewElement');
// var importer = require('../utils/importElements');
var elements = [{name:'myHeader',module:require('./elements/myHeader.js')},{name:'myNewElement',module:require('./elements/myNewElement.js')}];

elements.forEach( function registerElement(element) {
  var element = element.module;
  document.registerElement(element.name, {
    prototype: binder(element.prototype, HTMLElement)
  });
});

},{"../utils/binder":4,"./elements/myHeader.js":1,"./elements/myNewElement.js":2}],4:[function(require,module,exports){
module.exports = function inheritFrom( element, htmlelement ) {
  return Object.assign(
    Object.create( htmlelement.prototype ),
    element
  );
}

},{}]},{},[3]);
