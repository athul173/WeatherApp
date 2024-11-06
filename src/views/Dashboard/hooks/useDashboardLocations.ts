import {useEffect, useState} from 'react';
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
  const [locationPermissionGranted, setLocationPermissionGranted] =
    useState(false);

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'android') {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          );
          setLocationPermissionGranted(
            granted === PermissionsAndroid.RESULTS.GRANTED,
          );
        } catch (err) {
          console.warn(err);
        }
      }
      if (Platform.OS === 'ios') {
        // TODO: add permissions handler for iOS
      }
    };

    requestLocationPermission()
      .then()
      .catch(() => {});
  }, []);

  const addCurrentLocation = () => {
    if (locationPermissionGranted) {
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
    }
  };

  return {locations, addLocationHandler: addCurrentLocation};
};

export default useDashboardLocations;
