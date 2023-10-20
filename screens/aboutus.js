import React from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';

function AboutUs({ navigation }) {
    return (
        <View style={styles.pageContainer}>
          <Image source={require('../asset/dog.jpg')} style={styles.logo} />
          <Text style={styles.appName}>App Name</Text>
          {/* <Text style={styles.title}>About Us</Text> */}
          <Text style={styles.description}>
          "APPNAME is customized for the Imam Muhammed Bin Saud Islamic University community,
           offering easy access to event info, workshops, and important updates. 
           Stay informed, stay engaged, and elevate your academic journey."
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('MainPage2')}>
          <Text style={{ color: 'red', textDecorationLine: 'underline' }}>
            Want to join us?
          </Text>
          </TouchableOpacity>
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
      flexDirection: 'row',
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
    },
  });

export default AboutUs;