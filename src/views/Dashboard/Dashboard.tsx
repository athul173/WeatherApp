import React from 'react';
import ContainerScreen from '../../components/ContainerScreen/ContainerScreen.tsx';
import LocationItem from '../../components/LocationItem';
import {View} from 'react-native';

const Dashboard = () => {
  const requiredLocations = [
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

  return (
    <ContainerScreen title={'Weather'}>
      <View>
        {requiredLocations.map(value => (
          <LocationItem key={value.name} item={value} />
        ))}
      </View>
    </ContainerScreen>
  );
};

export default Dashboard;
