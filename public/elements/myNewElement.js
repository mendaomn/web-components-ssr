'use strict';

export default class MyNewElement extends HTMLElement {
    createdCallback() {
      this.innerHTML = `
        <button id="btn">Click me!</button>
      `;

      this.querySelector('#btn').addEventListener('click', this._superFn)
    }

    _superFn() {
      alert( "Alive" );
    }
};

document.registerElement('my-new-element', MyNewElement);
