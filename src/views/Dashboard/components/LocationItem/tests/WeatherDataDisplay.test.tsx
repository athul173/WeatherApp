import React from 'react';
import {render} from '@testing-library/react-native';
import WeatherDataDisplay from '../components/WeatherDataDisplay';

describe('WeatherDataDisplay', () => {
  const mockWeatherData = {
    temperature: 22,
    maxTemp: 24,
    minTemp: 19,
    summary: 'Partly Cloudy',
    humidity: 60,
  };

  const mockLocationName = 'Test Location';

  it('displays weather data correctly when weatherData is provided', () => {
    const {getByText} = render(
      <WeatherDataDisplay
        weatherData={mockWeatherData}
        name={mockLocationName}
      />,
    );

    // Assert that the temperature is displayed correctly
    expect(getByText('22°')).toBeTruthy();

    // Assert that the max and min temperature values are displayed correctly
    expect(getByText('24')).toBeTruthy();
    expect(getByText('19')).toBeTruthy();

    // Assert that the location name is displayed
    expect(getByText(mockLocationName)).toBeTruthy();
  });

  it('displays "no data" when weatherData is undefined', () => {
    const {getByText} = render(
      <WeatherDataDisplay weatherData={undefined} name={mockLocationName} />,
    );

    // Assert that "no data" is displayed when no weather data is provided
    expect(getByText('no data°')).toBeTruthy();

    // Assert that default "h:24" and "l:19" are displayed when no weather data is provided
    expect(getByText('h:24')).toBeTruthy();
    expect(getByText('l:19')).toBeTruthy();

    // Assert that the location name is displayed correctly
    expect(getByText(mockLocationName)).toBeTruthy();
  });

  it('displays fallback values for missing weather data properties', () => {
    const incompleteWeatherData = {
      temperature: 22,
      maxTemp: undefined, // Max temperature is missing
      minTemp: undefined, // Min temperature is missing
      summary: undefined, // Summary is missing
      humidity: 60,
    };

    const {getByText} = render(
      <WeatherDataDisplay
        weatherData={incompleteWeatherData}
        name={mockLocationName}
      />,
    );

    // Assert that the temperature is displayed correctly
    expect(getByText('22°')).toBeTruthy();

    // Assert that fallback values are displayed when maxTemp and minTemp are undefined
    expect(getByText('h:24')).toBeTruthy();
    expect(getByText('l:19')).toBeTruthy();

    // Assert that the location name is displayed correctly
    expect(getByText(mockLocationName)).toBeTruthy();
  });
});
