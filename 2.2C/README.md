# Design an IoT Application/ Solution

#### Mini Project:
Prototype IoT Application Smoke Sensor


#### Define Project: 
##### This prototype was designed as a smoke detector for a chemistry laboratory (lab) using the Arduino Uno R3, smoke sensor, additional buzzer and LED lights (green, yellow, and Red), rated in severity to detect the sensor reading, Fig 1. A prototype is ‘an early commercial platforms version… showcase the business concept before implementing it, to validate design concepts and functionality’ [2]. This prototype is the extension of my learning from 2.1 task, when I explored different end-user devices with reference documentation by S. Phadke [1]. The prototype system is designed to indicate the detected smoke level using the LED severity light system with an additional sound to indicate to the user that HIGH levels of smoke have been detected. The prototype uses an infinite loop and is designed to be in a lab that has a high risk of smoke inhalation, this application could be extended to use more advanced algorithms and fail-safe devices/ code.

##### Physical Layer is the hardware and connections in this prototype (Arduino board, smoke sensor, LEDs and buzzer), the collected data, LED functions and buzzer. The Coordination Layer is the flow of data and signals between the hardware in the systems including the functions and set up in the code blocks. The Application layer is the visual and audio elements in the prototype including the LEDs and Buzzer actions. The End-user Device is the Arduino simulator, Network device is the WIFI connected to the TinkerCad software and Arduino, Cloud Device is the laptop running chrome browser to interact with TinkerCad and Arduino.


![Sensor_Smoke](https://github.com/leakydishes/arduino_tests/assets/79079577/fda548c2-caf1-4fba-8c75-cb17adb6a6e2)

##### The Arduino connects to the smoke sensor using an analogue input pin (A0), this voltage output acts against resistors based on the air concentration in the room. The Arduino board uses 5V voltage output connecting to the Vcc pin of the smoke detector. The GND (ground) connects to the GND sensor and GND Arduino. The Arduino can read the sensor fata using the voltage output in A0 pin, this is converted to a digital range 0-1023 (Arduino uses 10-bit ADC) and is stored in sensor_In. The prototype variables are LED pins connected to pins 4, 2, 3, and the buzzer connected to pin 5 and smoke sensor connect to the analogue pin A0. The set-up function sets pins 2, 5 as the output pins which control the LED and buzzer, they act as an ‘off and on’ state. The serial communication is again set to the same 9600 as per the Arduino reference documentation to understand the functions [4], future adaptations of this code the serial can be used for debugging and monitoring processes. Additional set up outside code includes, A2 to (220 ohm) resistor to GND, H2 to 5V and H1 to GND and B1, B2 to 5V, and A1 to pin A0, and A2 to 220 ohm resistor to GND.


![image](https://github.com/leakydishes/arduino_tests/assets/79079577/79c38d0b-c202-452f-8d58-04d6b22919b1)
