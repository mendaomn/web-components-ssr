'use strict';

export default class MyHeader extends HTMLElement {
    createdCallback() {
      this.innerHTML = "<h1>Super Mega Title</h1>";
      this.addEventListener('click', this._handler);
    }

    _handler() {
      console.log("Click!");
    }
};

document.registerElement('my-header', MyHeader);
