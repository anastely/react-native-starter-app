import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import AboutScreen from '../screens/AboutScreen';
import HomeScreen from '../screens/HomeScreen';

const AppStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Home',
    },
  },
  About: {
    screen: AboutScreen,
    navigationOptions: {
      title: 'About',
    },
  },
});

const Navigator = createAppContainer(AppStack);

export default Navigator;
