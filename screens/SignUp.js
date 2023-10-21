import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


const SignUp = ({ navigation }) => {
  const [orgName, setOrgName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

 

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

 

    // Assuming successful sign-up, navigate to the profile page
    navigation.navigate('profilepage');
  };

 

   return (
     <View style ={styles.container}>
      <Text>Organization Name</Text>
      <TextInput
         style ={styles.input}
         placeholder="Organization Name"
         value={orgName}
         onChangeText={setOrgName} />
      

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

      
      <Text>Confirm Password</Text>
      <TextInput
         style ={styles.input}
         placeholder="Confirm Password"
         secureTextEntry
         value={confirmPassword}
         onChangeText={setConfirmPassword} />
         
         
         <Button title="Sign Up" onPress={handleSignUp} />
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

 

export default SignUp;
