import React from 'react'
import { View, Image, Text } from 'react-native';
import { hp, wp, prowoman, progirl, man, Logoblue, Logo } from '../helper/helper';
import LinearGradient from 'react-native-linear-gradient';

export default function CustomHeader() {
    return (
        <>
        <LinearGradient
          start={{ x: 0.7, y: 2.5 }}
          end={{ x: 1.1, y: 0.0 }}
          // locations={[0,0.2,0.2,0.3,0.4,0.5,0.6]}
          colors={['#0D0D25F3', '#0D0D25F3', '#534AA2F4', '#32C5FF', '#534AA2', '#0D0D25F3', '#0D0D25F3']}
          style={{ height: hp('12%') }}
        >
          <View style={{ flex: 1, flexDirection: 'row', padding: wp('2%'), alignItems: 'center' }}>
            <Image source={man} style={{ width: wp('21.5%'), height: hp('10%'), borderRadius: 50 }} />
            <Text style={{ color: 'white', marginLeft: wp('4%') }}> David Walberg</Text>
            <View style={{ flexDirection: 'column', alignItems: 'center', marginLeft: wp('10%') }}>
              <Text style={{ color: 'white' }}>
                points
              </Text>
              <Text style={{ color: 'white', fontSize: hp('2%') }}>
                40
              </Text>
            </View>
            <LinearGradient start={{ x: 0.0, y: 1.5 }}
              end={{ x: 1.5, y: 0.5 }} colors={['#000', '#36C7FF']}
              style={{ width: wp('18%'), height: hp('8.5%'), borderRadius: 50, marginLeft: wp('2%'), justifyContent: 'center' }}>
              <View style={{ width: wp('17%'), height: hp('8%'), borderRadius: 50, backgroundColor: Logoblue, alignSelf: "center",alignItems:'center',justifyContent: 'center' }}>
                <Image source={Logo} style={{ width: wp('10%'), height: hp('5%') }} />
              </View>
            </LinearGradient>
          </View>
        </LinearGradient>
      </>
    )
}
