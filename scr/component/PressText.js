import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { wp, hp } from '../helper/helper'
import Icon from 'react-native-vector-icons/Feather'


export default function PressText({ text, styleText,onPress,Paragraph }) {
    return (
        <View>
        <View style={{ flexDirection: 'row'}}>
            <TouchableOpacity onPress={onPress}>
                <Icon name="arrow-left" size={wp('9.5%')} color='white' style={styles.icon}/>
            </TouchableOpacity>
            <Text style={[styles.customtext, styleText]}>{text}</Text>
        </View>
        <Text style={{color:'white',fontSize:wp('3%')}}>{Paragraph}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    customtext: {
        color: 'white',
        fontFamily: 'Arial',
        // fontWeight:"700",
        fontSize: hp("3.5%"),
    },
    icon:{
        marginTop:10,
        marginBottom:10,
        marginRight:10
    }
})
