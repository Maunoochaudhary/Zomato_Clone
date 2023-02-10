import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { colors } from '../HomeScreen/global/style'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

const Categories = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.head}>Categories</Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.box}>
                    <Icon name="pizza-slice" size={24} color="black" style={styles.myicon} />
                    <Text style={styles.mytext}>Pizza</Text>
                </View>

                <View style={styles.box}>
                <Icon name="hamburger" size={24} color="black" style={styles.myicon} />
                    
                    <Text style={styles.mytext}>burger</Text>
                </View>

                <View style={styles.box}>
                    <Icons name="noodles" size={24} color="black" style={styles.myicon} />
                    <Text style={styles.mytext}>noodels</Text>
                </View>

                <View style={styles.box}>
                    <Icons name="cupcake" size={24} color="black" style={styles.myicon} />
                    <Text style={styles.mytext}>cupcake</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.col1,
        width: '90%',
        // height: 100,
        // alignItems: 'center',
        alignSelf:'center',
        elevation: 10,
        borderRadius: 10,
    },
    head: {
        color: colors.text1,
        fontSize: 25,
        fontWeight: '300',
        margin: 10,
        alignSelf: 'center',
        paddingBottom: 5,
        borderBottomColor: colors.text1,
        borderBottomWidth: 1,
    },
    box: {
        backgroundColor: colors.col1,
        elevation: 20,
        margin: 10,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    myicon: {
        marginRight: 10,
        color: colors.text3,
    },
    mytext: {
        color: colors.text3,
    }
})