var serial;
var usbPort = "";

var r = 0;
var g = 0;
var b = 0;

function setup() {
	// Instantiate our SerialPort object
	serial = new p5.SerialPort();

	// Add handlers
	serial.on( 'list', gotList );
	serial.on( 'data', gotData );
	serial.on( 'error', gotError );
	serial.on( 'open', gotOpen );

	createCanvas( 800, 600 );
}

function gotList( ports ) {
	for ( var i = 0; i < ports.length; i++ ) {
		if ( ports[i].indexOf( "cu.usb" ) != -1 ) {
			usbPort = ports[i];
		}
	}
	serial.open( usbPort );
}

function gotOpen() {
	console.log( "Serial Port is open!" );
}

function gotError( error ) {
	console.log( error );
}

function gotData() {
	var currentString = trim( serial.readStringUntil( "\r\n" ) );
	if( ! currentString ) {
		return;
	}

	// Trim white space and split data on commas
	var data = split( trim( currentString ), ',' );

	if ( data.length < 3 ) {
		return;
	}

	r = data[0];
	g = data[1];
	b = data[2];
}

function draw() {
	background( r, g, b );
}
