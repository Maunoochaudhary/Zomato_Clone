import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './LogInSignupScreens/WelcomeScreen';
import SignupScreen from './LogInSignupScreens/SignupScreen';
import LoginScreen from './LogInSignupScreens/LogInScreen';
import HomeScreen from './HomeScreen';
const Stack = createNativeStackNavigator();
const Navigation = () => {
     return (
         <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false}}>
               <Stack.Screen name='welcome' component={WelcomeScreen}></Stack.Screen>
               <Stack.Screen name='signup' component={SignupScreen}></Stack.Screen>
               <Stack.Screen name='login' component={LoginScreen}></Stack.Screen>
               <Stack.Screen name='home' component={HomeScreen}></Stack.Screen>
            </Stack.Navigator>
         </NavigationContainer>
     );
}

const styles = StyleSheet.create({})

export default Navigation;
