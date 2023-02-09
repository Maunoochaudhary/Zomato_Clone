import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
const WelcomeScreen = ({navigation}) => {
 
  
  

  return (
    <>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <SafeAreaView style={styles.container}>
      <Text style={{color: 'white', fontWeight: 'bold',fontSize:20}}>Welcome Foodie</Text>
        <View
          style={{
            flexDirection: 'row',
            margin: 20,
            justifyContent: 'space-around',
            width: '100%',
          }}>
          <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('login')}}>
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('signup')}}>
            <Text style={styles.text}>Signup</Text>
          </TouchableOpacity>
        </View>
        
        
      </SafeAreaView>
    </>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'white',
    height: 50,
    borderRadius: 10,
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    color:'black',
    fontWeight:'bold',
    fontSize:20
  }
});
