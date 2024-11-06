import React, {useEffect, useMemo, useState} from 'react';
import ContainerScreen from '../../components/ContainerScreen/ContainerScreen.tsx';
import LocationItem from '../../components/LocationItem';
import {
  PermissionsAndroid,
  Platform,
  Pressable,
  Text,
  View,
} from 'react-native';
import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';
import styles from './styles.ts';

const Dashboard = () => {
  const [locationGranted, setLocationGranted] = useState(false);
  const [locationCoordinates, setLocationCoordinates] = useState<
    GeolocationResponse['coords'] | undefined
  >();

  const requiredLocations = useMemo(() => {
    const items = [
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
    if (locationCoordinates && locationGranted) {
      items.unshift({
        name: 'My location',
        coordinates: {
          latitude: locationCoordinates.latitude.toString(),
          longitude: locationCoordinates.longitude.toString(),
        },
      });
    }
    return items;
  }, [locationCoordinates, locationGranted]);

  useEffect(() => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.check('android.permission.ACCESS_FINE_LOCATION').then(
        result => {
          setLocationGranted(result);
          console.log('Location granted is ', result);
          if (result) {
            addLocationHandler();
          } else {
            setLocationCoordinates(undefined);
          }
        },
      );
    }
  }, []);

  const addLocationHandler = () => {
    Geolocation.getCurrentPosition(
      info => {
        console.log(info);
        if (info.coords) {
          setLocationGranted(true);
          setLocationCoordinates(info.coords);
        }
      },
      error => {
        setLocationGranted(false);
        console.log(error);
      },
    );
  };

  return (
    <ContainerScreen title={'Weather'}>
      <View style={styles.mainContainer}>
        <View style={styles.flexContainer}>
          {requiredLocations.map(value => (
            <LocationItem key={value.name} item={value} />
          ))}
        </View>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={addLocationHandler}>
            <Text style={styles.buttonText}>{'Add your Current location'}</Text>
          </Pressable>
        </View>
      </View>
    </ContainerScreen>
  );
};

export default Dashboard;
