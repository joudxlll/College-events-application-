import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Button, Pressable } from 'react-native';

const TemplatePage = ({ navigation }) => {
  const [photo, setPhoto] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [badgeCount, setBadgeCount] = useState(0);

  const handlePhotoUpload = (image) => {
    setPhoto(image);
  };

  return (
    <View style={styles.container}>
      <View style={styles.photoContainer}>
        {photo ? (
          <Image source={{ uri: photo }} style={styles.photo} />
        ) : (
          <Text>Upload a photo</Text>
        )}
        <Button title="Upload Photo" onPress={() => handlePhotoUpload(photo)} />
      </View>

      <Text style={styles.text1}>Title</Text>
      <TextInput
        style={styles.inputtitle}
        placeholder="Enter a title"
        value={title}
      />

      <Text style={styles.text1}>Description</Text>
      <TextInput
        style={styles.inputdescription}
        placeholder="Enter a description"
        value={description}
      />

      <Pressable style={styles.box}>
        <Button
          title="Add Event"
          onPress={() => navigation.popToTop()}
          color="#DAFFFB"
        />
        {badgeCount > 0 && (
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>{badgeCount}</Text>
          </View>
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  photoContainer: {
    width: 200,
    height: 200,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  inputView: {
    backgroundColor: "#176B87",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  photo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  text1: {
    fontSize: 20,
    color: "#176B87",
    fontWeight: "bold",
    textAlign: 'left',
    alignSelf: 'stretch',
    marginBottom: 5,
  },
  inputtitle: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  inputdescription: {
    width: "100%",
    height: 150,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  box: {
    width: "70%",
    height: 60,
    backgroundColor: "#04364A",
    borderWidth: 1,
    borderRadius: 30,
    padding: 8,
    margin: 10,
    width: 200,
    position: 'relative',
  },
  badgeContainer: {
    backgroundColor: 'red',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    position: 'absolute',
    top: -6,
    right: -6,
    zIndex: 1,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default TemplatePage;