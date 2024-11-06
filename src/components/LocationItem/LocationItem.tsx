import React, {useMemo} from 'react';
import {ActivityIndicator, Image, Pressable, Text, View} from 'react-native';
import styles from './styles.ts';
import {useGetWeatherInfoQuery} from '../../state/weather';
import {getWeatherData} from '../../utils/parser/getWeatherData.ts';
import {useNavigation} from '@react-navigation/native';
import {
  HomeStackRoutes,
  StackNavigationProps,
} from '../../utils/types/Navigation.ts';

interface Props {
  item: {name: string; coordinates: {latitude: string; longitude: string}};
}

const LocationItem = ({item}: Props) => {
  const {data, error, isLoading} = useGetWeatherInfoQuery(item.coordinates);

  const navigation =
    useNavigation<StackNavigationProps<HomeStackRoutes, 'Dashboard'>>();

  const weatherData = useMemo(() => getWeatherData(data), [data]);

  const onPressHandler = () => {
    navigation.navigate('WeatherScreen', {locationItem: item, weatherData});
  };

  return (
    <Pressable style={styles.locationContainer} onPress={onPressHandler}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.leftContainer}>
          <View>
            <Text style={styles.largeText}>
              {`${weatherData?.temperature ?? 'no data'}` + '\u00b0'}
            </Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.smallText}>
              {weatherData?.maxTemp ?? 'h:24'}
            </Text>
            <Text style={styles.smallText}>
              {weatherData?.minTemp ?? 'l:19'}
            </Text>
          </View>
          <View style={{...styles.textContainer}}>
            <Text>{item.name}</Text>
          </View>
        </View>
      )}
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.rightContainer}>
          <Image
            source={require('../../../assets/images/cloudy.png')}
            style={styles.image}
          />
        </View>
      )}
    </Pressable>
  );
};

export default LocationItem;
