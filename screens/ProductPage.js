import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Divider} from 'react-native-elements';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';

const ProductPage = ({route}) => {
     const [quantity, setquantity] = useState(1);
     const [addonquantity, setaddonquantity] = useState(0);
     const data = route.params.item;
     const totalPrice = (quantity*parseInt( data.foodPrice)) + (addonquantity * data.foodAddonPrice);
      
  const addToCart = () => {
     if(auth().currentUser == null){
          Alert.alert('no user loggedIn', 'Please loggedIn or Signup');
          return;
     }
    const uid = auth().currentUser.uid;
    
    const data1 = { data, Addonquantity: addonquantity, Foodquantity: quantity,TotalPrice:totalPrice }

    const ref = firestore().collection('UserCart').doc(uid);
    ref.get().then(data => {
      if (data.exists) {
        ref.update({cart: firestore.FieldValue.arrayUnion(data1)});
      } else {
          ref.set({cart:[data1]})
      }
      Alert.alert('success','added to cart')
    });
  };
  return (
    <>
      <StatusBar translucent backgroundColor="transparent"></StatusBar>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
          <Image
            source={{uri: data.foodImageUrl}}
            style={{width: '100%', height: 300}}
          />
          <View style={styles.textContainer}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{color: 'red', fontSize: 30, fontWeight: 'bold'}}>
                {data.foodName}
              </Text>
              <Text style={{color: 'black', fontSize: 30, fontWeight: 'bold'}}>
                ₹{data.foodPrice}/-
              </Text>
            </View>
            <View
              style={{
                backgroundColor: 'red',
                borderRadius: 15,
                marginTop: 20,
                padding: 10,
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
                About Food
              </Text>
              <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>
                {data.foodDescription}
              </Text>
              <View style={{alignItems: 'flex-end'}}>
                <View
                  style={{
                    width: 100,
                    height: 50,
                    borderRadius: 10,
                    backgroundColor: 'white',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    marginTop: 15,
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      borderRadius: 50,
                      backgroundColor:
                        data.foodType === 'veg' ? 'green' : 'red',
                      height: 20,
                      width: 20,
                    }}></Text>
                  <Text
                    style={{fontWeight: 'bold', color: 'black', fontSize: 15}}>
                    {data.foodType}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                backgroundColor: 'white',
                elevation: 4,
                justifyContent: 'center',
                alignItems: 'center',
                height: 200,
                marginTop: 20,
                borderRadius: 15,
              }}>
              <Text style={{color: 'red', fontSize: 20, fontWeight: 'bold'}}>
                Location
              </Text>
              <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
                {data.restaurantName}
              </Text>
              <Text
                style={{
                  color: 'red',
                  fontSize: 20,
                }}>{`${data.restrauntAddressBuilding} | ${data.restrauntAddressStreet} | ${data.restrauntAddressCity}`}</Text>
            </View>
            <Divider style={{height: 20}} />
            {   data.foodAddon !='' &&  <View
              style={{
                backgroundColor: 'white',
                elevation: 4,
                alignItems: 'center',
                height: 200,
                marginTop: 20,
                borderRadius: 15,
                padding: 10,
                justifyContent: 'center',
              }}>
              <Text style={{color: 'red', fontSize: 20, fontWeight: 'bold'}}>
                Add Extra
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 20,
                }}>{`Extra ${data.foodAddon}  ₹${data.foodAddonPrice}/-`}</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <TouchableOpacity
                  style={{
                    height: 60,
                    width: 30,
                    backgroundColor: 'red',
                    borderRadius: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: 10,
                  }}
                  onPress={() => {
                    setaddonquantity(prev => prev + 1);
                  }}>
                  <Text
                    style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
                    +
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    width: 70,
                    height: 50,
                    backgroundColor: 'white',
                    elevation: 4,
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: 10,
                  }}>
                  <Text
                    style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
                    {addonquantity}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    if (addonquantity == 0) {
                      return;
                    }
                    setaddonquantity(prev => prev - 1);
                  }}
                  style={{
                    height: 60,
                    width: 30,
                    backgroundColor: 'red',
                    borderRadius: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
                    -
                  </Text>
                </TouchableOpacity>
              </View>
            </View>}
            <View
              style={{
                backgroundColor: 'white',
                elevation: 4,
                alignItems: 'center',
                height: 200,
                marginTop: 20,
                borderRadius: 15,
                padding: 10,
                justifyContent: 'center',
              }}>
              <Text style={{color: 'red', fontSize: 20, fontWeight: 'bold'}}>
                Food Quantity
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <TouchableOpacity
                  style={{
                    height: 60,
                    width: 30,
                    backgroundColor: 'red',
                    borderRadius: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: 10,
                  }}
                  onPress={() => {
                    setquantity(prev => prev + 1);
                  }}>
                  <Text
                    style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
                    +
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    width: 70,
                    height: 50,
                    backgroundColor: 'white',
                    elevation: 4,
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: 10,
                  }}>
                  <Text
                    style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
                    {quantity}
                  </Text>
                </View>
                <TouchableOpacity
                  style={{
                    height: 60,
                    width: 30,
                    backgroundColor: 'red',
                    borderRadius: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    if (quantity == 1) {
                      return;
                    }
                    setquantity(prev => prev - 1);
                  }}>
                  <Text
                    style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
                    -
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <Divider style={{height: 20}} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 30,
              }}>
              <Text style={{fontSize: 20, color: 'black'}}>Total Price</Text>
              <Text style={{color: 'red', fontSize: 20}}>₹{totalPrice}/-</Text>
            </View>
            <Divider style={{height: 10}} />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                height: 100,
              }}>
              <TouchableOpacity
                style={{
                  width: '40%',
                  height: 50,
                  backgroundColor: 'red',
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={addToCart}>
                <Text
                  style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
                  Add to Cart
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: '40%',
                  height: 50,
                  backgroundColor: 'red',
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
                  Buy now
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default ProductPage;

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: 'white',
    position: 'relative',
    width: '100%',
    top: -15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 10,
  },
});
