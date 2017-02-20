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
