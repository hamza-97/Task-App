import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
        {props.item.item.task}
      </Text>
    </View>
  );
};

export default CompleteTaskList;
