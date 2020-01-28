import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './Home';
import Register from './Register'

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Register: { screen: Register},
});

export default createAppContainer(AppNavigator);