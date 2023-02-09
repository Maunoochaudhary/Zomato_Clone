import React, {useState} from 'react';
import {useEffect} from 'react';
import { FlatList, StatusBar } from 'react-native';
import {View, StyleSheet, Text, TextInput,Button,ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Categories from '../components/HomeScreen/Categories';
import HomeHeadNav from '../components/HomeScreen/HomeHeadNav';
import OfferSlider from '../components/HomeScreen/OfferSlider';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors, veg, nonveg} from '../global/style';
import firestore from '@react-native-firebase/firestore';
import Icons from 'react-native-vector-icons/AntDesign'
import Cardslider from '../components/HomeScreen/CartSlider';
import Loder from './LogInSignupScreens/Loder';
import BottomNav from './BottomNav';
const HomeScreen = () => {
  const[loding ,setLoding] = useState(true);
  const [foodData, setFoodData] = useState([]);
  const [VegData, setVegData] = useState([]);
    const [NonVegData, setNonVegData] = useState([]);
    const [search, setSearch] = useState('')
  useEffect(() => {
      const subscriber = firestore()
      .collection('FoodData')
      .onSnapshot(Snapshot => {
        setFoodData(Snapshot.docs.map(doc =>doc.data()))
          });
        
        return () => subscriber();
    }, []);
    useEffect(() => {
        setVegData(foodData.filter((item) => item.foodType === 'veg'))
        setNonVegData(foodData.filter((item) => item.foodType === 'non-veg'))
        setLoding(false)
    }, [foodData])
    const handleOnClick = ()=>{
        console.log(foodData.length);
    }
  return (
    <>
    <StatusBar backgroundColor='white' barStyle='dark-content'/>
    <SafeAreaView style={{flex:1}}>

      <HomeHeadNav />
      <BottomNav/>
      {loding ? <Loder /> :<ScrollView style={{marginBottom:50}}>
      <View style={styles.searchbox}>
        <Icon
          name="search-outline"
          size={24}
          color="black"
          style={styles.searchicon}
        />
        <TextInput style={styles.input} placeholder="Search" onChangeText={(e) => {setSearch(e)}} />
      </View>
      {search != '' && <View style={styles.seacrhresultsouter}>
                    <FlatList style={styles.searchresultsinner} data={foodData} renderItem={
                        ({ item }) => {
                            if (item.foodName.toLowerCase().includes(search.toLowerCase())) {
                                return (
                                    <View style={styles.searchresult}>
                                        <Icons name="arrowright" size={24} color="black" />
                                        <Text style={styles.searchresulttext}>{item.foodName}</Text>
                                    </View>
                                )
                            }
                        }
                    } />
                </View>}
      <Categories />
      <OfferSlider />
      <Cardslider title={"Today's Special"} data={foodData}  />
                <Cardslider title={"Non-Veg"} data={NonVegData} />
                <Cardslider title={"Veg"} data={VegData}  />
                </ScrollView> }
           
      
    </SafeAreaView>
    </>
  );
};

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
    // height: '100%',
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
  },
});

export default HomeScreen;
