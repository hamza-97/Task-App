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
import CurrentLocation from '../components/CurrentLocation';
import PrevLocation from '../components/PrevLocation';

const Location = props => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{marginHorizontal: 24}}
        showsVerticalScrollIndicator={false}>
        <Heading text={'Location'} />
        <TouchableOpacity style={{marginTop: 32}}>
          <Text
            style={{
              fontWeight: '700',
              fontSize: 18,
              color: Colors.prim1,
            }}>
            + Check In
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 18,
            color: Colors.prim1,
            marginTop: 30,
          }}>
          Current Location
        </Text>
        <FlatList
          data={[
            'location',
            'location',
            'location',
            'location',
            'location',
            'location',
            'location',
            'location',
          ]}
          style={{marginTop: 10}}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item.id}
          renderItem={item => <CurrentLocation />}
        />
        <Text
          style={{
            fontWeight: '700',
            fontSize: 18,
            color: Colors.prim1,
            marginTop: 30,
          }}>
          Previous Location
        </Text>
        <FlatList
          data={[
            'location',
            'location',
            'location',
            'location',
            'location',
            'location',
            'location',
            'location',
          ]}
          style={{marginTop: 10}}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item.id}
          renderItem={item => <PrevLocation />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Location;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
  },
});
