# Optimising IoT Data Storage
## Monitor soil moisture and ambient temperature and light, Arduino MKR1000, node.js, MongoDB Johnny-Five and Plotly. 

This project explores how to connect hardware to the application built previously using an Arduino (MKR1000) [1] microcontroller board to supply real sensor readings. 
Inspired by the Arduino Plant Communicator [2], however this documentation only includes Arduino Cloud connection with pre-installed variables (subscription needed). 
I used this Arduino Kit documentation to understand the Arduino board and sketch, examining how I could monitor soil moisture and ambient temperature and light, 
I created an outline design in TinkerCad and Lucid chart (TinkerCad did not have additional variables such as soil and MKR1000), figure 1. 
I than extended the project to uses Node.js and library Jonny-five version 2012 with Arduino firmware StandardFirmataPlus. 
The code implemented took several editions to understand how each different software integrated and what action calls where needed to listeners. 
During my testing I used the MongoDB dashboard to view data how the data and network were configuring with the Arduino.

#### Arduino MKR1000 Diagram
![image](https://github.com/leakydishes/arduino_tests/assets/79079577/2c9e54d2-9bb9-40a4-b92f-ef399017a241)


#### Plotly
![image](https://github.com/leakydishes/arduino_tests/assets/79079577/1ac04809-e7c6-4ae0-911c-6b7e07f8d5e4)


#### Studio T3 Data
![image](https://github.com/leakydishes/arduino_tests/assets/79079577/e223ef83-9e62-406d-b3b5-28c48c7b2221)

#### MongoDB Data
![image](https://github.com/leakydishes/arduino_tests/assets/79079577/58a3d872-3f19-4105-922f-b051e3288639)


### Hardware/ Extentions
The Arduino (microcontroller) used in this project is a 32-bit micro controller which has a WI-FI module [2]. 
It is composed of three main blocks, SAMD21 Cortex-M0+ 32 bit ARM MCU, WINC1500 2.4GHx IEEE 802.11 b/g/n WIFI and ECC508 Crypto Authentication (onboard encryption chip) [1]. 
Arduino board is built differently to the online Arduino Uno R3 simulator in TinkerCad, I used the schematics from the Arduino official documentation to understand the port selections [2]. 
It was important that I understood how each component functioned, I have highlighted in the diagram important sections for this project, figure 9, 10. 
The Arduino can run on battery power (3.3V), however for this project only the USB was needed to power the device. The components used include the TMP36 Temperature Sensor, Phototransistor and DIY Moisture sensor (1 Mega Ohm resistor and two jumper leads). 
These components are plugged into the breadboard and the Arduino (A0, A1, A2, GND, 5V). 
The two wires placed in the soil form a variable resistor where the resistance alternates depending on soil moisture using a voltage proportional to the resistance between the wires (the dryer the soil, higher the resistance). 
Here you can see the Arduino MKR1000, components and plant monitoring soil moisture and ambient temperature and light connected to my OS using a micro-USB cable for both charge (3.3V) and data transfer. 
This project collects and visualises data from the Arduino sensor, however a User interface (UI) to interact with the data collection would be an option for future project extension, including options to pause or start the data collection and view historical data. 
Secondly an alert/ speaker system could be an added mechanism to alert the customer regarding plant health leading to potentials for remote control of this IoT device.

#### Arduino Schematics 1
![image](https://github.com/leakydishes/arduino_tests/assets/79079577/4b2f9fdc-e756-4df7-a0b0-eadffa1aeff2)

#### Arduino Schematics 2
![image](https://github.com/leakydishes/arduino_tests/assets/79079577/f1887712-021d-45d0-bc3f-c9dd64e299fc)

#### Set up
![image](https://github.com/leakydishes/arduino_tests/assets/79079577/8667bbdc-2b41-4907-91dc-cf28d7d4f775)

#### References
- [1] 	Arduino, “Arduino MKR1000 WIFI,” [Online]. Available: https://store-usa.arduino.cc/products/arduino-mkr1000-wifi. [Accessed 12 8 2023].
- [2] 	Arduino Genuino, “Plant Communicator with the Arduino IoT Bundle,” [Online]. Available: https://docs.arduino.cc/tutorials/iot-bundle/plant-communicator. [Accessed 18 8 2023].
- [3] 	Arduino, “How to calibrate the MKR IoT Carrier's temperature sensor,” 8 7 2022. [Online]. Available: https://support.arduino.cc/hc/en-us/articles/4411202645778-How-to-calibrate-the-MKR-IoT-Carrier-s-temperature-sensor. [Accessed 13 8 2023].
- [4] 	Bocoup, “Jonny-five,” Bocoup, 7 7 2021. [Online]. Available: https://github.com/rwaldron/johnny-five. [Accessed 18 8 2023].
- [5] 	NodeBots, “NodeBots,” [Online]. Available: https://nodebots.io/. [Accessed 18 8 2023].
- [6] 	Arduino, “Arduino MKR 1000 WIFI,” [Online]. Available: https://docs.arduino.cc/hardware/mkr-1000-wifi. [Accessed 16 8 2023].
- [7] 	Arduino, “MKR1000 Schematic,” 5 10 2016. [Online]. Available: https://www.arduino.cc/en/uploads/Main/MKR1000-schematic.pdf. [Accessed 11 8 2023].
