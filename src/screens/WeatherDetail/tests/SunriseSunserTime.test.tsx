import React from 'react';
import {render} from '@testing-library/react-native';
import {useGetSunriseWeatherInfoQuery} from '../../../state/weather';
import {useNavigation} from '@react-navigation/native';
import SunriseSunsetTime from '../components/SunriseSunsetTime';

// Mock the necessary modules
jest.mock('../../../state/weather', () => ({
  useGetSunriseWeatherInfoQuery: jest.fn(),
}));

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

const mockUseGetSunriseWeatherInfoQuery =
  useGetSunriseWeatherInfoQuery as jest.Mock;
const mockUseNavigation = useNavigation as jest.Mock;

describe('SunriseSunsetTime', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  it('renders sunrise and sunset times correctly when data is available', () => {
    // Mock the hook to return data
    mockUseGetSunriseWeatherInfoQuery.mockReturnValue({
      data: {
        properties: {
          sunrise: {time: '2024-11-06T05:40:00Z'},
          sunset: {time: '2024-11-06T20:26:00Z'},
        },
      },
    });

    const {getByText} = render(
      <SunriseSunsetTime
        coordinates={{latitude: '12.34', longitude: '56.78'}}
      />,
    );

    // Check if the sunrise and sunset times are rendered correctly
    expect(getByText('Sunrise')).toBeTruthy();
    expect(getByText('05:40')).toBeTruthy();
    expect(getByText('Sunset')).toBeTruthy();
    expect(getByText('20:26')).toBeTruthy();
  });

  it('renders default sunrise and sunset times when data is not available', () => {
    // Mock the hook to return no data
    mockUseGetSunriseWeatherInfoQuery.mockReturnValue({
      data: null,
    });

    const {getByText} = render(
      <SunriseSunsetTime
        coordinates={{latitude: '12.34', longitude: '56.78'}}
      />,
    );

    // Check if the default times are rendered correctly
    expect(getByText('Sunrise')).toBeTruthy();
    expect(getByText('05:40')).toBeTruthy(); // Default sunrise time
    expect(getByText('Sunset')).toBeTruthy();
    expect(getByText('20:26')).toBeTruthy(); // Default sunset time
  });
});
