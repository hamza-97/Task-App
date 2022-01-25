import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Colors from '../utils/colors';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../utils/Constants';

const Reminder = props => (
  <View style={styles.container}>
    <View
      style={{
        backgroundColor: 'white',
        padding: 24,
        width: '80%',
        borderRadius: 10,
      }}>
      <Text
        style={{
          fontSize: 32,
          fontWeight: '700',
          alignSelf: 'center',
          textAlign: 'center',
        }}>
        Reminder
      </Text>
      <Text
        style={{
          marginTop: 16,
          fontSize: 14,
          lineHeight: 18,
          fontWeight: '400',
          alignSelf: 'center',
          textAlign: 'center',
          color: Colors.prim1,
        }}>
        Consequat velit qui adipisicing sunt do reprehenderit ad laborum tempor
        ullamco exercitation. Ullamco tempor adipisicing et voluptate duis sit
        esse aliqua esse ex dolore esse. Consequat velit qui adipisicing sunt.
      </Text>

      <View
        style={{
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            alignSelf: 'center',
            backgroundColor: 'black',
            marginHorizontal: 20,
            marginTop: 20,
            borderRadius: 40,
            width: SCREEN_WIDTH / 1.5,
            padding: 12,
          }}
          onPress={() => props.setShowPopup(false)}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 18,

              color: 'white',
            }}>
            Remind me again
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            alignSelf: 'center',
            marginHorizontal: 20,
            borderRadius: 40,
            width: SCREEN_WIDTH / 1.5,
            padding: 12,
          }}
          onPress={() => props.setShowPopup(false)}>
          <Text style={{fontSize: 18, fontWeight: '600'}}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    height: SCREEN_HEIGHT,
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
});

export default Reminder;
