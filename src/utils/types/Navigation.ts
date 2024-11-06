import {NavigationProp, ParamListBase} from '@react-navigation/native';
import GeoLocation from './GeoLocation.ts';

export type StackNavigationProps<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = string,
> = NavigationProp<ParamList, RouteName>;

export type HomeStackRoutes = {
  Dashboard: undefined;
  WeatherScreen: {
    locationItem: GeoLocation;
    weatherData: any;
  };
};
