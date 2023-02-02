import { StyleSheet, Text, View,StatusBar,Button } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
SafeAreaView
const LogInScreen = ({navigation}) => {
  return (
    <>
    <StatusBar  barStyle='dark-content'></StatusBar>
    <SafeAreaView style={styles.container}>
      <Text>login</Text>
      <Button title="add" onPress={()=>{navigation.navigate('signup')}}/>
    </SafeAreaView>
    </>
  );
};

export default LogInScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'yellow'
    }
});

