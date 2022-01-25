import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Colors from '../utils/colors';

const CompleteTaskList = props => {
  const [checked, setChecked] = useState(false);
  return (
    <View style={{flexDirection: 'row', marginTop: 16}}>
      <Ionicons name="ios-checkbox-outline" size={24} color={'#DADADA'} />
      <Text
        style={{
          marginLeft: 4,
          fontSize: 18,
          color: '#B9B9BE',
          fontWeight: '500',
        }}>
        Submit my resume
      </Text>
    </View>
  );
};

export default CompleteTaskList;
