# Weather-App

This is a weather application designed to provide users with up-to-date weather information. The application is built using React, and makes use of [WeatherApi.com](https://www.weatherapi.com/) to obtain current weather data.

## Features

- connected to a weather api for real time data fetching
- initialises with the weather data fetched for the current location of the user
- fully responsive for small and big screens
- the user can see the weather forecast: next 24 hours and next 3 days
- the user can search for other locations
- the user can mark locations as favorites
- adapting the app style (the weather section background) to the current weather condition

## How to run the app

In order to get the app running on a localhost, you will need to:

1. Make sure you have git and npm installed on your computer
2. Clone the git repository using the command:  
   `git clone https://github.com/aly2705/weather-app.git`
3. In the repository root folder open a terminal and install the dependencies by running:  
   `npm install`
4. Once the app is installed you can run it with the following command:  
   `npm start`  
   This command runs the app in the development mode.
5. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Usage

To use the weather app, simply allow access to your location. Users can view current and forecasted weather displayed in the app for the current location, pin locations by clicking on the star icon, preview the starred locations and load data for other cities with one search.

## Frontend Stack

The app is built with:

- React.js
- SASS modules
- React Context (for state management)
