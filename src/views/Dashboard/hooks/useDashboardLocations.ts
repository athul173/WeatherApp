import {useCallback, useEffect, useRef, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {PermissionsAndroid, Platform} from 'react-native';

const initialLocations = [
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

const useDashboardLocations = () => {
  const [locations, setLocations] = useState(initialLocations);

  const locationCleanupRef = useRef(false);

  const addCurrentLocation = useCallback(() => {
    Geolocation.getCurrentPosition(
      position => {
        setLocations([
          {
            name: 'My location',
            coordinates: {
              latitude: position.coords.latitude.toString(),
              longitude: position.coords.longitude.toString(),
            },
          },
          ...locations,
        ]);
      },
      error => {
        console.log(error);
      },
    );
  }, [locations]);

  useEffect(() => {
    if (locationCleanupRef.current) {
      return;
    }
    if (Platform.OS === 'android') {
      PermissionsAndroid.check('android.permission.ACCESS_FINE_LOCATION').then(
        result => {
          console.log('Location granted is ', result);
          if (result) {
            addCurrentLocation();
          }
        },
      );
    }
    return () => {
      locationCleanupRef.current = true;
    };
  }, [addCurrentLocation]);

  return {locations, addLocationHandler: addCurrentLocation};
};

export default useDashboardLocations;
