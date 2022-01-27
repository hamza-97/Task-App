import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {SCREEN_WIDTH} from '../utils/Constants';

const CustomButton = props => {
  console.log('Style is :', props.style);
  return (
    <TouchableOpacity
      style={[
        props.buttonStyle,
        {
          alignItems: 'center',
          alignSelf: 'center',
          marginHorizontal: 20,
          borderRadius: 40,
          width: SCREEN_WIDTH / 1.1,
          padding: 16,
        },
      ]}
      onPress={() => props.navigation.navigate(props.screenName)}>
      <Text style={[props.textStyle, {fontSize: 20}]}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
