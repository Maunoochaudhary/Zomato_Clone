import React from 'react';
import {View, StyleSheet,ActivityIndicator,Text,StatusBar} from 'react-native';

const Loder = () => {
     return (
          <>
    <StatusBar  barStyle='dark-content' />
               <View style={styles.container}>
          <View style={styles.loder}>
           <ActivityIndicator color='blue' size='large'/>
           {/* <Text style={{marginTop:10,textAlign:'center'}}>Loding...</Text> */}
          </View>
               
          </View>
          </>

     );
}

const styles = StyleSheet.create({
     container:{
          position:'absolute',
          backgroundColor:'rgba(0,0,0,0.5)', 
          // opacity:0.5,
          flex:1,
          justifyContent:'center',
          alignItems:'center',
          zIndex:10,
          height:'100%',
          width:'100%'
          
     },
     loder:{
          height:100,
          // flexDirection:'row',
          borderRadius:10,
          alignItems:'center',
          width:'90%',
          backgroundColor:'white',
          justifyContent:'center',
          elevation:3
     

     }
})

export default Loder;
