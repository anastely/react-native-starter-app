import React from 'react';
import {Button, View} from 'react-native';
import store from '../redux/store/store';
import AboutScreen from './AboutScreen';
const HomeScreen = props => {
  state = store.getState();

  return (
    <View>
      <Button
        title="Go To About"
        onPress={() => props.navigation.navigate('About')}
      />
      <AboutScreen tech={state.tech} />
    </View>
  );
};

export default HomeScreen;



