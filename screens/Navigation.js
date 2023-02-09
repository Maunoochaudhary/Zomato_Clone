import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './LogInSignupScreens/WelcomeScreen';
import SignupScreen from './LogInSignupScreens/SignupScreen';
import LoginScreen from './LogInSignupScreens/LogInScreen';
import HomeScreen from './HomeScreen';
import Profile from '../components/HomeScreen/Profile';
import SplashScreen from './LogInSignupScreens/SplashScreen';
import Cart from '../components/HomeScreen/Cart';
import Track from '../components/bottomNavScreen/Track';
import ProductPage from './ProductPage';
import PlaceOrder from './PlaceOrder';

const Stack = createNativeStackNavigator();
const Navigation = () => {

   
     return (
         <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false}}>
               <Stack.Screen name='splash' component={SplashScreen}  ></Stack.Screen>
               <Stack.Screen name='welcome' component={WelcomeScreen}></Stack.Screen>
               <Stack.Screen name='home' component={HomeScreen}></Stack.Screen>
               <Stack.Screen name='signup' component={SignupScreen}></Stack.Screen>
               <Stack.Screen name='login' component={LoginScreen}></Stack.Screen>
               <Stack.Screen name='profile' component={Profile}></Stack.Screen>
               <Stack.Screen name='cart' component={Cart}></Stack.Screen>
               <Stack.Screen name='track' component={Track}></Stack.Screen>
               <Stack.Screen name='product' component={ProductPage}></Stack.Screen>
               <Stack.Screen name='place' component={PlaceOrder}></Stack.Screen>
            </Stack.Navigator>
         </NavigationContainer>
     );
}

const styles = StyleSheet.create({})

export default Navigation;
