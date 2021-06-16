import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
// import { TextInput } from 'react-native-paper'
import { wp, hp, Logoblue } from '../helper/helper'

export default function Input({ placeholder, label, styleinput, secureTextEntry, value, onChange }) {
    return (
        <View style={{  marginTop: 10,borderBottomColor:Logoblue,borderWidth:1 }}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                value={value}
                onChange={onChange}
                underlineColor={Logoblue}
                style={[styles.txtinput, styleinput]}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    txtinput: {
        fontSize: hp('2%'),
        // backgroundColor: 'black',
        // margin: wp('2%'),
        // borderTopLeftRadius: 10,
        // borderBottomLeftRadius: 10,
        width: wp('75%'),
        // marginLeft: wp('2%')
    },
    label: {
        color: 'white',
    }
})