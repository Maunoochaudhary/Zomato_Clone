import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Loder from '../../screens/LogInSignupScreens/Loder';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Cart = () => {
  const navigation = useNavigation();
  const [loding, setLoding] = useState(true);
  const [checklogIn, setCheckLogIN] = useState(false);
  const [cartData, setCartData] = useState(null);
  const [totalPrice, setTotalPrice] = useState();
  const getData = async () => {
    if (auth().currentUser == null) {
      setCheckLogIN(true);
      setLoding(false);
      // console.log('hello');
      return;
    }
    const uid = auth().currentUser.uid;

    const ref = firestore().collection('UserCart').doc(uid);
    ref.onSnapshot(data => {
      setCartData(data.data().cart);
      const price = data.data().cart.reduce((accumulate, item) => {
        return accumulate + item.TotalPrice;
      }, 0);
      setTotalPrice(price);

      setLoding(false);
    });
  };
  useEffect(() => {
    getData();
  }, []);
  const deleteItem = item => {
    const ref = firestore().collection('UserCart').doc(auth().currentUser.uid);
    ref.update({cart: firestore.FieldValue.arrayRemove(item)});
  };

  return (
    <>
      {/* <StatusBar  backgroundColor=''/> */}
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            alignItems: 'center',
            backgroundColor: 'white',
            elevation: 20,
            height: 50,
            justifyContent: 'center',
          }}>
          <Text style={{color: 'red', fontSize: 20, fontWeight: 'bold'}}>
            Your Cart
          </Text>
        </View>

        {loding ? (
          <Loder />
        ) : checklogIn == true ? (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
              No User Logged In
            </Text>
          </View>
        ) : cartData == null || cartData.length == 0 ? (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
              your cart is empty
            </Text>
          </View>
        ) : (
          <View style={{flex: 1}}>
            {cartData != null && (
              <View
                style={{
                  position: 'absolute',
                  flexDirection: 'row',
                  bottom: 0,
                  justifyContent: 'center',
                  width: '100%',
                  height: 80,
                  alignItems: 'center',
                  zIndex: 10,
                  backgroundColor: 'white',
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: 'black',
                    width: '40%',
                    textAlign: 'center',
                  }}>{`Total ₹${totalPrice}`}</Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('place',{orderData:cartData});
                  }}
                  style={{
                    width: '40%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'red',
                    borderRadius: 10,
                    padding: 7,
                  }}>
                  <Text
                    style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
                    Place Order
                  </Text>
                </TouchableOpacity>
              </View>
            )}

            <FlatList
              style={{marginBottom: 80}}
              showsVerticalScrollIndicator={false}
              data={cartData}
              renderItem={({item}) => {
                return (
                  <View
                    style={{
                      width: '95%',
                      alignSelf: 'center',
                      height: 160,
                      backgroundColor: 'white',
                      elevation: 4,
                      borderRadius: 10,
                      marginVertical: 5,
                      flexDirection: 'row',
                    }}>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '40%',
                        height: '100%',
                      }}>
                      <Image
                        source={{uri: item.data.foodImageUrl}}
                        style={{
                          width: '100%',
                          height: 100,
                          borderRadius: 20,
                          resizeMode: 'contain',
                        }}
                      />
                    </View>
                    <View
                      style={{
                        width: '60%',
                        padding: 5,
                        height: '100%',
                        justifyContent: 'space-around',
                      }}>
                      <View
                        style={{
                          width: '100%',
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <Text
                          style={{
                            color: 'red',
                            fontWeight: 'bold',
                            fontSize: 17,
                          }}>{`${item.Foodquantity} ${item.data.foodName}`}</Text>
                        <Text
                          style={{
                            color: 'black',
                            fontSize: 17,
                            fontWeight: 'bold',
                          }}>{`₹${item.data.foodPrice}/each`}</Text>
                      </View>
                      {item.Addonquantity !== 0 && (
                        <View
                          style={{
                            width: '100%',
                            backgroundColor: 'red',
                            borderRadius: 10,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            padding: 7,
                          }}>
                          <Text
                            style={{
                              color: 'white',
                              fontSize: 17,
                              fontWeight: 'bold',
                            }}>{`${item.Addonquantity} ${item.data.foodAddon}`}</Text>
                          <Text
                            style={{
                              color: 'white',
                              fontSize: 17,
                              fontWeight: 'bold',
                            }}>{`₹${item.data.foodAddonPrice}/each`}</Text>
                        </View>
                      )}

                      <TouchableOpacity
                        style={{
                          width: '50%',
                          borderColor: 'red',
                          borderRadius: 10,
                          borderWidth: 2,
                          padding: 5,
                          alignSelf: 'center',
                          flexDirection: 'row',
                          justifyContent: 'space-around',
                        }}
                        onPress={deleteItem.bind(this, item)}>
                        <Text
                          style={{
                            color: 'red',
                            fontSize: 17,
                            fontWeight: 'bold',
                          }}>
                          Delete
                        </Text>
                        <Icon name="trash-outline" size={25} color="red" />
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              }}
            />
          </View>
        )}
      </SafeAreaView>
    </>
  );
};

export default Cart;

const styles = StyleSheet.create({});
