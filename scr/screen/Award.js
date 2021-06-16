import React from 'react'
import { View, Text, Switch, StyleSheet, Image } from 'react-native'
import { wp, hp, man, Logoblue, Logo,prowoman,proman,progirl,woman } from '../helper/helper'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function Award() {
    return (
        <View style={{ flex: 1, padding: wp('5%') }}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'white' }}>RANKING</Text>
                <Text style={{ color: 'white', marginLeft: wp('30%') }}>Monthly</Text>
                <Switch trackColor={{ false: "#212143", true: "#81b0ff" }} thumbColor={"#36C7FF"} />
                <Text style={{ color: 'white' }}>Yearly</Text>
            </View>
            <User no='1' name="Henry Ramirez" number='17880' source={man}/>
            <User no='2' name="kara Cloutier" number='15860' source={prowoman}/>
            <User no='3' name="Nathan Holl" number='11380' source={proman}/>
            <User no='4' name="jade Arnett" number='8750' source={progirl}/>
            <User no='5' name="Elna roy" number='7230' source={woman}/>            
        </View>
    )
}

const User = ({no,name,number,source}) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomColor: Logoblue, borderWidth: 1, padding: hp('1%'),marginTop:hp('4%') }}>
            <Text style={{ color: 'white' }}>{no}</Text>
            <Image source={source} style={{ width: wp('17%'), height: hp('8%'), borderRadius: 50 }} />
            <View style={{ flexDirection: 'column' }}>
                <Text style={{ color: 'white', fontSize: hp('2.5%') }}>{name}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name='star' color='white' size={hp('2%')} />
                    <Text style={{ color: 'white' }}>{number}</Text>
                </View>
            </View>
            <Image source={Logo} style={{ width: wp('16%'), height: hp('8%') }} />

        </View>
    )
}