import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import tailwind from 'tailwind-rn';
import Toast from 'react-native-toast-message';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      Toast.show({
        type: 'error',
        text1: 'Login Failed',
        text2: 'Username or password cannot be empty',
      });
      return;
    }

    // Hardcoded username and password
    if (username === 'profe' && password === 'santi') {
      navigation.navigate('Home', { username });
    } else {
      Toast.show({
        type: 'error',
        text1: 'Login Failed',
        text2: 'Username or password is incorrect',
      });
    }
  };

  return (
    <View style={tailwind('flex-1 justify-center items-center')}>
      <Text style={tailwind('text-2xl font-bold mb-8')}>Login</Text>
      <TextInput
        style={tailwind('border border-gray-300 rounded p-2 mb-4 w-64')}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={tailwind('border border-gray-300 rounded p-2 mb-8 w-64')}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Pressable onPress={onPress={handleLogin}}>
        <Text style={tailwind('text-blue-500 underline')}>Login</Text>
      </Pressable>
    </View>
  );
}
