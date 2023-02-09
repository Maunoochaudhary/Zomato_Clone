import React from 'react';
import {View, StyleSheet,ActivityIndicator,Text,StatusBar} from 'react-native';

const Loder = ({opacity}) => {
     return (
          <>
    <StatusBar  barStyle='dark-content' />
          
               <View style={[styles.container,{backgroundColor:opacity ? opacity :null,position:opacity ? 'absolute' :null,zIndex:opacity ? 10:null}]}>
          <View style={styles.loder}>
           <ActivityIndicator color='blue' size='large'/>
          </View>
               
          </View>
          </>

     );
}

const styles = StyleSheet.create({
     container:{
          justifyContent:'center',
          alignItems:'center',
          height:'100%',
          width:'100%',
          
          
     },
     loder:{
          height:100,
          alignItems:'center',
          justifyContent:'center',
     

     }
})

export default Loder;
