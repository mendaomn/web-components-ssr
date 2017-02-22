class MyHeader extends HTMLElement {
    createdCallback() {
      this.innerHTML = "<h1>Super Mega Title</h1>";
      this.addEventListener('click', this._handler);
    }

    _handler() {
      console.log("Click!");
    }
}

document.registerElement('my-header', MyHeader);

class MyNewElement extends HTMLElement {
    createdCallback() {
      this.innerHTML = "Hi dude!";
    }

    _superFn() {
      console.log( "Alive" );
    }
}

document.registerElement('my-new-element', MyNewElement);
