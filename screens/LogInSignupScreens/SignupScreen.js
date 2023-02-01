
import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { titles, colors, btn1, hr80 } from '../../global/style'
import Icon from 'react-native-vector-icons/Ionicons'



const SignupScreen = ({ navigation }) => {
    const [emailfocus, setEmailfocus] = useState(false);
    const [passwordfocus, setPasswordfocus] = useState(false);
    const [phonefocus, setPhonefocus] = useState(false);
    const [namefocus, setNamefocus] = useState(false);

    const [showpassword, setShowpassword] = useState(false);
    const [showcpassword, setShowcpassword] = useState(false);
    const [cpasswordfocus, setcPasswordfocus] = useState(false);

    //taking form data
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setcPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    // console.log(email);

   


    // const [useruid, setUseruid] = useState('');
    
    return (
        <View style={styles.container}>
          
                <View style={styles.container}>
                    <Text style={styles.head1}>Sign Up</Text>
                  
                    <View style={styles.inputout}>
                        <Icon name="person-outline" size={24} color={namefocus === true ? colors.text1 : colors.text2} />
                        <TextInput style={styles.input} placeholder="Full Name" onFocus={() => {
                            setEmailfocus(false)
                            setPasswordfocus(false)
                            setShowpassword(false)
                            setNamefocus(true)
                            setPhonefocus(false)
                           
                        }}
                            onChangeText={(text) => setName(text)}
                        />
                    </View>


                    <View style={styles.inputout}>
                        <Icon name="mail-outline" size={24} color={emailfocus === true ? colors.text1 : colors.text2} />
                        <TextInput style={styles.input} placeholder="Email" onFocus={() => {
                            setEmailfocus(true)
                            setPasswordfocus(false)
                            setShowpassword(false)
                            setNamefocus(false)
                            setPhonefocus(false)
                           
                        }}
                            onChangeText={(text) => setEmail(text)}
                        />
                    </View>
                    {/*  */}

                    <View style={styles.inputout}>
                        <Icon name="call-outline" size={24} color={phonefocus === true ? colors.text1 : colors.text2} />
                        <TextInput style={styles.input} placeholder="Phone Number" onFocus={() => {
                            setEmailfocus(false)
                            setPasswordfocus(false)
                            setShowpassword(false)
                            setNamefocus(false)
                            setPhonefocus(true)
                            
                        }}
                            onChangeText={(text) => setPhone(text)}
                        />
                    </View>



                    {/* password start */}
                    <View style={styles.inputout}>
                        <Icon name="lock-closed-outline" size={24} color={passwordfocus == true ? colors.text1 : colors.text2} />
                        <TextInput style={styles.input} placeholder="Password" onFocus={() => {
                            setEmailfocus(false)
                            setPasswordfocus(true)
                            setShowpassword(false)
                            setNamefocus(false)
                            setPhonefocus(false)
                           
                        }}
                            onChangeText={(text) => setPassword(text)}
                            secureTextEntry={showpassword === false ? true : false}
                        />

                        <Icon name={showpassword == false ? "eye-off-outline" : "eye-outline"} size={24} color="black" onPress={() => setShowpassword(!showpassword)} />
                    </View>
                    {/*  */}
                    <View style={styles.inputout}>
                        <Icon name="lock-closed-outline" size={24} color={cpasswordfocus == true ? colors.text1 : colors.text2} />
                        <TextInput style={styles.input} placeholder="Confirm Password" onFocus={() => {
                            setEmailfocus(false)
                            setPasswordfocus(false)
                            setShowpassword(true)
                            setNamefocus(false)
                            setPhonefocus(false)
                           

                        }}
                            onChangeText={(text) => setcPassword(text)}
                            secureTextEntry={showcpassword === false ? true : false}
                        />

                        <Icon name={showcpassword == false ? "eye-off-outline" : "eye-outline"} size={24} color="black" onPress={() => setShowcpassword(!showcpassword)} />
                    </View>
                    {/* password end */}

                   
                    <View style={styles.inputout} >
                        <TextInput style={styles.input1} placeholder="Enter your Address" onChangeText={(text) => setAddress(text)}
                            onPress={() => {
                                setEmailfocus(false)
                                setPasswordfocus(false)
                                setShowpassword(false)
                                setNamefocus(false)
                                setPhonefocus(false)
                               
                            }}
                        />
                    </View>



                    <TouchableOpacity style={btn1}>
                        <Text style={{ color: colors.col1, fontSize: titles.btntxt, fontWeight: "bold" }}>Sign up</Text>
                    </TouchableOpacity>


                    {/* <Text style={styles.forgot}>Forgot Password?</Text> */}
                    <Text style={styles.or}>OR</Text>
                    <Text style={styles.gftxt}>Sign In With </Text>


                    <View style={styles.gf}>
                        <TouchableOpacity>
                            <View style={styles.gficon}>
                                <Icon name="logo-google" size={24} color="#EA4335" />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.gficon}>
                                <Icon name="logo-facebook" size={24} color="#4267B2" /></View>
                        </TouchableOpacity>
                    </View>
                    <View style={hr80}></View>
                    <Text >Already have an account?
                        <Text style={styles.signup} onPress={() => navigation.navigate('login')}> Sign In</Text>
                    </Text>
                </View>
                
               
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        // justifyContent: 'center',
        // marginTop: 60,
    },
    container1: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 60,
    },
    head1: {
        fontSize: titles.title1,
        color: colors.text1,
        textAlign: 'center',
        marginVertical: 10,
    },
    inputout: {
        flexDirection: 'row',
        width: '80%',
        marginVertical: 10,
        backgroundColor: colors.col1,
        borderRadius: 10,
        paddingHorizontal: 10,
     //    paddingVertical: 10,
        // alignSelf: 'center',
        elevation: 20,
    },
    input: {
        fontSize: 18,
        marginLeft: 10,
        width: '80%',
    },
    forgot: {
        color: colors.text2,
        marginTop: 20,
        marginBottom: 10,
    },
    or: {
        color: colors.text1,
        marginVertical: 10,
        fontWeight: 'bold',
    },
    gftxt: {
        color: colors.text2,
        marginBottom: 10,
        fontSize: 25,
    },
    gf: {
        flexDirection: 'row'
    },
    gficon: {
        backgroundColor: 'white',
        width: 50,
        marginHorizontal: 10,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        elevation: 20,
    },
    signup: {
        color: colors.text1,
    },
    address: {
        fontSize: 18,
        color: colors.text2,
        textAlign: 'center',
        marginTop: 20,
    },
    errormsg: {
        color: 'red',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10,
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
    successmessage: {
        color: 'green',
        fontSize: 18,
        textAlign: 'center',
        margin: 10,
        borderColor: 'green',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    }
})

export default SignupScreen