#define r A0
#define g A1
#define b A2

void setup() {
  Serial.begin( 9600 );

  pinMode( r, INPUT );
  pinMode( g, INPUT );
  pinMode( b, INPUT );
}

void loop() {
  Serial.print( map( analogRead( r ), 0, 1023, 0, 255 ) );
  Serial.print( ',' );
  Serial.print( map( analogRead( g ), 0, 1023, 0, 255 ) );
  Serial.print( ',' );
  Serial.print( map( analogRead( b ), 0, 1023, 0, 255 ) );
  Serial.println();
  delay( 50 );
}
