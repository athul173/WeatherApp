import {NavigationContainer} from '@react-navigation/native';
import Dashboard from '../views/Dashboard';
import React from 'react';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Dashboard />
    </NavigationContainer>
  );
};

export default AppNavigator;
