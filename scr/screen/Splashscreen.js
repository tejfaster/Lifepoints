import React from "react"
import {View,Image,StyleSheet} from "react-native"
import {wp,hp,Logo,Logoblue} from '../helper/helper'

const Splashscreen =()=>{
    return(
        <View style={styles.container}>
           <View style={styles.subcontainer}>
            <Image source={Logo} style={styles.logo}/>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       flex:1,
       justifyContent:"center",
       alignItems:"center", 
       backgroundColor:'black'
    },
    subcontainer:{
        borderWidth:1,
        borderColor:Logoblue,
        width:wp('90%'),
        height:hp('42%'),
        borderRadius:180,
        justifyContent:'center'
    },
    logo:{
        width:wp('60%'),
        height:hp('22%'),
        alignSelf:'center'
    }
})
export default Splashscreen

