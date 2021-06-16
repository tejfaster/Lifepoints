import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { hp, wp, Logoblue } from '../helper/helper'
import ScreenLayout from '../component/ScreenLayout'
import PressText from '../component/PressText'
import Button from '../component/Button'

export default function Verification({ navigation }) {
    return (
        <ScreenLayout>
            <View style={{justifyContent:'center'}}>
                <PressText
                    text="Verification"
                    Paragraph="We have sent you a verification code to your email ID davidwalb@gmail.com"
                    onPress={() => navigation.goBack()} 
                />
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between', marginTop: hp('10%')
                }}>
                    <Number no="2" />
                    <Number no="4" />
                    <Number no="9" />
                    <Number no="8" />
                </View>
                <TouchableOpacity >
                    <Text style={{ color: 'white', marginTop: hp('4%'), marginLeft: wp('10%'), marginBottom: hp('15%') }}>
                        Didn't get a code? Tap tp resend
                    </Text>
                </TouchableOpacity>
                <Button buttonText="VERIFY"  onPress={() => navigation.navigate('Reset_password')}  />
                <TouchableOpacity  onPress={() => navigation.navigate('LoginScreen')} >
                    <Text style={{ color: 'white', marginTop: hp('2%'), marginLeft: wp('20%') }}>
                        Have an account? Log in
                    </Text>
                </TouchableOpacity>
            </View>
        </ScreenLayout>
    )
}

const Number = ({ no }) => {
    return (
        <View style={{ borderBottomColor: Logoblue, borderWidth: 1 }}>
            <Text style={styles.number}>{no}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    number: {
        fontSize: hp('4%'),
        color: 'white'
    }
})