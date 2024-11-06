import React from 'react';
import ContainerScreen from '../../components/ContainerScreen';
import LocationItem from './components/LocationItem';
import {Pressable, Text, View} from 'react-native';
import styles from './styles';
import useDashboardLocations from './hooks/useDashboardLocations';

const Dashboard = () => {
  const {locations, addLocationHandler} = useDashboardLocations();

  return (
    <ContainerScreen title={'Weather'}>
      <View style={styles.mainContainer}>
        <View style={styles.flexContainer}>
          {locations.map(value => (
            <LocationItem key={value.name} item={value} />
          ))}
        </View>
        {locations.length < 2 && (
          <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={addLocationHandler}>
              <Text style={styles.buttonText}>
                {'Add your Current location'}
              </Text>
            </Pressable>
          </View>
        )}
      </View>
    </ContainerScreen>
  );
};

export default Dashboard;
