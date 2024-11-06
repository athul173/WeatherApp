import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {SunriseSunsetApiResponse} from '../../utils/types/sunriseWeatherDataModel.ts';
import {CompleteWeatherForecast} from '../../utils/types/weatherDataModel.ts';

const YRSunriseURL = 'https://api.met.no/weatherapi/';

//const currentDate = new Date().toISOString().slice(0, 10);
const userAgent = 'Educational app (testing)';

export const yrAPI = createApi({
  reducerPath: 'yrAPI',
  baseQuery: fetchBaseQuery({baseUrl: YRSunriseURL}),
  endpoints: builder => ({
    getSunriseWeatherInfo: builder.query<
      SunriseSunsetApiResponse,
      {longitude: string; latitude: string}
    >({
      query: locationCoordinates => ({
        url: `sunrise/3.0/sun?lat=${locationCoordinates.latitude}&lon=${locationCoordinates.longitude}`,
        headers: {
          'User-Agent': userAgent,
        },
      }),
    }),
    getWeatherInfo: builder.query<
      CompleteWeatherForecast,
      {longitude: string; latitude: string}
    >({
      query: locationCoordinates => ({
        url: `locationforecast/2.0/compact?lat=${locationCoordinates.latitude}&lon=${locationCoordinates.longitude}`,
        headers: {
          'User-Agent': userAgent,
        },
      }),
    }),
  }),
});

export const {useGetSunriseWeatherInfoQuery, useGetWeatherInfoQuery} = yrAPI;
