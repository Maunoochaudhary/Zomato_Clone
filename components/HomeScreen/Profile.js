import React, {useEffect, useState} from 'react';
import {View, StyleSheet, StatusBar, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {TouchableOpacity} from 'react-native';
import Loder from '../../screens/LogInSignupScreens/Loder';
const Profile = ({navigation}) => {
  const [userData, setUserData] = useState(null);
  const [loding, setLoding] = useState(true);

  useEffect(() => {
    const subscribe = auth().onAuthStateChanged(user => {
      if (user) {
          firestore().collection('Users').doc(user.uid).get().then((data)=>{
               if(data.data()){
                   setUserData(data.data())
                   setLoding(false);
               } 
          })
     }
     else{
          setLoding(false)
     }
      

      return () => subscribe();
    }, []);
  });

  const getuserdata = async () => {
     // const docRef = firestore().collection('UserData').doc(userloggeduid)
     // const doc = await docRef.get();
     // if(doc.data()){
     //      setLoding(false)

     //      console.log('data',doc.data())
     //         setUserData(doc.data());
     // }
 }

 

  const logoutHandler = () => {
    auth()
      .signOut()
      .then(() => {
        navigation.replace('welcome');
      });
  };
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor='white'
      />
        <SafeAreaView>
         <View style={{height:55,backgroundColor:'white',elevation:20,justifyContent:'center',alignItems:'center'}}>
         <Text style={{color:'red',fontWeight:'bold',fontSize:20}}>User Profile</Text>

         </View>
      {loding ? (
        <Loder  />
      ) : userData !== null ? (
        <View style={{height:'100%', justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{width: '90%', alignSelf: 'center', alignItems: 'center'}}>
            <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
              Name:{ userData.fullname }
            </Text>
            <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
              Email:{ userData.email }
            </Text>
            <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
              Phone:{ userData.phone }
            </Text>
            <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
              Address:{ userData.address }
            </Text>
            <TouchableOpacity
              style={{
                width: '90%',
                alignSelf: 'center',
                height: 55,
                margin: 20,
                backgroundColor: 'black',
                borderRadius: 1,
                elevation: 5,
                borderWidth: 1,
                borderRadius: 10,
                borderColor: 'gray',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={logoutHandler}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={{height:'100%', justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{width: '90%', alignSelf: 'center', alignItems: 'center'}}>
            <Text style={{color: 'black', fontSize: 25, fontWeight: 'bold'}}>
              No user logged in
            </Text>
            <TouchableOpacity
              style={{
                width: '90%',
                alignSelf: 'center',
                height: 55,
                margin: 20,
                backgroundColor: 'black',
                borderRadius: 1,
                elevation: 5,
                borderWidth: 1,
                borderRadius: 10,
                borderColor: 'gray',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                navigation.replace('login');
              }}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default Profile;
