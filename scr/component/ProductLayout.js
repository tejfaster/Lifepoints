import React from 'react'
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import Icons from 'react-native-vector-icons/Ionicons'
import Iconss from 'react-native-vector-icons/FontAwesome'
import { hp, wp, userblue, usergreen,Logoblue } from '../helper/helper'


export default function ProductLayout(props) {
    const { onPress, brandname, brandtext, branddiscription, source, subsource } = props
    return (
        <View style={styles.container} >
            <ImageBackground style={styles.image} source={source}>
                <TouchableOpacity onPress={onPress}>
                    <Icon name="arrow-left" size={wp('9%')} color='white' style={styles.icon} />
                </TouchableOpacity>
                <View style={{ marginTop: wp('20%'), backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                    <Text style={styles.brandname}>{brandname}</Text>
                </View>
                <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <Text style={styles.brandtext}>{brandtext}</Text>
                </View>
                <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
                    <Text style={styles.branddiscription}>{branddiscription}</Text>
                </View>
            </ImageBackground>
            <View style={{ backgroundColor: 'black', width: wp('100%'), height: hp('50%'), padding: wp('5%') }}>
                <View style={{ flexDirection: 'row' }}>
                    <User name="thumbs-o-up" colors={'#49F04F'} />
                    <User name="thumbs-o-down" styleuser={{ borderColor: userblue }} />
                </View>
                <View style={{ flex: 1, marginTop: hp('3%') }}>
                    <ImageBackground source={subsource} style={{ width: wp('90%'), borderTopRightRadius: 10, borderTopLeftRadius: 10, height: hp('28%'), marginRight: wp('5%'), overflow: 'hidden', padding: wp('2%') }}>
                        <Icons name="videocam" size={wp('8%')} style={{ alignSelf: 'flex-end', marginTop: hp('1%'), marginRight: wp('2%') }} />
                        <TouchableOpacity style={{ alignSelf: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)', width: wp('15%'), height: hp('7%'), borderRadius: 50, justifyContent: 'center', marginTop: hp('5%') }} >
                            <Icon name="play" color='white' size={wp('7%')} style={{ alignSelf: 'center' }} />
                        </TouchableOpacity>
                    </ImageBackground>
                    <View style={styles.bottombar}>
                        <View style={{height:hp('1%'),backgroundColor:"#B92B5B",width:wp('25%')}}/>     
                        <View style={{height:hp('1%'),backgroundColor:"white",width:wp('35%'),marginRight:10}}/>      
                        <Text style={{color:'white'}}>4:22/10:02</Text>          
                    </View>
                </View>
            </View>
        </View>
    )
}

const User = ({ styleuser, colors, name }) => {
    return (
        <View style={[styles.user, styleuser]}>
            <Iconss name={name} color={colors} size={wp('9%')} style={{ color: 'white', alignSelf: 'center' }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    image: {
        flex: 1,
        height: hp('50%'),

    },
    brandname: {
        color: 'white',
        fontSize: hp('4%'),
        marginLeft: hp('3%')
    },
    brandtext: {
        color: 'white',
        fontSize: hp('2%'),
        marginLeft: hp('3%'),
        marginTop: hp('1%'),
        marginBottom: hp('1%'),
    },
    icon: {
        margin: hp('3%')
    },
    branddiscription: {
        color: 'white',
        paddingTop: hp('2%'),
        fontSize: hp('2%'),
        marginLeft: hp('3%'),
        marginRight: hp('3%'),
    },
    user: {
        borderWidth: 1,
        height: hp('8%'),
        width: wp('16.5%'),
        borderColor: usergreen,
        borderRadius: 50,
        justifyContent: 'center',
        marginRight: 10
    },
    bottombar: {
        height: hp('5%'),
        backgroundColor: Logoblue,
        width: wp('90.2%'),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }
})
