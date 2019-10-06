import React, {Component} from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import store from '../redux/store/store';
import ButtonGroup from './ButtonGroup';
import CardScreen from './CardScreen';

class HomeScreen extends Component {
  constructor() {
    super();
  }
  render() {
    const state = store.getState();
    const {name, description, likes, location} = state;

    return (
      <>
        <CardScreen
          name={name}
          location={location}
          description={description}
          likes={likes}
        />
        <Text style={{textAlign: 'center'}}>{this.props.tech}</Text>
        <ButtonGroup technologies={['reactjs', 'react-native', 'js']} />
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    tech: state.tech,
  };
};
export default connect(mapStateToProps)(HomeScreen);
