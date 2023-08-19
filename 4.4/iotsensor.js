// Dependencies and libraries
var plotly = require('plotly')("Teclaire", "SKEXFgiOXLZ04ryjAll5")
//var plotly = require('plotly')("tetoast", "khFg4wfwErzTXVy6Dw59") //2nd plotly account due to exceeding account
const mongoose = require('mongoose');
const five = require('johnny-five'); // Import Johnny-Five library

// Database connection
const databaseConnectionString = 'mongodb+srv://teclairee:Lu08ma0MuXRO8Xsq@sit314.spnr4zn.mongodb.net/?retryWrites=true&w=majority'; // Update with your connection string

// Array to store data
const data = {
    x: [],
    y: [],
    type: "scatter"
};

setInterval(sensortest, 10000); //time is in ms

// Define variables for sensor
let moistureSensor;
let temperatureSensor;
let lightSensor;

// Create a new board instance for jonny-five library
const board = new five.Board();

// Define model outside of callback due to Callback Error
const SensorDataModel = mongoose.model('SensorData', {
    moisture: Number,
    light: Number,
    temperature: Number,
    timestamp: Date
});

board.on("ready", async function() {
    moistureSensor = new five.Sensor({
        pin: "A2", // pin for moisture sensor
        freq: 10000 // frequency (10 seconds)
    });

    temperatureSensor = new five.Sensor({
        pin: "A1", // pin for temperature sensor
        freq: 10000 // frequency (10 seconds)
    });

    lightSensor = new five.Sensor({
        pin: "A0", // pin for light sensor
        freq: 10000 // frequency (10 seconds)
    });

    // Initialize the MongoDB connection
    await connectToDatabase();
});

// Function to connect to database using Mongoose
async function connectToDatabase() {
    try {
        await mongoose.connect(databaseConnectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

// Function to test data input
function sensortest() {
    const startTime = Date.now();
    // Read sensor values
    const moisture = moistureSensor.value;
    const temperature = temperatureSensor.value;
    const light = lightSensor.value;

    // Create a new data object to store the sensor readings
    const sensorData = {
        moisture: moisture,
        light: light,
        temperature: temperature,
        timestamp: Date.now()
    };

    // Save the sensor data to MongoDB
    createAndUploadSensorData(sensorData);

    const endTime = Date.now();
    const elapsedTime = endTime - startTime;
    data.x.push((new Date()).toISOString());
    data.y.push(elapsedTime); // Push the elapsed time to the y array

    if (data.x.length > 10) {
        data.x.shift();
        data.y.shift();
    }

    plotGraph();

    console.log("Sensor data collected and processed.");
}

// Upload Sensor Data
async function createAndUploadSensorData(sensorData) {
    try {
        // Create a new instance of the SensorDataModel
        const newSensorData = new SensorDataModel(sensorData);

        // Save the sensor data to the database
        await newSensorData.save();

        console.log("Sensor data saved to MongoDB:", newSensorData);
    } catch (error) {
        console.error("Error saving sensor data to MongoDB:", error);
    }
}

// Function to Plot Graph data
async function plotGraph() {
    const graphOptions = {
        filename: "iot-performance-database",
        fileopt: "overwrite"
    };

    plotly.plot(data, graphOptions, function (err, msg) {
        if (err) console.error("Error plotting graph:", err);
        console.log("Graph plotted successfully:", msg);
    });
}

// Initial setup and error handling
board.on("error", function(err) {
    console.error("Board error:", err);
});

board.on("close", function() {
    console.log("Board disconnected.");
});
