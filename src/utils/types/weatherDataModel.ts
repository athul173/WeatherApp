export interface CompleteWeatherForecast {
  type: string; // Example: "Feature"
  geometry: {
    type: string; // Example: "Point"
    coordinates: number[]; // Example: [10.72, 59.91, 34]
  };
  properties: {
    meta: {
      updatedAt: string; // Example: "2023-10-27T06:54:12Z"
      units: {
        air_pressure_at_sea_level: string; // Example: "hPa"
        air_temperature: string; // Example: "celsius"
        cloud_area_fraction: string; // Example: "%"
        fog_area_fraction: string; // Example: "%"
        precipitation_amount: string; // Example: "mm"
        relative_humidity: string; // Example: "%"
        wind_from_direction: string; // Example: "degrees"
        wind_speed: string; // Example: "m/s"
      };
    };
    timeseries: WeatherTimeData[];
  };
}

export interface WeatherTimeData {
  time: string; // Example: "2023-10-27T07:00:00Z"
  data: {
    instant: {
      details: {
        air_pressure_at_sea_level: number; // Example: 1009.8
        air_temperature: number; // Example: 7.1
        cloud_area_fraction: number; // Example: 100
        fog_area_fraction: number; // Example: 0
        relative_humidity: number; // Example: 87.1
        wind_from_direction: number; // Example: 164.6
        wind_speed: number; // Example: 2.5
      };
    };
    next_1_hours?: PrecipitationData; // Optional, might not be present for all times
    next_6_hours?: SixHourData;
    next_12_hours?: TwelveHourData;
  };
}

export interface PrecipitationData {
  details: {
    precipitation_amount: number; // Example: 0.1
    precipitation_amount_min: number; // Example: 0
    precipitation_amount_max: number; // Example: 0.5
    probability_of_precipitation: number; // Example: 57
  };
  summary: {
    symbol_code: string; // Example: "lightrain"
  };
}

export interface SixHourData {
  details: {
    air_temperature_max: number; // Example: 8.2
    air_temperature_min: number; // Example: 6.8
    precipitation_amount: number; // Example: 0.6
    precipitation_amount_min: number; // Example: 0
    precipitation_amount_max: number; // Example: 1.5
    probability_of_precipitation: number; // Example: 63
  };
  summary: {
    symbol_code: string; // Example: "lightrain"
  };
}

export interface TwelveHourData {
  details: {
    probability_of_thunder: number; // Example: 0
  };
  summary: {
    symbol_code: string; // Example: "cloudy"
  };
}
