import React from 'react';
import {Text, View} from 'react-native';

const AboutScreen = props => {
  return (
    <View>
      <Text>{props.tech}</Text>
    </View>
  );
};

export default AboutScreen;
