import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Text,
  Dimensions,
} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import CustomButton from '../components/CustomButton';
import Heading from '../components/Heading';
import {SCREEN_WIDTH} from '../utils/Constants';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showpassword, setShowPassword] = useState(false);
  //   const element = <TextInput.Icon name="lock-outline" color="black" />;
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Heading text={'Log In'} />
        <TextInput
          keyboardType="default"
          style={{
            backgroundColor: 'whitesmoke',
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
          label="Enter Email Address"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          keyboardType="default"
          style={{
            backgroundColor: 'whitesmoke',
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
          label="Enter Password"
          value={password}
          secureTextEntry={!showpassword}
          onChangeText={text => setPassword(text)}
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
          navigation={props.navigation}
        />
        <TouchableOpacity
          style={{
            alignItems: 'center',
            alignSelf: 'center',
            marginHorizontal: 20,
            borderRadius: 40,
            width: SCREEN_WIDTH / 1.1,
            padding: 16,
          }}
          onPress={() => props.navigation.navigate('Login')}>
          <Text style={{fontSize: 18, fontWeight: '600'}}>
            Forgot your password?
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
