import React from 'react'
import { View, Text, Image } from 'react-native'
import { wp, qr, hp } from '../helper/helper'

export default function Qr() {
    return (
        <View style={{ flex: 1, padding: wp('5%') }}>
            <Text style={{ color: 'white' }}>DIGITAL MEMBER CARD</Text>

            <View style={{ alignItems: 'center',marginTop:hp('20%'), alignSelf: 'center', backgroundColor: '#A8A8A8', height: hp('33%'), width: wp('70%'), justifyContent: 'center',borderRadius:5}}>
                <Image source={qr} style={{ flex:1,height: hp('30%'), width: wp('68%') }} />

            </View>
        </View>
    )
}
