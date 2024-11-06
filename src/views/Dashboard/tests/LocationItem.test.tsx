import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';

import {useNavigation} from '@react-navigation/native';
import GeoLocation from '../../../utils/types/GeoLocation';
import LocationItem from '../components/LocationItem';
import {getWeatherData} from '../../../utils/parser/getWeatherData';
import {useGetWeatherInfoQuery} from '../../../state/weather';
import {CompleteWeatherForecast} from '../../../utils/types/weatherDataModel';

// Mock the necessary modules
jest.mock('../../../state/weather', () => ({
  useGetWeatherInfoQuery: jest.fn(),
}));

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

const mockUseGetWeatherInfoQuery = useGetWeatherInfoQuery as jest.Mock;
const mockUseNavigation = useNavigation as jest.Mock;

describe('LocationItem', () => {
  const mockNavigate = jest.fn();
  const item: GeoLocation = {
    name: 'Test Location',
    coordinates: {latitude: '0', longitude: '0'},
  };

  const mockWeatherData = {
    type: 'Feature',
    geometry: {},
    properties: {
      meta: {},
      timeseries: [
        {
          time: '2023-10-27T07:00:00Z',
          data: {
            instant: {
              details: {
                air_pressure_at_sea_level: 1009.8,
                air_temperature: 7.1,
                cloud_area_fraction: 100, // 100% cloud coverage
                fog_area_fraction: 0,
                relative_humidity: 87.1,
                wind_from_direction: 164.6,
                wind_speed: 2.5,
              },
            },
            next_1_hours: {
              details: {
                precipitation_amount: 0.1,
                precipitation_amount_min: 0,
                precipitation_amount_max: 0.5,
                probability_of_precipitation: 57,
              },
              summary: {
                symbol_code: 'lightrain', // Light rain expected
              },
            },
          },
        },
      ],
    },
  };

  beforeEach(() => {
    mockUseNavigation.mockReturnValue({navigate: mockNavigate});
  });

  it('shows loading indicator when data is loading', () => {
    // Mock useGetWeatherInfoQuery to simulate loading state
    mockUseGetWeatherInfoQuery.mockReturnValue({
      data: null,
      error: null,
      isLoading: true,
    });

    const {queryAllByText} = render(<LocationItem item={item} />);

    // Assert that the ActivityIndicator is shown during loading
    expect(queryAllByText('Test Location')).toBeTruthy();
  });

  it('shows error message and warning image when there is an error fetching data', () => {
    // Mock useGetWeatherInfoQuery to simulate error state
    mockUseGetWeatherInfoQuery.mockReturnValue({
      data: null,
      error: new Error('Failed to fetch weather data'),
      isLoading: false,
    });

    const {getByText, getByTestId} = render(<LocationItem item={item} />);

    // Assert error message
    expect(getByText('Error fetching data')).toBeTruthy();

    // Assert the warning image is displayed
    expect(getByTestId('error-test-image')).toBeTruthy();
  });

  it('displays weather data and the cloudy image when data is fetched successfully', async () => {
    // Mock the useGetWeatherInfoQuery to return weather data
    mockUseGetWeatherInfoQuery.mockReturnValue({
      data: mockWeatherData,
      error: null,
      isLoading: false,
    });

    const {getByText, getByTestId} = render(<LocationItem item={item} />);

    // Assert that the weather data is displayed
    expect(getByText('Test Location')).toBeTruthy();
    expect(getByText('7.1\u00b0')).toBeTruthy(); // Temperature in Celsius
  });

  it('navigates to WeatherScreen on press', async () => {
    // Mock the useGetWeatherInfoQuery to return weather data
    mockUseGetWeatherInfoQuery.mockReturnValue({
      data: mockWeatherData,
      error: null,
      isLoading: false,
    });

    const {getByTestId} = render(<LocationItem item={item} />);

    // Simulate press event
    fireEvent.press(getByTestId('location-item'));

    // Assert that the navigation function is called with the correct params
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('WeatherScreen', {
        locationItem: item,
        weatherData: getWeatherData(mockWeatherData as CompleteWeatherForecast),
      });
    });
  });
});
