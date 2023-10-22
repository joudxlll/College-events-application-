import React, { useState } from 'react';
import { View, Text, FlatList, RefreshControl, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import EventCard from '../src/components/EventCard'; // Import the EventCard component
import { eventData } from '../src/data'; // Import the eventData array

function CurrentEventsScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    // Perform your refresh logic here
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  // Filter the events that have not passed
  const currentEvents = eventData.filter((event) => new Date(event.date) >= new Date());

  return (
    <FlatList
      style={styles.container}
      data={currentEvents}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <EventCard event={item} />}
      numColumns={2}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    />
  );
}

///////////////////////////////////////////////

function PastEventsScreen() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    // Perform your refresh logic here
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  // Filter the events that have passed
  const pastEvents = eventData.filter((event) => new Date(event.date) < new Date());

  return (
    <FlatList
      style={styles.container}
      data={pastEvents}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <EventCard event={item} />}
      numColumns={2}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    />
  );
}

///////////////////////////////////////////////

const Tab = createMaterialTopTabNavigator();

function MyEventPage() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#F0F0F0',
        inactiveTintColor: '#04364A',
        labelStyle: { fontSize: 16 },
        style: {
          backgroundColor: '#4F709C',
        },
        indicatorStyle: { backgroundColor: '#E5D283' },
      }}
    >
      <Tab.Screen name="Current" component={CurrentEventsScreen} />
      <Tab.Screen name="Past" component={PastEventsScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    paddingTop: 30,
    // marginTop: 10,
  },
});

export default MyEventPage;