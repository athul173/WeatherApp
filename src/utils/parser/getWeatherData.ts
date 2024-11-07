import {CompleteWeatherForecast} from '../../types/weatherDataModel';

export const getWeatherData = (data: CompleteWeatherForecast | undefined) => {
  if (!data) {
    return;
  }
  const temperature =
    data.properties.timeseries[0].data.instant.details.air_temperature;
  const humidity =
    data.properties.timeseries[0].data.instant.details.relative_humidity;
  const summary =
    data.properties.timeseries[0].data.next_12_hours?.summary.symbol_code;
  const maxTemp =
    data.properties.timeseries[0].data.next_6_hours?.details
      .air_temperature_max;
  const minTemp =
    data.properties.timeseries[0].data.next_6_hours?.details
      .air_temperature_min;

  return {temperature, maxTemp, minTemp, summary, humidity};
};
