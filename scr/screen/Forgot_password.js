import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { hp, wp, Logoblue } from '../helper/helper'
import ScreenLayout from '../component/ScreenLayout'
import PressText from '../component/PressText'
import Button from '../component/Button'
import Input from '../component/Input'

export default function Forgot_password({ navigation }) {
    return (
        <ScreenLayout>
            <PressText
                text="Forgot Password?"
                Paragraph="Give us your registered email address and we'll send you link to resent your password"
                onPress={() => navigation.goBack()}
            />
            <View style={{ marginTop: hp('10%') }}>
                <Input
                    label="Email"
                    placeholder="Enter your Email Id"
                />
            </View>
            <View style={{ marginTop: hp('15%') }}>
                <Button buttonText="SEND" onPress={() => navigation.navigate('Verification')} />
                <TouchableOpacity  onPress={() => navigation.navigate('LoginScreen')} >
                    <Text style={{ color: 'white', marginTop: hp('2%'), marginLeft: wp('20%') }}>
                        Have an account? Log in
                    </Text>
                </TouchableOpacity>
            </View>
        </ScreenLayout>
    )
}
