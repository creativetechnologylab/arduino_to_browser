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
	
	data = data.toString().trim().split( ',' );
	
	var values = {};
	values.r = data[0];
	values.g = data[1];
	values.b = data[2];
	
	io.emit( 'rgb', values );
	console.log( values );
}
