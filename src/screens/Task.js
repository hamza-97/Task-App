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
import Swipeout from 'react-native-swipeout';
import Heading from '../components/Heading';
import Colors from '../utils/colors';
import TaskList from '../components/TaskList';
import CompleteTaskList from '../components/CompleteTaskList';
import Reminder from '../components/Reminder';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

const Task = props => {
  const [showPopup, setShowPopup] = useState(false);
  const incompleteTask = [
    {
      task: 'Submit my resume',
      date: 'Today, 12:00',
    },
    {
      task: 'Go to gym',
      date: 'Today, 20:00',
    },
    {
      task: 'Sleep',
      date: 'Today, 22:59',
    },
    {
      task: 'Wash clothes',
      date: 'Tomorrow, 09:00',
    },
    {
      task: 'Take car to workshop',
      date: 'Tomorrow, 13:00',
    },
    {
      task: 'Sleep',
      date: 'Tomorrow, 22:00',
    },
  ];
  const completeTask = [
    {
      task: 'Submit my resume',
    },
    {
      task: 'Go to gym',
    },
    {
      task: 'Sleep',
    },
    {
      task: 'Wash clothes',
    },
    {
      task: 'Take car to workshop',
    },
    {
      task: 'Sleep',
    },
  ];
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
          data={incompleteTask}
          style={{marginTop: 10}}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item.id}
          renderItem={item => {
            return (
              <Swipeout right={swipeoutBtns} backgroundColor="red">
                <View style={{backgroundColor: 'white'}}>
                  <TaskList item={item} />
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
          data={completeTask}
          style={{marginTop: 10}}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item.id}
          renderItem={item => <CompleteTaskList item={item} />}
        />
      </ScrollView>
      {showPopup && <Reminder setShowPopup={setShowPopup} />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
export default Task;
