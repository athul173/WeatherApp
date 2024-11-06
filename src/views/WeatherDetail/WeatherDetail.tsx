import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles.ts';

const WeatherDetail = () => {
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
            <Text style={styles.centerText}>{'05:40'}</Text>
          </View>
          <View style={styles.footerItemContainer}>
            <Text style={styles.centerText}>{'Sunset'}</Text>
            <Text style={styles.centerText}>{'20:26'}</Text>
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
