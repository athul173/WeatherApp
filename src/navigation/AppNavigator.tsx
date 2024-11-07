import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {HomeStackRoutes} from './navigation';
import Dashboard from '../screens/Dashboard';
import WeatherDetail from '../screens/WeatherDetail';

const AppNavigator = () => {
  const HomeStack = createNativeStackNavigator<HomeStackRoutes>();
  return (
    <NavigationContainer>
      <HomeStack.Navigator initialRouteName="Dashboard">
        <HomeStack.Screen
          options={{headerShown: false}}
          name="Dashboard"
          component={Dashboard}
        />
        <HomeStack.Screen
          name="WeatherScreen"
          options={{
            headerBackTitleVisible: false,
            headerShown: false,
          }}
          component={WeatherDetail}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
