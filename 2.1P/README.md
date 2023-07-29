# Design an IoT Application/ Solution

#### Mini Project:
1.	An end-user device: Originally Raspberry Pi, however my laptop using Chrome browser with an online simulator for embedded devices was used due to shipment delays from vendor)
2.	A network device: WIFI
3.	A cloud device: Laptop

#### Define Project: 
This prototype is a draft version of a distance sensor which measures the distance of an object placed in front of it (person, car, ect). I spent time exploring different end-user devices and found reference documentation by S. Phadke [1] which has allowed me to explore my design and show the intention of my features. A prototype is ‘an early commercial platforms version… showcase the business concept before implementing it, to validate design concepts and functionality’ [2]. This prototype was originally going to work with the Raspberry Pi, however the vendor has not shipped the product in time for development and deployment. Due to this I have followed the instructions of my lecturer and used a Tinkercad to implement my prototype.

Tinkercad is a free web-based computer-aided design (CAD) program and Ardunio is a prototyping platform which uses an open-source electronic microcontroller. In combination engineers can program a Ardunio in Tinkercad using ‘drag and drop electronic components’ [3]. In the building area of Tinkercad I was able to construct my prototype with the Arduino Uno R3 and program within their predefined integrated development environment (IDE) using code blocks. 

![Sensor_Temp](https://github.com/leakydishes/arduino_tests/assets/79079577/b9fd46d2-9287-4347-ad48-4b2d6696f069)


The code development is a reference to a Sensor application by S. Phadke [1] and Arduino reference documentation to understand the functions [4]. An important part of this code is the LiquidCrystal.h library which allows the Arduino to control the Lcd display, Fig. 5. The variables are constants for pin numbers 2 and 3, which connect to the ultrasonic sensor to receive and transmit signals. Duration and distance are floating-point variables to store pulse returns and calculations. The code initializes the Lcd display (16 columns wide and 2 rows high). The setup function is called on start up. The trig pin is an output which triggers the sensor, echo pin is the input to receive the echo signal from sensor. Serial communication is set to 9600 for Arduino communication over serial port. 
The main loop calls the function time_Measurement() which measures the duration of return pulse from the ultrasonic sensor and the distance is calculated by multiplying the duration by the speed of sound in air (which is an approx.), division is used for sound as it travels back and forth. The time_Measurement() function measures the time taken for the return of pulse from sensor, the trig pin than triggers and the duration of the echo signal is taken using pulseIn() function. The display_distance function shows a visual display of the data in the Lcd screen. 

![image](https://github.com/leakydishes/arduino_tests/assets/79079577/f7ed1efc-c77d-4663-96d7-c0776a454a19)
