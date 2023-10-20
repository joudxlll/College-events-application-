import React, { useState } from 'react';
import { View, Text, FlatList, RefreshControl, StyleSheet,TextInput,Button,TouchableOpacity } from 'react-native';


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
<View>
<Text>Organization Name</Text>
<TextInput
        placeholder="Organization Name"
        value={orgName}
        onChangeText={setOrgName}
      />

 

      <Text>E-mail</Text>
<TextInput
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />

 

      <Text>Password</Text>
<TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

 

      <Text>Confirm Password</Text>
<TextInput
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

 

      <Button title="Sign Up" onPress={handleSignUp} />
</View>
  );
};

 

export default SignUp;
