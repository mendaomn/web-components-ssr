// Require dependencies
var express = require( 'express' );
var domino = require( 'domino' );
var components = require( "server-components" );
var fs = require( 'fs' );

// Set up globals
global.HTMLElement = domino.impl.HTMLElement;
global.document = {
  registerElement: components.registerElement.bind( components )
};

// Require elements
require( './public/bundle.js' );

// Set up server
var app = express();
var home = fs.readFileSync( 'public/index.html' );

app.use( function( req, res, next ) {
  console.log( req.method, req.url );
  next();
} )

app.get( '/', function( req, res ) {
  components.renderPage( home )
    .then( function( output ) {
      res.send( output );
    } );
} );

app.use( express.static( 'public' ) );

app.listen( 3000, function() {
  console.log( '[ Server up - Port 3000 ]' );
} );
