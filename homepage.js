import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { View, FlatList, TouchableOpacity, TextInput, Text } from 'react-native';
import { categories, eventData } from '../src/data';
import EventCard from '../src/components/EventCard';
import CategoryComponent from '../src/components/CategoryComponent';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
function HomeScreen({ navigation }) {
  const [myFilteredData, setMyFilteredData] = useState(eventData);
  const [selectedCategory, setSelectedCategory] = useState("");
function HomeScreen({ navigation }) {
    }
  }, [selectedCategory])
  const [textInputText, setTextInputText] = useState('')

  const [sortState, setSortState] = useState(false)
  return (
    <View style={{ flex: 1, }}>
    <View style={{ flex: 1, marginBottom: 80 }}>
      <View

        style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center', alignContent: 'center', }}
      >
        <View
          style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', alignContent: 'center', backgroundColor: 'white', borderRadius: 10, padding: 10 }}
          style={{
            flexDirection: 'row', alignItems: 'center', width: '90%',
            height: 48,
          }}
        >
          <Feather name="search" size={24} color="black" />
          <TextInput
            placeholder='Search'
            style={{
              flex: 1,
              height: 40,
              borderColor: 'gray',

            }}
            value={textInputText}
            onChangeText={
              (text) => {
                setTextInputText(text)
                setMyFilteredData(eventData.filter(item => item.title.toLowerCase().includes(text.toLowerCase())))
          <View
            style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', alignContent: 'center', backgroundColor: 'white', borderRadius: 10, padding: 10, height: 48 }}
          >
            <Feather name="search" size={24} color="black" />
            <TextInput
              placeholder='Search'
              style={{
                flex: 1,
                height: 40,
                borderColor: 'gray',
              }}
              value={textInputText}
              onChangeText={
                (text) => {
                  setTextInputText(text)
                  setMyFilteredData(eventData.filter(item => item.title.toLowerCase().includes(text.toLowerCase())))
                }
              }
              autoCapitalize='none'
            />
            {textInputText &&
              <TouchableOpacity
                onPress={() => {
                  setMyFilteredData(eventData)
                  setTextInputText('')
                }}
              >
                <Feather
                  disabled
                  name="x" size={24} color="black" />
              </TouchableOpacity>
            }
            autoCapitalize='none'
          />
          {textInputText &&
            <TouchableOpacity
              onPress={() => {
                setMyFilteredData(eventData.filter(item => item.title.toLowerCase().includes(textInputText.toLowerCase())))
                setTextInputText('')
              }}
            >
              <Feather
                disabled
                name="x" size={24} color="black" />
            </TouchableOpacity>
          }
          </View>
          <TouchableOpacity
            style={{ marginLeft: 10, flexDirection: 'row', alignItems: 'center', alignContent: 'center', backgroundColor: 'lightblue', borderRadius: 10, padding: 10, height: 48 }}
            onPress={() => {
              setMyFilteredData(myFilteredData.sort((a, b) => {
                if (sortState) {
                  return a.date > b.date ? 1 : -1
                }
                else {
                  return a.date < b.date ? 1 : -1
                }
              }))
              setSortState(!sortState)
            }}
          >
            {sortState ? <MaterialCommunityIcons
              disabled name="sort-calendar-descending" size={24} color="black" /> : <MaterialCommunityIcons

              disabled name="sort-calendar-ascending" size={24} color="black" />}
          </TouchableOpacity>
        </View>
      </View>
      <View>
      <View
        style={{ marginTop: 20, }}
      >
        <FlatList
          horizontal
          data={categories}
 function HomeScreen({ navigation }) {
        />
      </View>
      <View
        style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}
        style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center', alignContent: 'center', }}
      >
        <FlatList
          numColumns={2}