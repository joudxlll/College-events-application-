import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Button,
  Pressable,
  ScrollView,
} from 'react-native';
import { db } from '../confiq';
import { onValue, remove, update, ref, set } from 'firebase/database';
import DateTimePicker from '@react-native-community/datetimepicker';
import { uid } from "uid";

// import ImagePicker from "react-native-image-picker";
// import {launchImageLibrary} from 'react-native-image-picker';
// import * as ImagePicker from 'react-native-image-picker';
// var ImagePicker = require('react-native-image-picker');

const TemplatePage = ({ navigation }) => {
  const uuId = uid();
  const [pic, setPic] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [location, setLocation] = useState('');
  const [selectedTime, setSelectedTime] = useState(new Date());
  // const [photo, setPhoto] = useState(null);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const handleTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || selectedTime;
    setSelectedTime(currentTime);
  };


  const dataAddOn = () => {
    const formattedDate = date.toLocaleDateString('en-US'); // Format the date in English
    const formattedTime = selectedTime.toLocaleTimeString('en-US'); // Format the time in English

    // set(ref(db, uuId , 'posts/' + title), {
      set(ref(db, uuId), {
      pic: pic,
      title: title,
      description: description,
      date: formattedDate,
      selectedTime: formattedTime,
      location: location,
      id: uuId,

      // photo: photo, // Add the photo to the data being added to the database
    });
    setPic('');
    setTitle('');
    setDescription('');
    setDate(new Date());
    setSelectedTime(new Date());
    setLocation('');
    // setPhoto(null);
  };


  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.text1}>Picture Link</Text>
      <TextInput
        style={styles.inputtitle}
        placeholder="Enter URL"
        value={pic}
        onChangeText={(text) => setPic(text)}
      />
      <Text style={styles.text1}>Title</Text>
      <TextInput
        style={styles.inputtitle}
        placeholder="Enter a title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />

      <Text style={styles.text1}>Description</Text>
      <TextInput
        style={styles.inputdescription}
        placeholder="Enter a description"
        value={description}
        onChangeText={(text) => setDescription(text)}
        multiline={true}
      />

<Text style={styles.text1}>Location</Text>
      <TextInput
        style={styles.inputtitle}
        placeholder="Enter a location"
        value={location}
        onChangeText={(text) => setLocation(text)}
      />
      
<View style={styles.datatimeContainer}>
        <View style={styles.datatimePicker}>
          <Text style={styles.text1}>Date</Text>
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={handleDateChange}
            style={styles.datatime}
          />
        </View>

        <View style={styles.datatimePicker}>
          <Text style={styles.text1}>Time</Text>
          <DateTimePicker
            value={selectedTime}
            mode="time"
            is24Hour={false}
            onChange={handleTimeChange}
            style={styles.datatime}
          />
        </View>
      </View>


      <Pressable style={styles.box}>
        <Button title="Add Event" onPress={dataAddOn} color="#DAFFFB" />
      </Pressable>
      
      {/* <View style={styles.bottomSpace} /> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
  },
  photoContainer: {
    width: 200,
    height: 200,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  photo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  text1: {
    fontSize: 20,
    color: '#176B87',
    fontWeight: 'bold',
    textAlign: 'left',
    alignSelf: 'stretch',
    marginBottom: 5,
  },
  datatimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '70%',
  },
  inputtitle: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  inputdescription: {
    width: '100%',
    height: 150,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  datatime: {
    // marginBottom: 20,
    // marginTop: 20,
    start: -20, // - or "5%"
    // top: 5, // |

  },
  box: {
    width: '70%',
    height: 60,
    backgroundColor: '#04364A',
    borderWidth: 1,
    borderRadius: 30,
    padding: 8,
    margin: 40,
    width: 200,
    position: 'relative',
  },
  bottomSpace: {
    height: 100, // Adjust the height as needed for the desired empty space
  },
});

export default TemplatePage;