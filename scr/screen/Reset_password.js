import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import ScreenLayout from '../component/ScreenLayout'
import PressText from '../component/PressText'
import Button from '../component/Button'
import { hp, wp, Logoblue } from '../helper/helper'
import Input from '../component/Input'

export default function Reset_password({ navigation }) {
    return (
        <ScreenLayout>
            <PressText
                text="Reset Password"
                Paragraph="E-mail address verified Set a new password"
                onPress={() => navigation.goBack()}
            />
            <View style={{ marginTop: hp('10%') }}>
                <Input
                    label="NEW PASSWORD"
                />
                <Input
                    label="RE-ENTER PASSWORD"
                />
            </View>
            <View style={{ marginTop: hp('10%') }}>
                <Button buttonText="RESET PASSWORD" onPress={() => navigation.navigate('LoginScreen')} />
                <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')} >
                    <Text style={{ color: 'white', marginTop: hp('2%'), marginLeft: wp('20%') }}>
                        Have an account? Log in
                    </Text>
                </TouchableOpacity>
            </View>

        </ScreenLayout>
    )
}
