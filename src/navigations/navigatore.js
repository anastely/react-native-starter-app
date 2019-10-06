import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import AboutScreen from '../screens/AboutScreen';
import ButtonGroup from '../screens/ButtonGroup';
import CardScreen from '../screens/CardScreen';
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
  Card: {
    screen: CardScreen,
    navigationOptions: {
      title: 'Card',
    },
  },
  Button: {
    screen: ButtonGroup,
    navigationOptions: {
      title: 'Button',
    },
  },
});

const Navigator = createAppContainer(AppStack);

export default Navigator;
