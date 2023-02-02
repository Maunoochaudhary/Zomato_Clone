
import { StyleSheet, Text, View,Button } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Loder from "./Loder";
const WelcomeScreen = ({navigation}) => {
  const [loding,setLoding] = useState(false);
  const handleOnPress = ()=>{
    console.log('h');
    setLoding(true)
    setTimeout(()=>{
      setLoding(false)
      //  navigation .navigate('login')
    },500)
  }
  return (
    <>
    <StatusBar translucent barStyle='light-content' backgroundColor='transparent'/>
    {loding ?<Loder/>: <SafeAreaView style={styles.container}>
      <Text>WelcomeScreen</Text>
      <Button title="add"  onPress={handleOnPress}/>
    </SafeAreaView>
}
    
    </>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'red',justifyContent:'center',
    alignItems:'center'
  }
});
