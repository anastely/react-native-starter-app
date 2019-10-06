import {createStore} from 'redux';
import reducer from '../reducers/index';

const initialState = {
  tech: 'React Native',
  about: 'About is here',
};

const store = createStore(reducer, initialState);

export default store;
