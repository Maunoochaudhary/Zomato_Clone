import {StyleSheet, Text, View, StatusBar, Button, Image, ScrollView,TextInput} from 'react-native';
import React, { useState } from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';
import Loder from './Loder';
import { Keyboard } from 'react-native';

const LogInScreen = ({navigation}) => {
  const[data,setData] = useState({email:'',password:''})
const[loding,setLoding] = useState(false);
  const logInHandler = ()=>{
    Keyboard.dismiss()
    setLoding(true)
    setTimeout(()=>{
       auth().signInWithEmailAndPassword(data.email,data.password).then((user)=>{
        
            setLoding(false);
        navigation.replace('home')

    
    }).catch((error)=>{
      console.log(error);
      setLoding(false);
      Alert.alert('error',error.message,[{text:'ok',style:'cancel'}])
   })
   
    },1000)
  }
  return (
    <>
      <StatusBar barStyle='dark-content' translucent backgroundColor='transparent'/>
      {loding && <Loder opacity='rgba(0,0,0,0.5)'/>}
      <SafeAreaView style={styles.container}>
              <Text style={{color:'red',fontWeight:'bold',fontSize:20,alignSelf:'center',marginTop:100}}>Login</Text>
         <View style={{width:'90%',alignSelf:'center',borderRadius:10,borderWidth:.5,margin:20,backgroundColor:'white',elevation:5}}>

         <TextInput placeholder='email' onChangeText={(text)=>{setData((prev)=>({...prev,email:text}))}}/>
         </View>
         <View style={{width:'90%',alignSelf:'center',borderRadius:10,borderWidth:.5,margin:20,backgroundColor:'white',elevation:5}}>
                
         <TextInput placeholder='password' onChangeText={(text)=>{setData((prev)=>({...prev,password:text}))}}/>
         </View>
         <TouchableOpacity style={{alignItems:'flex-end',marginBottom:20,alignSelf:'center',width:'90%'}} onPress={()=>{navigation.replace('signup')}}>
          <Text style={{color:'black'}}>Don't have an account</Text>
         </TouchableOpacity>
         <TouchableOpacity style={{backgroundColor:'black',width:'90%',alignSelf:'center',height:55,borderRadius:10,justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'gray',elevation:5}} onPress={logInHandler}>
          <Text style={{color:'white',fontWeight:'bold'}}>Login</Text>
         </TouchableOpacity>
         </SafeAreaView>

    </>
  );
};

export default LogInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  scroll:{
    height:'70%',
    backgroundColor:'white',

  },
  image:{
    width:'100%',
    height:'100%',
    position:'absolute'
    // resizeMode:'contain'

  }
});
