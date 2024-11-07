import {Text, View} from 'react-native';
import styles from '../styles';
import React from 'react';

interface WeatherData {
  temperature: number;
  maxTemp: number | undefined;
  minTemp: number | undefined;
  summary: string | undefined;
  humidity: number;
}

interface WeatherDataDisplayProps {
  weatherData: WeatherData | undefined;
  name: string;
}

const WeatherDataDisplay = ({weatherData, name}: WeatherDataDisplayProps) => (
  <View style={styles.leftContainer}>
    <Text style={styles.largeText}>
      {`${weatherData?.temperature ?? 'no data'}` + '\u00b0'}
    </Text>
    <View style={styles.textContainer}>
      <Text style={styles.smallText}>{weatherData?.maxTemp ?? 'h:24'}</Text>
      <Text style={styles.smallText}>{weatherData?.minTemp ?? 'l:19'}</Text>
    </View>
    <View style={styles.textContainer}>
      <Text>{name}</Text>
    </View>
  </View>
);

export default WeatherDataDisplay;
