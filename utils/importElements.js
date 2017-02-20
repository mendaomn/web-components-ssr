var fs = require( 'fs' );

exports.importEmAll = function importEmAll( path ) {
  var prototypes = [];

  return fs.readdirSync( path )
    .map( function requireFile( filePath ) {
      return require( path + '/' + filePath );
    } );
}
