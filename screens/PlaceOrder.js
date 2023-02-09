import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { Divider } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import Loder from './LogInSignupScreens/Loder';
import { Alert } from 'react-native';
const PlaceOrder = ({route}) => {
     const[loding,setLoding] = useState(false);
  const {orderData} = route.params;
 
   const totalPrice =  useMemo(()=>{
    return  orderData.reduce((accumulate, item) => {
        return accumulate + item.TotalPrice;
     
      }, 0)
     },[orderData])
 
  console.log(orderData)
  const[userDetails,setUserDetails] = useState(null);
  useEffect(() => {
    const ref = firestore().collection('Users').doc(auth().currentUser.uid);
    ref.onSnapshot(data => {
      setUserDetails(data.data())
    });
  }, []);
  const proceedToPayment = ()=>{
     setLoding(true)
     const docRef =  firestore().collection('UserOrders').doc(new Date().getTime().toString());
     docRef.set({
            orderid: docRef.id,
            orderdata: orderData,
            orderstatus: 'pending',
            ordercost: totalPrice,
            orderdate: firestore.FieldValue.serverTimestamp(),
            orderaddress: userDetails.address,
            orderphone: userDetails.phone,
            ordername: userDetails.fullname,
            orderuseruid: auth().currentUser.uid,
            orderpayment: 'online',
            paymenttotal: totalPrice
        }).then(()=>{
          setLoding(false);
          Alert.alert('Success','Payment SuccessFull')

        }).catch(()=>{
          Alert.alert('Failed','Payment Failed')

        })
  }
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      {loding && <Loder opacity='rgba(0,0,0,0.5)'/>}
      <SafeAreaView style={{flex:1}}>
        <Text
          style={{
            alignSelf: 'center',
            marginTop: 50,
            fontSize: 20,
            fontWeight: 'bold',
            color: 'red',
          }}>
          Your Order Summary
        </Text>
        <ScrollView
          style={{marginTop: 20, flex: 1,marginBottom:65}}
          showsVerticalScrollIndicator={false}>
          {orderData.map((item,index) => {
            return (
              <View key={index}
                style={{
                  width: '90%',
                  alignSelf: 'center',
                  borderRadius: 10,
                  backgroundColor: 'white',
                  elevation: 4,
                  height: 100,
                  marginVertical: 5,
                  paddingHorizontal: 5,
                  paddingVertical: 8,
                  justifyContent: 'space-around',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 20,
                  }}>
                  <View
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 7,
                      backgroundColor: 'red',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>
                      {item.Foodquantity}
                    </Text>
                  </View>
                  <Text style={{color: 'black', fontWeight: 'bold'}}>
                    {item.data.foodName}
                  </Text>
                  <Text style={{color: 'red', fontWeight: 'bold'}}>
                    {item.data.foodPrice}₹
                  </Text>
                  <View
                    style={{
                      width: 60,
                      height: 40,
                      borderRadius: 8,
                      borderWidth: 2,
                      borderColor: 'red',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: 'black', fontWeight: 'bold'}}>
                      ₹{item.Foodquantity * item.data.foodPrice}
                    </Text>
                  </View>
                </View>
                {item.Addonquantity != 0 && (
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingHorizontal: 20,
                    }}>
                    <View
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: 7,
                        backgroundColor: 'red',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text style={{color: 'white', fontWeight: 'bold'}}>
                        {item.Foodquantity}
                      </Text>
                    </View>
                    <Text style={{color: 'black', fontWeight: 'bold'}}>
                      {item.data.foodAddon}
                    </Text>
                    <Text style={{color: 'red', fontWeight: 'bold'}}>
                      {item.data.foodAddonPrice}₹
                    </Text>
                    <View
                      style={{
                        width: 60,
                        height: 40,
                        borderRadius: 8,
                        borderWidth: 2,
                        borderColor: 'red',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text style={{color: 'black', fontWeight: 'bold'}}>
                        ₹{item.Addonquantity * item.data.foodAddonPrice}
                      </Text>
                    </View>
                  </View>
                )}
              </View>
            );
          })}
          <Divider style={{height:1,marginTop:30}} />
          <View
            style={{
              justifyContent: 'center',
              flexDirection: 'row',
              marginVertical:20,
            }}>
            <Text style={{fontSize: 30, fontWeight: 'bold', color: 'black'}}>
              Order Total: ₹
              {totalPrice}
              /-
            </Text>
          
          </View>
            <Divider style={{height:1,marginTop:1}} />
            { userDetails !=null && <View style={{width:'100%'}}>
             <Text style={{alignSelf:'center',color:'red',fontSize:20,marginTop:20}}>Your Details</Text>
               <View style={{justifyContent:'space-between',flexDirection:"row",width:'80%',marginTop:20,alignSelf:"center"}}>
               <Text style={{fontWeight:'bold',color:"black"}}>Name:</Text>
               <Text style={{fontWeight:'bold',color:"black"}}>{userDetails.fullname}</Text>

            </View>
               <View style={{justifyContent:'space-between',flexDirection:"row",width:'80%',marginTop:10,alignSelf:"center"}}>
               <Text style={{fontWeight:'bold',color:"black"}}>Email:</Text>
               <Text style={{fontWeight:'bold',color:"black"}}>{userDetails.email}</Text>

            </View>
               <View style={{justifyContent:'space-between',flexDirection:"row",width:'80%',marginTop:10,alignSelf:"center"}}>
               <Text style={{fontWeight:'bold',color:"black"}}>Phone:</Text>
               <Text style={{fontWeight:'bold',color:"black"}}>{userDetails.phone}</Text>

            </View>
               <View style={{justifyContent:'space-between',flexDirection:"row",width:'80%',marginTop:10,alignSelf:"center",marginBottom:10}}>
               <Text style={{fontWeight:'bold',color:"black"}}>Address:</Text>
               <Text style={{fontWeight:'bold',color:"black"}}>{userDetails.address}</Text>

            </View>
            </View> }
            
        </ScrollView>
        <View style={{width:'100%',backgroundColor:'white',elevation:4,position:'absolute',bottom:0,paddingVertical:7}}>
        <TouchableOpacity onPress={proceedToPayment} style={{alignSelf:'center',width:'40%',backgroundColor:'red',borderRadius:10,height:50,justifyContent:'center',alignItems:'center'}}>
          <Text style={{color:'white',fontWeight:'bold',fontSize:15}}>Proceed to payment</Text>
        </TouchableOpacity>

        </View>
      </SafeAreaView>
    </>
  );
};

export default PlaceOrder;

const styles = StyleSheet.create({});
