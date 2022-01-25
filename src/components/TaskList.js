import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Colors from '../utils/colors';

const TaskList = props => {
  const [checked, setChecked] = useState(false);
  return (
    <View style={{flexDirection: 'row', marginTop: 16}}>
      <Ionicons name="ios-square-outline" size={24} color={'#DADADA'} />
      <View>
        <Text
          style={{
            marginLeft: 4,
            fontSize: 18,
            color: Colors.prim1,
            fontWeight: '500',
          }}>
          Submit my resume
        </Text>

        <Text
          style={{
            marginLeft: 4,
            marginTop: 4,
            fontSize: 14,
            color: '#B9B9BE',
            fontWeight: '600',
          }}>
          ⏰ Today, 17.00
        </Text>
      </View>
    </View>
  );
};

export default TaskList;
