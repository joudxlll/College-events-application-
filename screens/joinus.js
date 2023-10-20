import React from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity, Pressable } from 'react-native';

function JoinUs({ navigation }) {
  return (
    <View style={styles.pageContainer}>
      <Image source={require('../asset/dog.jpg')} style={styles.logo} />
      <Text style={styles.title}>Welcome to APPNAME</Text>
      <Text style={styles.description}>
        Looking to effortlessly and swiftly promote your event throughout the university?
      </Text>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.box}>
          <Button title="Sign Up" onPress={() => navigation.navigate('Template')} color="#DAFFFB" />
        </Pressable>
<Text>or</Text>
        <Pressable style={styles.box2}>
          <Button title="Log In" onPress={() => navigation.navigate('Template')} color="#04364A" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    marginTop: 60,
    marginLeft: 10,
    alignItems: 'center',
  },
  logo: {
    width: 90,
    height: 90,
    marginTop: 10,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left',
    marginTop: 40,
  },
  description: {
    fontSize: 14,
    marginVertical: 10,
    color: 'black',
    marginLeft: 10,
    marginTop: 10,
    width: '82%',
    textAlign: 'justify',
    marginBottom: 50,
  },
  buttonContainer: {
    flexDirection: 'column', // Updated to column
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  button: {
    flex: 1,
    backgroundColor: 'blue', // Replace with your desired button color
    borderRadius: 8,
    marginHorizontal: 3,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    width: '70%',
    height: 60,
    position: 'relative',
  },
  box: {
    width: '70%',
    height: 60,
    backgroundColor: '#04364A',
    borderWidth: 1,
    borderRadius: 20,
    padding: 8,
    width: 200,
    margin: 10,
    position: 'relative',
  },
  box2: {
    width: '70%',
    height: 60,
    backgroundColor: '#DAFFFB',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "white",
    padding: 8,
    width: 200,
    margin: 10,
    position: 'relative',
  },
});

export default JoinUs;