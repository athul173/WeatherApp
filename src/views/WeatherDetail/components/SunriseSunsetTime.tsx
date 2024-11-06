import GeoLocation from '../../../utils/types/GeoLocation';
import {useGetSunriseWeatherInfoQuery} from '../../../state/weather';
import React, {useMemo} from 'react';
import {Text, View} from 'react-native';
import styles from '../styles';
import LinearGradient from 'react-native-linear-gradient';

interface SunriseSunsetTimeProps {
  coordinates: GeoLocation['coordinates'];
}

const SunriseSunsetTime = ({coordinates}: SunriseSunsetTimeProps) => {
  const {data} = useGetSunriseWeatherInfoQuery(coordinates);

  const sunriseWeatherData = useMemo(
    () => ({
      sunrise: data?.properties.sunrise.time.slice(11, 16),
      sunset: data?.properties.sunset.time.slice(11, 16),
    }),
    [data],
  );

  return (
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
  );
};

export default SunriseSunsetTime;
