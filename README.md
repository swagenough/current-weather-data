# Weather CLI 🌦️

hi guys and welcome to my **Weather CLI** project! This simple command-line tool fetches and displays the current weather for any city or country you input. It's a great example of how to integrate APIs in Node.js

## Features ☆*: .｡. o(≧▽≦)o .｡.:*☆

- **User Greeting**: The app greets you by your name. Pretty cool right
- **Weather Data**: Fetches real-time weather data for any city or country.
- **Error Handling**: Provides meaningful error messages if the city is not found or there's an API request issue.

## Installation 📦

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/weather-cli.git
   cd weather-cli
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

3. Link the CLI tool:
   ```sh
   npm link
   ```

## Usage 🚀

1. Run the CLI tool:
   ```sh
   weatherAPI
   ```

2. Follow the prompts to enter your name and the city/country for which you want to get the weather.

## Example 🌍

```sh
$ weatherAPI
Enter your name: John
Enter a country/city name to get the weather: London

Hello John, here is the weather in London!
Temperature: 15°C
Description: light rain
```

## Configuration ⚙️

- **API Key**: Don't forget to replace `your_api_key` in weathercmd.js with your actual OpenWeatherMap API key.

## Dependencies 📚

- [axios](https://www.npmjs.com/package/axios): Promise-based HTTP client for the browser and Node.js.
- [readline](https://nodejs.org/api/readline.html): Node.js module to create an interface for reading data from a Readable stream.

## License 📄

This project is licensed under the ISC License.

```
