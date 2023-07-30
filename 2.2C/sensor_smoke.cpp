// C++ code
// Sensor_Gase with buzzer
// Created by Te' Claire 2023
// Reference electronicsguy 2020

// Variables
// LED Ref
  # define RED 4
  # define GREEN 2
  # define YELLOW 3

// Additional Ref
  # define Buzzer 5
  # define Sensor A0

    
  void setup() {
    for (int i = 2; i < 6; i++)
      pinMode(i, OUTPUT);
  
    Serial.begin(9600);
  }
  
// Main loop
  void loop() {
    
    for (int i = 2; i < 6; i++)
      digitalWrite(i, LOW);
  
    status_Indicator(); //Light and Sound Function
  
  }
  
// Function Indicator for light and Sound
  void status_Indicator()
  {
    int sensor_In = analogRead(A0);
    Serial.println(sensor_In);
    
    if ( sensor_In >=50  ) // Value Limit for Red Light
    {
      digitalWrite(RED, HIGH);
      digitalWrite(Buzzer,HIGH);
    }
    else if (sensor_In >=30 ) // Value Limit for Yellow Light
    {
      digitalWrite(YELLOW, HIGH);
    } else
    {
      digitalWrite(GREEN, HIGH); // else Green Light
    }
    delay(10);
  }