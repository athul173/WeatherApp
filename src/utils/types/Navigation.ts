import {NavigationProp, ParamListBase} from '@react-navigation/native';

export type StackNavigationProps<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = string,
> = NavigationProp<ParamList, RouteName>;

export type HomeStackRoutes = {
  Dashboard: undefined;
  WeatherScreen: {
    locationItem: {
      name: string;
      coordinates: {
        latitude: string;
        longitude: string;
      };
    };
    weatherData: any;
  };
};
