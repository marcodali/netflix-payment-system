import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native';
import tailwind from 'tailwind-rn';
import client from './apollo-client';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import Toast from 'react-native-toast-message';

const Stack = createStackNavigator();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <SafeAreaView style={tailwind("flex-1")}>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </SafeAreaView>
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </NavigationContainer>
    </ApolloProvider>
  );
}
