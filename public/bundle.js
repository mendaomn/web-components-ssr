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
      this.innerHTML = `
        <button id="btn">Click me!</button>
      `;

      this.querySelector('#btn').addEventListener('click', this._superFn);
    }

    _superFn() {
      alert( "Alive" );
    }
}

document.registerElement('my-new-element', MyNewElement);
