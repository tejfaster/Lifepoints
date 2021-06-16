import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { wp, hp, Logo, Logoblue } from '../helper/helper'
import Input from '../component/Input'
import Button from '../component/Button'

export default function LoginScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.subcontainer}>
                <Image source={Logo} style={styles.logo} />
            </View>
            <Input
                label="Email"
                placeholder="Enter your Email"
            />
            <Input
                label="Password"
                placeholder="Enter your password"
                secureTextEntry={true}
            />
            <TouchableOpacity onPress={() => navigation.navigate('Forgot_password')} >
                <Text style={styles.label}>
                    Forgot password?
                </Text>
            </TouchableOpacity>
            <Button
                buttonText="LOG IN"
                stylebutton={{ marginTop: hp('20%') }}
                onPress={() => navigation.navigate('DashBoard')} 
            />
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={{ color: 'white', marginTop: hp('2%') }}>
                    Don't have an account? Create one
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'black'
    },
    subcontainer: {
        borderWidth: 1,
        borderColor: Logoblue,
        width: wp('60%'),
        height: hp('28%'),
        borderRadius: 180,
        justifyContent: 'center',
        margin: wp('10%'),
    },
    logo: {
        width: wp('35%'),
        height: hp('13%'),
        alignSelf: 'center'
    },
    label: {
        color: 'white',
        marginRight: wp('41%'),
        marginTop: hp('1%')
    }
})


