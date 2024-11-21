import axios from 'axios'; // Import the axios package
import readline from 'readline'; // Import readline package, a built in module from nodeJS that reads and returns user input

// Function to get weather data asynchronously
async function getWeather(city, name) {
  try {
    const apiKey = 'your_api_key'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await axios.get(url); // Make the API request
    const data = response.data; // Extract the data

    console.log(`Hello ${name}, here is the weather in ${city}!`)
    console.log(`Temperature: ${data.main.temp}°C`);
    console.log(`Description: ${data.weather[0].description}`);
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.error('\nCity not found. Please check the name and try again.');
    } else {
      console.error('\nError fetching weather data:', error.message);
    }
  }
}

// buat bikin line interface untuk user input output
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
 });

// Function to prompt for user input
function askQuestion(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

// Main function to run the application
async function main() {
  const name = await askQuestion('Enter your name: ');
  const city = await askQuestion('Enter a country/city name to get the weather: ');

  if (city) {
    await getWeather(city, name); // Call the asynchronous function to get weather with the user's name
  } else {
    console.log('No city name entered.');
  }
  
  rl.close(); // Close the readline interface
}

// Execute the main function
main();
