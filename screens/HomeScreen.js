import React from 'react';
import {View, StyleSheet,Text,TextInput} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Categories from '../components/HomeScreen/Categories';
import HomeHeadNav from '../components/HomeScreen/HomeHeadNav';
import OfferSlider from '../components/HomeScreen/OfferSlider';
import Icon from 'react-native-vector-icons/Ionicons'
import { colors, veg, nonveg } from '../global/style'

const HomeScreen = () => {
     return (
          <SafeAreaView>
             <HomeHeadNav/>
             <View style={styles.searchbox}>
                    <Icon name="search-outline" size={24} color="black" style={
                        styles.searchicon
                    } />
                    <TextInput style={styles.input} placeholder="Search"  />

                </View>
             <Categories/>
             <OfferSlider/>
          </SafeAreaView>
     );
}

const styles = StyleSheet.create({
     container: {
          // marginTop: 50,
          flex: 1,
          backgroundColor: colors.col1,
          // alignItems: 'center',
          width: '100%',
          height: '100%',
      },
      searchbox: {
          flexDirection: 'row',
          width: '90%',
          backgroundColor: colors.col1,
          borderRadius: 30,
          alignItems: 'center',
          padding: 10,
          margin: 20,
          elevation: 10,
      },
      input: {
          marginLeft: 10,
          width: '90%',
          fontSize: 18,
          color: colors.text1,
      },
      searchicon: {
          color: colors.text1,
      },
      seacrhresultsouter: {
          width: '100%',
          marginHorizontal: 30,
          height: '100%',
          backgroundColor: colors.col1,
      },
      searchresultsinner: {
          width: '100%',
      },
      searchresult: {
          width: '100%',
          flexDirection: 'row',
          // alignItems: 'center',
          padding: 5,
      },
      searchresulttext: {
          marginLeft: 10,
          fontSize: 18,
          color: colors.text1,
      },
      bottomnav: {
          position: 'absolute',
          bottom: 0,
          width: '100%',
          backgroundColor: colors.col1,
          zIndex: 20,
      }
  })


export default HomeScreen;