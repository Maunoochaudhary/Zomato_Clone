import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';
import Loder from './Loder';

const SignupScreen = ({navigation}) => {
  const [userData, setUserData] = useState([]);
  const [data, setData] = useState({
    email: '',
    fullname: '',
    password: '',
    phone: '',
    address: '',
    confirmPassword: '',
  });
  const [loding, setLoding] = useState(false);
  const signUpHandler = () => {
    Keyboard.dismiss();
    setLoding(true);
    setTimeout(
      () => {
        auth()
          .createUserWithEmailAndPassword(data.email, data.password)
          .then(userCredentials => {
            const userData = {
              fullname: data.fullname,
              email: data.email,
              password: data.password,
              phone: data.phone,
              address: data.address,

              userId: userCredentials.user.uid,
            };
            if(userCredentials.user.uid != null){
              firestore()
              .collection('Users')
              .doc(userCredentials.user.uid)
              .set(userData)
              .then(() => {
                setLoding(false);
                navigation.replace('home');
              });
            }
          })
          .catch((error) => {
            setLoding(false);
            Alert.alert('error', error.message, [
              {text: 'ok', style: 'cancel'},
            ]);
          });

            
            
      },

      1000,
    );
  };
  const updateData = () => {
    firestore()
      .collection('Users')
      .doc('rZplZWUgDMrlvxsXgsET')
      .update({
        fullname: 'sumit chaudhary',
        email: 'sumit@123',
      })
      .then(() => {
        console.log('User updated!');
      });
  };

 

  return (
    <>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"></StatusBar>
      {loding && <Loder opacity='rgba(0,0,0,0.5)'/>}
      <SafeAreaView style={styles.container}>
        <Text
          style={{
            color: 'red',
            fontWeight: 'bold',
            fontSize: 20,
            alignSelf: 'center',
            marginTop: 20,
          }}>
          Signup
        </Text>
        <View style={{height: '75%'}}>
          <ScrollView>
            <View
              style={{
                width: '90%',
                alignSelf: 'center',
                borderRadius: 10,
                backgroundColor: 'white',
                elevation: 5,
                borderWidth: 0.5,
                margin: 20,
              }}>
              <TextInput
                placeholder="fullname"
                onChangeText={text => {
                  setData(prev => ({...prev, fullname: text}));
                }}
              />
            </View>
            <View
              style={{
                width: '90%',
                alignSelf: 'center',
                borderRadius: 10,
                backgroundColor: 'white',
                elevation: 5,
                borderWidth: 0.5,
                margin: 20,
              }}>
              <TextInput
                placeholder="email"
                onChangeText={text => {
                  setData(prev => ({...prev, email: text}));
                }}
              />
            </View>
            <View
              style={{
                width: '90%',
                alignSelf: 'center',
                borderRadius: 10,
                backgroundColor: 'white',
                elevation: 5,
                borderWidth: 0.5,
                margin: 20,
              }}>
              <TextInput
                placeholder="phone"
                onChangeText={text => {
                  setData(prev => ({...prev, phone: text}));
                }}
              />
            </View>
             <View
              style={{
                width: '90%',
                alignSelf: 'center',
                borderRadius: 10,
                backgroundColor: 'white',
                elevation: 5,
                borderWidth: 0.5,
                margin: 20,
              }}>
              <TextInput
                placeholder="password"
                onChangeText={text => {
                  setData(prev => ({...prev, password: text}));
                }}
              />
            </View>
            <View
              style={{
                width: '90%',
                alignSelf: 'center',
                borderRadius: 10,
                backgroundColor: 'white',
                elevation: 5,
                borderWidth: 0.5,
                margin: 20,
              }}>
              <TextInput
                placeholder="confirm password"
                onChangeText={text => {
                  setData(prev => ({...prev, confirmPassword: text}));
                }}
              />
            </View>
            <View
              style={{
                width: '90%',
                alignSelf: 'center',
                borderRadius: 10,
                backgroundColor: 'white',
                elevation: 5,
                borderWidth: 0.5,
                margin: 20,
                height: 90,
              }}>
              <TextInput
                placeholder="Address"
                onChangeText={text => {
                  setData(prev => ({...prev, address: text}));
                }}
              />
            </View>

            <View
              style={{
                marginBottom: 20,
                alignSelf: 'center',
                width: '90%',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity onPress={updateData}>
                <Text style={{color: 'black'}}>Apdate data</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.replace('login');
                }}>
                <Text style={{color: 'black'}}>Already have an account</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        <View style={{marginTop: 5, marginBottom: 20, height: '22%'}}>
          <TouchableOpacity
            style={{
              backgroundColor: 'black',
              width: '90%',
              alignSelf: 'center',
              height: 55,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: 'gray',
            }}
            onPress={signUpHandler}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Signup</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent:'center',
    // alignItems:'center',
    // backgroundColor:'black'
  },
});
