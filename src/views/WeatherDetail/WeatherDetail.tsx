import {Text, View} from 'react-native';
import React, {useMemo} from 'react';
import styles from './styles.ts';
import {useGetSunriseWeatherInfoQuery} from '../../state/weather';

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

  console.log('Data is ', data?.properties.sunrise.time.slice(11, 16));

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.mainContainer}>
          <Text style={styles.titleText}>{'January 25 , Wednesday 2024'}</Text>
        </View>
        <View style={styles.mainTextContainer}>
          <Text style={styles.mainText}>{'22 C'}</Text>
        </View>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.footerContainer}>
          <View style={styles.footerItemContainer}>
            <Text style={styles.centerText}>{'Sunrise'}</Text>
            <Text style={styles.centerText}>
              {sunriseWeatherData.sunrise ?? '05:40'}
            </Text>
          </View>
          <View style={styles.footerItemContainer}>
            <Text style={styles.centerText}>{'Sunset'}</Text>
            <Text style={styles.centerText}>
              {sunriseWeatherData.sunset ?? '20:26'}
            </Text>
          </View>
        </View>
        <View style={styles.footerContainer}>
          <View style={styles.footerItemContainer}>
            <Text style={styles.centerText}>{'Humidity'}</Text>
            <Text style={styles.centerText}>{'26%'}</Text>
          </View>
          <View style={styles.footerItemContainer}>
            <Text style={styles.centerText}>{'Visibility'}</Text>
            <Text style={styles.centerText}>{'16.2 km'}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default WeatherDetail;
