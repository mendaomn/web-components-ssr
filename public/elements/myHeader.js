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
