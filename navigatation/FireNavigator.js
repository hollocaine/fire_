import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import LocationScreen from '../screens/LocationScreen';
import ReportScreen from '../screens/ReportScreen';
import CheckScreen from '../screens/CheckScreen';

const FireNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  Location: LocationScreen,
  Report: ReportScreen,
  Check: CheckScreen
});

export default createAppContainer(FireNavigator);
