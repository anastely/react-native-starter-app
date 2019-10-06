import {createStore} from 'redux';
import reducer from '../reducers/index';

const initialState = {
  tech: 'React Native',
  about: 'About is here',
  name: 'Alex Bakery',
  description: 'Software Engineer, Speaker, and Occasional Model',
  likes: 'Cats, Code and Black flowers',
  location: 'Palestine',
};

const store = createStore(reducer, initialState);

export default store;
