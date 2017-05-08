# Arduino to Browser
This P5.js application is designed to receive values continuously over the serial port from an Arduino running the included sketch.

The Arduino code send CSV (Comma Seperated Values) red, green and blue, from 0-255, each new set of RGB values is delimited from the next by a new line character:

	255,0,0
	255,0,10
	255,0,20

The data is originated from three potentiometers connected to A0, A1 and A2, which are then processed by the web browser and displayed in the canvas.

----

### p5.serialport

So that our P5.js application can access the serial port from the browser we need to install and run the [p5.serialport](https://github.com/vanevery/p5.serialport) node server. To do this make sure [NodeJS is installed](https://nodejs.org/en/download/). Once NodeJS is installed you can use Node Package Manager (`npm`) to install the the P5.SerialPort server by running the following command in the terminal:

`sudo npm install -g p5.serialserver`

> Note: You will be asked for your password   
> Note: using the `-g` flag will make the command available globally

Once this has finished installing you will be able to run node server by entering the following command:

`p5serial`

You are all done. Running the P5 application provided in this repo should now connect to a serial port with the prefix of `cu.usb`. The p5.serialport.js client script is already [included the the HTML file](https://github.com/lcc-prototyping-lab/etch-a-sketch-p5js/blob/master/index.html#L4).
