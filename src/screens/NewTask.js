import React, {useState, useEffect} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {TextInput} from 'react-native-paper';
import CustomButton from '../components/CustomButton';
import Heading from '../components/Heading';

const NewTask = props => {
  const [summary, setSummary] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Heading text={'New Task'} navigation={props.navigation} back />
        <TextInput
          keyboardType="default"
          style={{
            backgroundColor: 'white',
            marginVertical: 12,
            borderRadius: 12,
            fontSize: 16,
            marginHorizontal: 20,
          }}
          autoFocus
          theme={{
            colors: {
              primary: 'black',
            },
          }}
          label="Summary"
          left={<TextInput.Icon name="chat-outline" color="black" />}
          value={summary}
          onChangeText={text => setSummary(text)}
        />
        <TextInput
          keyboardType="default"
          style={{
            backgroundColor: 'white',
            marginVertical: 12,
            borderRadius: 12,
            fontSize: 16,
            marginHorizontal: 20,
          }}
          theme={{
            colors: {
              primary: 'black',
            },
          }}
          label="Description"
          left={<TextInput.Icon name="menu" color="black" />}
          value={description}
          multiline
          onChangeText={text => setDescription(text)}
        />
        <TextInput
          keyboardType="default"
          style={{
            backgroundColor: 'white',
            marginVertical: 12,
            borderRadius: 12,
            fontSize: 16,
            marginHorizontal: 20,
          }}
          theme={{
            colors: {
              primary: 'black',
            },
          }}
          label="Due Date"
          left={<TextInput.Icon name="clock-outline" color="black" />}
          value={date}
          onChangeText={text => setDate(text)}
        />

        <CustomButton
          text="Save"
          screenName="Task"
          navigation={props.navigation}
        />
      </View>
    </SafeAreaView>
  );
};

export default NewTask;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
