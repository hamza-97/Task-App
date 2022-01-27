import React, {useRef} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {TextInput} from 'react-native-paper';
import CustomButton from '../components/CustomButton';
import Heading from '../components/Heading';
import CustomInput from '../components/CustomInput';

const NewTask = props => {
  let summary = useRef(null);
  let description = useRef(null);
  let date = useRef(null);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Heading text={'New Task'} navigation={props.navigation} back />
        <CustomInput
          ref={summary}
          label="Summary"
          left={<TextInput.Icon name="chat-outline" color="black" />}
        />
        <CustomInput
          ref={description}
          label="Description"
          left={<TextInput.Icon name="menu" color="black" />}
        />
        <CustomInput
          ref={date}
          label="Date"
          left={<TextInput.Icon name="clock-outline" color="black" />}
        />
        <CustomButton
          text="Save"
          screenName="Task"
          buttonStyle={{backgroundColor: 'black', marginTop: 120}}
          textStyle={{color: 'white'}}
          navigation={props.navigation}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
export default NewTask;
