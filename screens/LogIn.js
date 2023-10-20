import React, { useState } from 'react';
import { View, TextInput, Button, Text, TouchableOpacity } from 'react-native';

 

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
<View>
<TextInput
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />
<TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
<Button title="Log in" onPress={handleLogin} />

 

      <TouchableOpacity onPress={handleForgotPassword}>
<Text>Forgot your password?</Text>
</TouchableOpacity>
</View>
  );
};


export default LogIn;
