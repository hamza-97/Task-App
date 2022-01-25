import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Text,
  FlatList,
  ScrollView,
} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import Swipeout from 'react-native-swipeout';

import CustomButton from '../components/CustomButton';
import Heading from '../components/Heading';
import {SCREEN_WIDTH} from '../utils/Constants';
import Colors from '../utils/colors';
import TaskList from '../components/TaskList';
import CompleteTaskList from '../components/CompleteTaskList';
import Reminder from '../components/Reminder';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

const Task = props => {
  const [showPopup, setShowPopup] = useState(false);
  var swipeoutBtns = [
    {
      component: (
        <View
          style={{
            alignItems: 'center',
          }}>
          <Ionicons
            name="ios-trash-outline"
            color="white"
            size={24}
            style={{
              marginTop: 14,
            }}
          />
        </View>
      ),

      backgroundColor: 'red',
      onPress: () => setShowPopup(true),
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{paddingHorizontal: 24}}
        showsVerticalScrollIndicator={false}>
        <Heading text={'Task'} />
        <TouchableOpacity
          style={{marginTop: 32}}
          onPress={() => props.navigation.navigate('NewTask')}>
          <Text
            style={{
              fontWeight: '700',
              fontSize: 18,
              color: Colors.prim1,
            }}>
            + Add new task
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 18,
            color: Colors.prim1,
            marginTop: 30,
          }}>
          Incomplete
        </Text>
        <FlatList
          data={[
            'task',
            'task',
            'task',
            'task',
            'task',
            'task',
            'task',
            'task',
          ]}
          style={{marginTop: 10}}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item.id}
          renderItem={item => {
            return (
              <Swipeout right={swipeoutBtns} backgroundColor="red">
                <View style={{backgroundColor: 'white'}}>
                  <TaskList />
                </View>
              </Swipeout>
            );
          }}
        />
        <Text
          style={{
            fontWeight: '700',
            fontSize: 18,
            color: Colors.prim1,
            marginTop: 30,
          }}>
          Completed
        </Text>
        <FlatList
          data={[
            'task',
            'task',
            'task',
            'task',
            'task',
            'task',
            'task',
            'task',
          ]}
          style={{marginTop: 10}}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item.id}
          renderItem={item => <CompleteTaskList />}
        />
      </ScrollView>
      {showPopup && <Reminder setShowPopup={setShowPopup} />}
    </SafeAreaView>
  );
};

export default Task;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
