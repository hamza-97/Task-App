import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, StatusBar} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from './src/utils/colors';

import Login from './src/screens/Login';
import Task from './src/screens/Task';
import Location from './src/screens/Location';
import NewTask from './src/screens/NewTask';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarStyle: {height: 100},
      }}
      tabBarOptions={{
        inactiveTintColor: 'black',
        indicatorStyle: {
          width: '100%',
          left: '16%',
          height: 30,
          backgroundColor: 'white',
        },
        activeTintColor: Colors.prim1,
        labelStyle: {
          fontSize: 12,
        },
        style: {
          backgroundColor: 'white',
          borderBottomColor: Colors.prim1,
        },
      }}>
      <BottomTab.Screen
        name="Task"
        component={Task}
        options={({route}) => ({
          tabBarLabel: 'Task',
          headerStyle: {
            height: 0,
            borderBottomColor: 'white',
          },
          tabBarIcon: ({focused}) =>
            focused ? (
              <Ionicons
                name="ios-clipboard-outline"
                size={24}
                color={'black'}
              />
            ) : (
              <Ionicons
                name="ios-clipboard-outline"
                size={24}
                color="lightgray"
              />
            ),
        })}
      />
      <BottomTab.Screen
        name="NewTask"
        component={NewTask}
        options={({route}) => ({
          tabBarLabel: '',
          headerStyle: {
            height: 0,
            borderBottomColor: 'white',
          },
          tabBarIcon: () => (
            <View
              style={{
                backgroundColor: Colors.prim2,
                width: 50,
                height: 50,
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Ionicons
                name="ios-add-outline"
                size={40}
                color={'white'}
                style={{
                  elevation: 2,
                  zIndex: 2,
                }}
              />
            </View>
          ),
        })}
      />
      <BottomTab.Screen
        name="Location"
        component={Location}
        options={({route}) => ({
          tabBarLabel: 'Location',
          headerStyle: {
            height: 0,
            borderBottomColor: 'white',
          },
          tabBarIcon: ({focused}) =>
            focused ? (
              <Ionicons name="ios-location-outline" size={24} color={'black'} />
            ) : (
              <Ionicons
                name="ios-location-outline"
                size={24}
                color="lightgray"
              />
            ),
        })}
      />
    </BottomTab.Navigator>
  );
};
const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Login"
      component={Login}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Home"
      component={HomeTabs}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);
export default class MainApp extends Component {
  render() {
    return (
      <NavigationContainer>
        <PaperProvider>
          <AuthStack />
        </PaperProvider>
      </NavigationContainer>
    );
  }
}
