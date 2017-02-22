'use strict';

export default class MyNewElement extends HTMLElement {
    createdCallback() {
      this.innerHTML = "Hi dude!";
    }

    _superFn() {
      console.log( "Alive" );
    }
};

document.registerElement('my-new-element', MyNewElement);
