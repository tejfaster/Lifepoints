import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { wp, hp } from '../helper/helper'
import LinearGradient from 'react-native-linear-gradient'

export default function Button({ buttonText,onPress, stylebutton, styletxt }) {
    return (
        <View >
            <LinearGradient  style={[styles.button, stylebutton]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#5098F2', '#0F68D7']}>
                <TouchableOpacity 
                    onPress={onPress}
                   >
                    <Text style={[styles.txtstyle, styletxt]}>{buttonText}</Text>

                </TouchableOpacity>
            </LinearGradient>
        </View >
    )
}
const styles = StyleSheet.create({
    button: {
        height: hp('6%'),
        width: wp('80%'),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        // backgroundColor: 'white'
    },
    txtstyle: {
        // fontWeight: 'bold',
        fontFamily: 'Arial',
        color: 'white',
    }
})