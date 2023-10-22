import React, { useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

function JoinUs({ navigation }) {
  const [fontsLoaded] = useFonts({
    "Merriweather-Black": require("../asset/fonts/Merriweather-Black.ttf"),
    "Merriweather-Light": require("../asset/fonts/Merriweather-Light.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }


  return (
    <View style={styles.pageContainer}>
      <Image source={require('../asset/logo1.png')} style={styles.logo} />
      
      <View style={styles.mainbox}>
      <Text style={styles.title}>Welcome to Evently</Text>



      <Text style={styles.description}>
        Looking to effortlessly and swiftly promote your event throughout the university?
      </Text>

      <View style={styles.buttonContainer}>
        <Pressable style={styles.box}>
          <Button title="Sign Up" onPress={() => navigation.navigate('Sign Up')} color="#F0F0F0" />
        </Pressable>
        <Text style={{color:"#E5D283"  }}>or</Text>
        <Pressable style={styles.box2}>
          <Button title="Log In" onPress={() => navigation.navigate('Log In')} color="#4F709C" />
        </Pressable>
      </View>
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
    width: 250,
    height: 250,
    // marginTop: 10,
    // marginBottom: 10,
    // borderRadius:90,
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
    fontSize: 30,
    color: '#F0F0F0',
    marginBottom: 20,
    textAlign: 'left',
    marginTop: -90,
    fontFamily: "Merriweather-Black"
  },
  description: {
    fontFamily: "Merriweather-Light",
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 130,
    marginTop: 10,
    lineHeight: 30,
  },
  buttonContainer: {
    flexDirection: 'row', // Updated to column
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
    width: 150,
    height: 50,
    backgroundColor: '#213555',
    borderWidth: 1,
    borderRadius: 20,
    padding: 6,
    width: 150,
    margin: 10,
    position: 'relative',
  },
  box2: {
    width: 150,
    height: 50,
    backgroundColor: '#F0F0F0',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "white",
    padding: 6,
    margin: 10,
    position: 'relative',
  },
  mainbox: {
    width: 436,
    height: 550,
    backgroundColor: '#4F709C',
    borderWidth: 1,
    borderRadius: 50,
    borderColor: 'white',
    padding: 6,
    margin: 10,
    position: 'relative',
    start: -4, // - or "5%"
    top:50, // |
    justifyContent: 'center', // Added to center vertically
    alignItems: 'center', // Added to center horizontally
  },
});

export default JoinUs;