import React from 'react';
import {Dimensions, Text, TouchableOpacity, View} from 'react-native';
import {setTechnology} from '../redux/actions/index';
import store from '../redux/store/store';
const {width} = Dimensions.get('window');
const ButtonGroup = ({technologies}) => {
  return (
    <View
      style={{
        flexGrow: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      {technologies.map((tech, index) => (
        <TouchableOpacity
          style={{
            width: width * 0.3,
            height: 70,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fdd11c',
            borderRadius: 10,
          }}
          onPress={() => dispatchBtnAction(tech)}
          key={index}>
          <Text style={{fontSize: 18}}>{tech}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

function dispatchBtnAction(e) {
  // const tech = e.target.dataset.tech;
  store.dispatch(setTechnology(e));
}
export default ButtonGroup;
