import { StyleSheet, Text, View,StatusBar,Button } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
const SignupScreen = ({navigation}) => {
  return (
    <>
    <StatusBar  barStyle='light-content' backgroundColor='red'></StatusBar>
    <SafeAreaView style={styles.container}>
      <Text>signup</Text>
      <Button title="add" onPress={()=>{navigation.navigate('signup')}}/>
    </SafeAreaView>
    </>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'green'
    }
});

