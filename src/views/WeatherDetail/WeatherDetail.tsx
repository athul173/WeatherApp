import {ImageBackground, Text, View} from 'react-native';
import React, {useMemo} from 'react';
import styles from './styles.ts';
import {useGetSunriseWeatherInfoQuery} from '../../state/weather';
import {HomeStackRoutes} from '../../utils/types/Navigation.ts';
import {RouteProp, useRoute} from '@react-navigation/native';
import {getWeatherImageSummary} from '../../utils/parser/getWeatherImageSummary.ts';
import theme from '../../styles/theme.ts';
import getCurrentDateInFormat from '../../utils/parser/getCurrentDateFormat.ts';
import LinearGradient from 'react-native-linear-gradient';

const requiredLocations = [
  {
    name: 'Berlin',
    coordinates: {
      latitude: '52.52',
      longitude: '13.40',
    },
  },
  {
    name: 'London',
    coordinates: {
      latitude: '51.50',
      longitude: '0.127',
    },
  },
];

const WeatherDetail = () => {
  const route = useRoute<RouteProp<HomeStackRoutes, 'WeatherScreen'>>();
  const {weatherData, locationItem} = route.params;

  const {data, isLoading, error} = useGetSunriseWeatherInfoQuery(
    requiredLocations[0].coordinates,
  );

  const sunriseWeatherData = useMemo(
    () => ({
      sunrise: data?.properties.sunrise.time.slice(11, 16),
      sunset: data?.properties.sunset.time.slice(11, 16),
    }),
    [data],
  );

  const summaryWeather = useMemo(
    () => getWeatherImageSummary(weatherData.summary),
    [weatherData.summary],
  );

  return (
    <View
      style={{
        ...styles.mainContainer,
        backgroundColor: theme.color.black,
      }}>
      <ImageBackground
        source={summaryWeather.image}
        imageStyle={{borderRadius: 32}}
        style={styles.headerContainer}>
        <View style={{...styles.mainContainer, padding: 24}}>
          <Text style={styles.titleText}>{getCurrentDateInFormat()}</Text>
          <Text
            style={{
              ...styles.titleText,
              textAlign: 'center',
            }}>
            {locationItem.name + ', ' + summaryWeather.text}
          </Text>
        </View>
        <View style={styles.mainTextContainer}>
          <Text style={styles.mainText}>
            {`${weatherData?.temperature ?? 'no data'}` + '\u00b0 C'}
          </Text>
        </View>
      </ImageBackground>
      <View
        style={{
          ...styles.mainContainer,
          backgroundColor: theme.color.black,
        }}>
        <View style={styles.footerContainer}>
          <LinearGradient
            style={styles.footerItemContainer}
            colors={['#5996FD', '#A888FD']}>
            <Text style={styles.centerText}>{'Sunrise'}</Text>
            <Text style={styles.centerText}>
              {sunriseWeatherData.sunrise ?? '05:40'}
            </Text>
          </LinearGradient>
          <LinearGradient
            style={styles.footerItemContainer}
            colors={['#5996FD', '#A888FD']}>
            <Text style={styles.centerText}>{'Sunset'}</Text>
            <Text style={styles.centerText}>
              {sunriseWeatherData.sunset ?? '20:26'}
            </Text>
          </LinearGradient>
        </View>
        <View style={styles.footerContainer}>
          <LinearGradient
            style={styles.footerItemContainer}
            colors={['#A888FD', '#5996FD']}>
            <Text style={styles.centerText}>{'Humidity'}</Text>
            <Text style={styles.centerText}>
              {weatherData.humidity.toString() ?? '26%'}
            </Text>
          </LinearGradient>
          <LinearGradient
            style={styles.footerItemContainer}
            colors={['#A888FD', '#5996FD']}>
            <Text style={styles.centerText}>{'Visibility'}</Text>
            <Text style={styles.centerText}>{'16.2 km'}</Text>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

export default WeatherDetail;
