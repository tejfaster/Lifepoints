import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { wp, hp, Logo, Logoblue } from '../helper/helper'


export default function ScreenLayout(props) {
    return (
        <View style={styles.container}>
            <View style={styles.subcontainer}>
                <Image source={Logo} style={styles.logo} />
            </View>
            <View style={{ flex: 1,alignItems:'center',paddingRight:wp('8%')}}>
                {
                    props.children
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "center",
        paddingLeft: wp('10%'),
        backgroundColor: 'black'
    },
    subcontainer: {
        borderWidth: 1,
        borderColor: Logoblue,
        width: wp('45.5%'),
        height: hp('22%'),
        borderRadius: 180,
        justifyContent: 'center',
        margin: wp('10%'),
        marginLeft: wp('19%'),
    },
    logo: {
        width: wp('33%'),
        height: hp('12%'),
        alignSelf: 'center'
    }
})

