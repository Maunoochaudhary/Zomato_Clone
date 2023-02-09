import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import Icons from 'react-native-vector-icons/FontAwesome5'
import { TouchableOpacity } from 'react-native';
import Cart from '../components/HomeScreen/Cart';
import Track from '../components/bottomNavScreen/Track';
import { useNavigation } from '@react-navigation/native';
const BottomNav = () => {
     const navigation = useNavigation();

     return (
          <View style={styles.container}>
          <TouchableOpacity>
          <Icon name='home-outline' color='red' size={30}></Icon>

          </TouchableOpacity>
          <TouchableOpacity>
          <Icon name='search-outline'color='red' size={30}></Icon>

          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{navigation.navigate('cart')}}>
          <Icon name='cart-outline'color='red' size={30}></Icon>

          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{navigation.navigate('track')}}>
          <Icons name='map-marked-alt'color='red' size={30}></Icons>

          </TouchableOpacity>
               
          </View>
     );
}

const styles = StyleSheet.create({
     container:{
          flexDirection:'row',
          justifyContent:'space-between',
          backgroundColor:'white',
          elevation:20,
          height:55,
          width:'100%',
          alignItems:'center',
          paddingHorizontal:10,
          position:'absolute',
          bottom:0,
          // top:70
          zIndex:1
     }
})

export default BottomNav;
