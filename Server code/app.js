var SerialPort = require( 'serialport' );

// Start socket io
var io = require( 'socket.io' )( 4503 );

// Select a port
require( 'cli-serial-selector' ).then( portSelected );

function portSelected( p ) {
	var port = new SerialPort( p.port, {
		baudRate: 9600,
		parser: SerialPort.parsers.readline( '\n' )
	} );

	port.on( 'data', dataReceieved );
}

function dataReceieved( data ) {
	var values = {};

	data = data.toString().trim().split( ',' );

	for ( var i = 0; i < data.length; i++ ) {
		var value = parseInt( data[i] );
		if ( i === 0 ) values.r = value;
		if ( i === 1 ) values.g = value;
		if ( i === 2 ) values.b = value;
	}
	io.emit( 'rgb', values );
	console.log( values );
}
