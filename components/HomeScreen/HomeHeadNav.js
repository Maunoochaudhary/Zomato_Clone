import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../../global/style';
import Fontisto from 'react-native-vector-icons/Fontisto'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const HomeHeadNav = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Fontisto name="nav-icon-list-a" size={20} color="black" style={styles.myicon} />
            <View style={styles.containerin}>
                <Text style={styles.mytext}>Foodie</Text>
                <Icon name="fast-food-outline" size={26} color="black" style={styles.myicon} />
            </View>
            <TouchableOpacity onPress={() => {
                 navigation.navigate('profile') }}>
                <Icon name="person-circle-outline" size={26} color="black" style={styles.myicon} />
            </TouchableOpacity>
        </View>
    )
}

export default HomeHeadNav

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding:10,
        alignItems: 'center',
        backgroundColor: colors.col1,
        elevation: 20,
        // borderBottomLeftRadius: 20,
        // borderBottomRightRadius: 20,
    },
    containerin: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    myicon: {
        color: colors.text1,
    },
    mytext: {
        color: colors.text1,
        fontSize: 24,
    },
})