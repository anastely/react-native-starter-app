import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const CardScreen = props => {
  return (
    <View>
      <View style={styles.imageView}>
        <Image
          style={{position: 'absolute', bottom: 0}}
          source={require('../assets/user.png')}
        />
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.text}>
          I'm a{' '}
          <Text style={[styles.text, {color: '#3b5998'}]}>
            {props.description}.
          </Text>
        </Text>
        <Text style={styles.text}>
          I like{' '}
          <Text style={[styles.text, {color: '#3b5998'}]}>{props.likes}.</Text>
        </Text>
      </View>
      <View style={styles.userDetails}>
        <View
          style={{
            borderTopColor: '#a9a9a9',
            paddingBottom: 10,
            borderTopWidth: 1,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.text}>Name:</Text>
          <Text style={{color: '#3b5998', fontSize: 15}}>{props.name}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.text}>Location:</Text>
          <Text style={{color: '#3b5998', fontSize: 15}}>{props.location}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageView: {
    position: 'relative',
    height: 380,
    backgroundColor: '#ffd2fe',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  userInfo: {
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  text: {
    paddingVertical: 10,
    fontSize: 17,
  },
  userDetails: {
    padding: 20,
  },
});

export default CardScreen;
