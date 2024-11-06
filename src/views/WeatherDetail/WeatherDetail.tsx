import {ImageBackground, Text, View} from 'react-native';
import React, {useMemo} from 'react';
import styles from './styles';
import {HomeStackRoutes} from '../../utils/types/Navigation';
import {RouteProp, useRoute} from '@react-navigation/native';
import {getWeatherImageSummary} from '../../utils/parser/getWeatherImageSummary';
import theme from '../../styles/theme';
import getCurrentDateInFormat from '../../utils/parser/getCurrentDateFormat';
import LinearGradient from 'react-native-linear-gradient';
import SunriseSunsetTime from './components/SunriseSunsetTime';

const WeatherDetail = () => {
  const route = useRoute<RouteProp<HomeStackRoutes, 'WeatherScreen'>>();
  const {weatherData, locationItem} = route.params;

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
        imageStyle={styles.image}
        style={styles.headerContainer}>
        <View style={{...styles.mainContainer, ...styles.paddingView}}>
          <Text style={styles.titleText}>{getCurrentDateInFormat()}</Text>
          <Text style={styles.centerText}>
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
        <SunriseSunsetTime coordinates={locationItem.coordinates} />

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
