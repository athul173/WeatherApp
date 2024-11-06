import {useEffect, useMemo, useState} from 'react';
import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';
import {PermissionsAndroid, Platform} from 'react-native';

const useDashboardLocations = () => {
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

  return {requiredLocations, addLocationHandler};
};

export default useDashboardLocations;
