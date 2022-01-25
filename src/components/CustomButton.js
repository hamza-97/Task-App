import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {SCREEN_WIDTH} from '../utils/Constants';

const CustomButton = props => (
  <TouchableOpacity
    style={{
      alignItems: 'center',
      alignSelf: 'center',
      backgroundColor: 'black',
      marginHorizontal: 20,
      marginTop: 120,
      borderRadius: 40,
      width: SCREEN_WIDTH / 1.1,
      padding: 16,
    }}
    onPress={() => props.navigation.navigate(props.screenName)}>
    <Text style={{fontSize: 20, color: 'white'}}>{props.text}</Text>
  </TouchableOpacity>
);

export default CustomButton;
