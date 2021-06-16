import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import Button from '../component/Button'
import { hp, wp, Logoblue } from '../helper/helper'
import Input from '../component/Input'
import Icon from 'react-native-vector-icons/Feather'
import Human from 'react-native-vector-icons/Fontisto'
import LinearGradient from 'react-native-linear-gradient'

const SignUp = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={{ color: 'white', alignSelf: 'center' }}>PROFILE PICTURE</Text>
            <View style={styles.profile} >
                <Icon name="camera" color={'white'} size={20} />
            </View>
            <Text style={{ color: 'white', alignSelf: 'center' }}>GENDER</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <User name="male" />
                <User name="female" />
                <User />
            </View>
            <Input
                label="USER NAME"
                placeholder="ENTER YOUR USERNAME"
            />
            <Input
                label="EMAIL"
                placeholder="ENTER YOUR EMAIL"
            />
            <Input
                label="PASSWORD"
                placeholder="ENTER YOUR PASSWORD"
                secureTextEntry={true}
            />
            <Input
                label="CONFIRM PASSWORD"
                placeholder="ENTER YOUR CONFIRM PASSWORD"
                secureTextEntry={true}
            />
            <View style={{ marginTop: hp('5%') }}>
                <Button buttonText="CREATE ACCOUNT" onPress={() => navigation.navigate('LoginScreen')} />
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Text style={{ color: 'white', marginTop: hp('2%'), marginLeft: wp('20%') }}>
                        Have an account? Log in
                    </Text>
                </TouchableOpacity>
            </View>
        </View>)
}
const User = ({ name }) => {
    return (
        <View>
            <LinearGradient style={styles.user} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#5098F2', '#0F68D7']}>
                <TouchableOpacity>
                    <Human name={name} color={'white'} size={30} />
                </TouchableOpacity>
            </LinearGradient>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        // padding: wp('8%'),
    },
    profile: {
        borderWidth: 1,
        borderColor: Logoblue,
        width: wp('25.5%'),
        height: hp('12%'),
        borderRadius: 180,
        justifyContent: 'center',
        alignItems: 'center',

        margin: hp('2%'),
        // marginLeft: wp('19%'),
    },
    user: {
        width: wp('17%'),
        height: hp('8%'),
        borderRadius: 180,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default SignUp