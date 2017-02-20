// Register all elements
var components = require( "server-components" );
var HTMLElement = require( 'domino' ).impl.HTMLElement;
var importer = require('./utils/importElements');
var binder = require('./utils/binder');
var elements = importer.importEmAll(__dirname + '/public/elements');

elements.forEach( function registerElement(element) {
  components.registerElement( element.name, {
    prototype: binder( element.prototype, HTMLElement )
  } );
});

// Set up server
var express = require( 'express' );
var app = express();
var home = require( 'fs' ).readFileSync( 'public/index.html' );

app.get( '/', function( req, res ) {
  components.renderPage( home )
    .then( function( output ) {
      res.send( output );
    } );
} );

app.use( express.static( 'public' ) );

app.listen( 3000, function() {
  console.log( 'Example app listening on port 3000!' );
} );