import React, { useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

function AboutUs({ navigation }) {
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
          
          {/* <Text style={styles.appName}>Evently</Text> */}

          {/* <Text style={styles.title}>About Us</Text> */}
          <View style={styles.mainbox}>

            <Text style={styles.description}>
            "Evently is customized for the Imam Muhammed Bin Saud Islamic University community,
            offering easy access to event info, workshops, and important updates. 
            Stay informed, stay engaged, and elevate your academic journey."
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate('Log In')}>
               <Text style={{ color: '#E5D283', textDecorationLine: 'underline' }}>  Want to join us? </Text>
            </TouchableOpacity>

          </View>
          
        </View>
      );
}
const styles = StyleSheet.create({
    pageContainer: {
      flex: 1,
      marginTop: 60,
      marginLeft: 10,
      // justifyContent: 'center',
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
      color: '#213555',
      fontSize: 30,
      fontFamily: "Merriweather-Black",
      fontWeight: 'bold',
      marginBottom: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },
    description: {
      fontFamily: "Merriweather-Light",
      fontSize: 20,
      color: 'white',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 90,
      marginTop: -90,
      lineHeight: 40,
    },
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
      marginTop: 20,
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
      top: 50, // |
      justifyContent: 'center', // Added to center vertically
      alignItems: 'center', // Added to center horizontally
    },
  });

export default AboutUs;