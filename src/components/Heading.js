import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {SCREEN_WIDTH} from '../utils/Constants';
const Heading = props => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
    }}>
    {props.back && (
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Text
          style={{
            marginLeft: 24,
            fontSize: 14,
            fontWeight: '600',
          }}>
          Back
        </Text>
      </TouchableOpacity>
    )}
    <Text
      style={{
        marginLeft: props.back ? SCREEN_WIDTH / 5.5 : 'auto',
        marginRight: 'auto',
        fontSize: 32,
        fontWeight: '600',
        alignSelf: 'center',
      }}>
      {props.text}
    </Text>
  </View>
);
export default Heading;
