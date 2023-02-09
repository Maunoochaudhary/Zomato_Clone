import React from 'react';
import {View, StyleSheet,ImageBackground,StatusBar,Image,Text, ActivityIndicator} from 'react-native';
import { useEffect } from 'react';
import auth from '@react-native-firebase/auth';

const SplashScreen = ({navigation}) => {
     useEffect(()=>{
          let subscribe;
          setTimeout(()=>{
                subscribe = auth().onAuthStateChanged((userdata)=>{
                    if(userdata){
                      navigation.replace('home')
                    } else {
                      navigation.replace('welcome')
                    }
              })
          },1000)
          
         return subscribe
       },[])
  return (
    <>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <View style={styles.container}>
 <Image source={require('../../assets/food.jpg')} style={styles.image}/>
          <View style={{flex:1,justifyContent:'flex-end',alignItems:'center'}}>
          <ActivityIndicator color='blue' size='large' style={{marginBottom:30}}/>

          </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image:{
     width:'100%',
     height:'100%',
     position:'absolute'
  }
});

export default SplashScreen;
