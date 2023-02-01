
import React from 'react';
import { StatusBar } from 'react-native';
import {View, StyleSheet,Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LoginScreen from './screens/LogInSignupScreens/LogInScreen';
import Navigation from './screens/Navigation';
import WelcomeScreen from './screens/LogInSignupScreens/WelcomeScreen';

const App = () => {
    
    return (
    <>

     <Navigation/>
    </>

  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }
})

export default App;
