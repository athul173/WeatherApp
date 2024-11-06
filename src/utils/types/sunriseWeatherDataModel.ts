export interface SunriseSunsetApiResponse {
  location: {
    // Latitude of the location
    latitude: number;
    // Longitude of the location
    longitude: number;
  };
  // Array of sunrise/sunset data for each requested date
  data: SunriseSunsetData[];
}

export interface SunriseSunsetData {
  // Date for which the sunrise/sunset data is provided
  date: string;
  // Sunrise time in UTC
  sunrise: string;
  // Sunset time in UTC
  sunset: string;
  // Time of solar noon in UTC
  solarnoon: string;
  // Day length in ISO 8601 duration format (e.g., "PT10H30M")
  daylength: string;
  // Polar day (true) or polar night (false)
  polarNight: boolean;
  // Time of astronomical twilight start in UTC (if applicable)
  astronomicalTwilightBegin?: string;
  // Time of astronomical twilight end in UTC (if applicable)
  astronomicalTwilightEnd?: string;
  // Time of nautical twilight start in UTC (if applicable)
  nauticalTwilightBegin?: string;
  // Time of nautical twilight end in UTC (if applicable)
  nauticalTwilightEnd?: string;
  // Time of civil twilight start in UTC (if applicable)
  civilTwilightBegin?: string;
  // Time of civil twilight end in UTC (if applicable)
  civilTwilightEnd?: string;
}
