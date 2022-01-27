import React, {useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Text,
} from 'react-native';
import CustomButton from '../components/CustomButton';
import Heading from '../components/Heading';
import CustomInput from '../components/CustomInput';

const Login = props => {
  let email = useRef(null);
  let password = useRef(null);
  const [showpassword, setShowPassword] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Heading text={'Log In'} />

        <CustomInput ref={email} label="Email" />
        <CustomInput
          ref={password}
          label="Password"
          secureTextEntry={showpassword}
        />
        <TouchableOpacity
          style={{position: 'absolute', right: 30, top: 160}}
          onPress={() => setShowPassword(!showpassword)}>
          <Text
            style={{
              fontWeight: '500',
            }}>
            Show
          </Text>
        </TouchableOpacity>
        <CustomButton
          text="Login"
          screenName="Home"
          buttonStyle={{backgroundColor: 'black', marginTop: 120}}
          textStyle={{color: 'white'}}
          navigation={props.navigation}
        />
        <CustomButton
          text="Forgot your password?"
          screenName="Home"
          buttonStyle={{backgroundColor: 'white'}}
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
export default Login;
