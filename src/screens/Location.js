import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Text,
  FlatList,
  ScrollView,
} from 'react-native';
import Heading from '../components/Heading';
import Colors from '../utils/colors';
import CurrentLocation from '../components/CurrentLocation';
import PrevLocation from '../components/PrevLocation';

const Location = props => {
  const currentLocationData = [
    {
      location: 'Pustegränd, Stockholm, SE',
      coordinates: '59.3293° N, 18.0686° E',
    },
    {
      location: 'Temp Location, SE',
      coordinates: '59.3293° N, 18.0686° E',
    },
    {
      location: 'The Location, SE',
      coordinates: '59.3293° N, 18.0686° E',
    },
    {
      location: 'Lahore, PK',
      coordinates: '59.3293° N, 18.0686° E',
    },
    {
      location: 'Karachi, PK',
      coordinates: '59.3293° N, 18.0686° E',
    },
  ];
  const prevLocationData = [
    {
      location: 'Karachi, PK',
      coordinates: '59.3293° N, 18.0686° E',
    },
    {
      location: 'Lahore, PK',
      coordinates: '59.3293° N, 18.0686° E',
    },

    {
      location: 'The Location, SE',
      coordinates: '59.3293° N, 18.0686° E',
    },
    {
      location: 'Pustegränd, Stockholm, SE',
      coordinates: '59.3293° N, 18.0686° E',
    },
    {
      location: 'Temp Location, SE',
      coordinates: '59.3293° N, 18.0686° E',
    },
  ];
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
          data={currentLocationData}
          style={{marginTop: 10}}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item.id}
          renderItem={item => <CurrentLocation item={item} />}
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
          data={prevLocationData}
          style={{marginTop: 10}}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item.id}
          renderItem={item => <PrevLocation item={item} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
  },
});
export default Location;
