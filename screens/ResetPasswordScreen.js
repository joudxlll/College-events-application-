import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';


const ResetPasswordScreen = ({ navigation }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

 
  const handleResetPassword = () => {
    navigation.navigate('profilepage');
  };

 

  return (
<View>
<Text>Reset password</Text>
<TextInput
        placeholder="New password"
        secureTextEntry
        value={newPassword}
        onChangeText={setNewPassword}
      />
<TextInput
        placeholder="Confirm new password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
<Button title="Reset" onPress={handleResetPassword} />
</View>
  );
};

 

export default ResetPasswordScreen;
