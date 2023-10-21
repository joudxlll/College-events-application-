import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

 

const LogIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const handleLogin = () => {
    
    // Assuming successful login, navigate to the profile page
    navigation.navigate('profilepage');
  };

 

  const handleForgotPassword = () => {
    navigation.navigate('ResetPassword');
  };



  return (
    <View style ={styles.container}>
     <Text>E-mail</Text>
     <TextInput
        style ={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail} />


     <Text>Password</Text>
     <TextInput
        style ={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword} />




<Button title="Log in" onPress={handleLogin} />

 

      <TouchableOpacity onPress={handleForgotPassword}>
        <Text>Forgot your password?</Text>
      </TouchableOpacity>
</View>
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      borderWidth: 1,
      borderColor: '#777',
      padding: 8,
      margin: 10,
      width: 200,
    }

  })
};


export default LogIn;
