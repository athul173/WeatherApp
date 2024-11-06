import React, {useMemo} from 'react';
import {ActivityIndicator, Image, Pressable, Text, View} from 'react-native';
import styles from './styles';
import {useGetWeatherInfoQuery} from '../../../../state/weather';
import {getWeatherData} from '../../../../utils/parser/getWeatherData';
import {useNavigation} from '@react-navigation/native';
import {
  HomeStackRoutes,
  StackNavigationProps,
} from '../../../../utils/types/Navigation';
import LinearGradient from 'react-native-linear-gradient';
import GeoLocation from '../../../../utils/types/GeoLocation';
import WeatherDataDisplay from './components/WeatherDataDisplay';

interface Props {
  item: GeoLocation;
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
    <LinearGradient
      style={styles.locationContainer}
      colors={['#A888FD', '#5996FD', '#A888FD', '#5996FD']}>
      <Pressable style={styles.pressable} onPress={onPressHandler}>
        {isLoading ? null : error ? (
          <View style={styles.leftContainer}>
            <Text style={{}}>Error fetching data</Text>
          </View>
        ) : (
          <WeatherDataDisplay weatherData={weatherData} name={item.name} />
        )}

        <View style={styles.rightContainer}>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <Image
              source={
                error
                  ? require('../../../../../assets/images/warning.png')
                  : require('../../../../../assets/images/cloudy.png')
              }
              style={styles.image}
            />
          )}
        </View>
      </Pressable>
    </LinearGradient>
  );
};

export default LocationItem;
