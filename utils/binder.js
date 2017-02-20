module.exports = function inheritFrom( element, htmlelement ) {
  return Object.assign(
    Object.create( htmlelement.prototype ),
    element
  );
}
