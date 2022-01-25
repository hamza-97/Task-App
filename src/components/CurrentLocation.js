import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Colors from '../utils/colors';

const CurrentLocation = props => {
  return (
    <View style={{flexDirection: 'row', marginTop: 16}}>
      <Text> 📍 </Text>
      <View>
        <Text
          style={{
            marginLeft: 4,
            fontSize: 18,
            color: Colors.prim1,
            fontWeight: '500',
          }}>
          Pustegränd, Stockholm, SE
        </Text>

        <Text
          style={{
            marginLeft: 4,
            marginTop: 4,
            fontSize: 14,
            color: '#B9B9BE',
            fontWeight: '600',
          }}>
          59.3293° N, 18.0686° E
        </Text>
      </View>
    </View>
  );
};

export default CurrentLocation;
