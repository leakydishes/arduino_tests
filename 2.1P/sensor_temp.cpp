// C++ code
// Sensor_Temp with Lcd screen
// Created by Te' Claire 2023
// Reference electronicsguy 2020

// Lcd library
 #include <LiquidCrystal.h>
  
// Variables
  #define echo 2
  #define trig 3
  
  float  duration; // time for return pulse
  float  distance; // pulse distance
  
// lcd(RS,EN,D4,D5,D6,D7) 
  LiquidCrystal lcd(13, 12, 11, 10, 9, 8);

// Functions
  void setup() {
  
    pinMode(trig, OUTPUT);
    pinMode(echo, INPUT);
    Serial.begin(9600);
    lcd.begin(16, 2);
  
  }
  

// Main Loop
  void loop() {
  
    time_Measurement();
    distance = duration * (0.0343) / 2;

    display_distance(); // visual display of lcd
  }
  

// function record time taken by return pulse
  void time_Measurement()
  { 
    digitalWrite(trig, LOW);
    delayMicroseconds(2);
  
    digitalWrite(trig, HIGH);
    delayMicroseconds(10);
    digitalWrite(trig, LOW);
  
    duration = pulseIn(echo, HIGH);
  }


// Function of lcd display
  void display_distance()
  {
    lcd.clear();
    lcd.setCursor(0, 0);
    Serial.print("Distance in Cm: ");
    Serial.print(distance);
    Serial.println();
    lcd.print("Distance in Cm: ");
    lcd.setCursor(5, 1);
    lcd.print(distance);
    delay(1000);
   }
