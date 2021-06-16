import React, { useState } from 'react'
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import { wp, hp, Logoblue, bag, ladbag, ladybag, man, rightshoe, shoe, shoeair, woman, girleye, jacket, whitejacket } from '../helper/helper'
import ProductLayout from '../component/ProductLayout'
import LinearGradient from 'react-native-linear-gradient'

export default function News({ naviagtion }) {
    const [page, setPage] = useState(true)
    const [id, setId] = useState('')

    const [data] = useState([
        {
            id: '1',
            item: ladybag,
            name: 'Saint Laurent',
            discription: 'Medium Sunset shoulder bag'
        },
        {
            id: '2',
            item: man,
            name: 'David Walberg',
            discription: 'Grey Jacket'
        },
        {
            id: '3',
            item: rightshoe,
            name: 'Nike Joyride',
            discription: 'Lorem ipsum dolor sit amet'
        },
        {
            id: '4',
            item: shoe,
            name: 'Nike Joyride',
            discription: 'Lorem ipsum dolor sit amet,consecletu'
        },
        {
            id: '5',
            item: woman,
            name: 'Elena roy',
            discription: 'White soft jacket'
        },
        {
            id: '6',
            item: girleye,
            name: 'Lorem ipsum',
            discription: 'Lorem ipsum dolor sit amet,consecletu'
        },
    ])


    const Product = () => {
        switch (id) {
            case 1:
                return <>
                    <ProductLayout
                        brandname="Saint Laurent"
                        brandtext="Medium Sunset shoulder bag"
                        branddiscription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. lorem ipsum dolor sit amet, consectetur"
                        source={ladbag}
                        subsource={bag}
                        onPress={() => setPage(true)}
                    />
                </>
            case 2:
                return <>
                    <ProductLayout
                        brandname="David Walberg"
                        brandtext="Grey Jacket"
                        branddiscription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. lorem ipsum dolor sit amet, consectetur"
                        source={man}
                        subsource={jacket}
                        onPress={() => setPage(true)}
                    /></>
            case 3:
                return <>
                    <ProductLayout
                        brandname="Nike Joyride"
                        brandtext="Lorem ipsum dolor sit amet"
                        branddiscription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. lorem ipsum dolor sit amet, consectetur"
                        source={rightshoe}
                        subsource={shoeair}
                        onPress={() => setPage(true)}
                    /></>
            case 4:
                return <>
                    <ProductLayout
                        brandname="Nike Joyride"
                        brandtext="Lorem ipsum dolor sit amet,consecletut"
                        branddiscription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. lorem ipsum dolor sit amet, consectetur"
                        source={shoe}
                        subsource={shoe}
                        onPress={() => setPage(true)}
                    /></>
            case 5:
                return <>
                    <ProductLayout
                        brandname="Elena roy"
                        brandtext="White soft jacket"
                        branddiscription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. lorem ipsum dolor sit amet, consectetur"
                        source={woman}
                        subsource={whitejacket}
                        onPress={() => setPage(true)}
                    /></>
            case 6:
                return <>
                    <ProductLayout
                        brandname="Lorem ipsum"
                        brandtext="Lorem ipsum dolor sit amet,consecletu"
                        branddiscription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. lorem ipsum dolor sit amet, consectetur"
                        source={girleye}
                        subsource={jacket}
                        onPress={() => setPage(true)}
                    /></>

        }
    }
    const handleChange = (item) => {
        switch (parseInt(item.id)) {
            case 1:
                setPage(false)
                setId(parseInt(item.id))
                break;
            case 2:
                setPage(false)
                setId(parseInt(item.id))
                break;
            case 3:
                setPage(false)
                setId(parseInt(item.id))
                break;
            case 4:
                setPage(false)
                setId(parseInt(item.id))
                break;
            case 5:
                setPage(false)
                setId(parseInt(item.id))
                break;
            case 6:
                setPage(false)
                setId(parseInt(item.id))
                break;
        }
    }

    const ListView = () => {
        return (
            <View style={{ alignItems: 'center', backgroundColor: '#000' }}>
                <Text style={{ color: 'white', marginRight: wp('80%'), marginBottom: hp('2%') }}>NEWS</Text>
                <FlatList
                    data={data}
                    keyExtractor={item => item.id}
                    horizontal
                    pagingEnabled
                
                    renderItem={({ item }) => {
                        return (
                            <View style={{ justifyContent: 'center', margin: wp('0%'), marginLeft: wp('10%'), marginRight: wp('10%') }}>
                                <LinearGradient
                                    start={{ x: 0.1, y: 0.01 }}
                                    end={{ x: 1.0, y: 1 }}
                                    colors={['#000', '#FFEA57', '#EACC00', '#FFEA57', '#000']}
                                    style={{
                                        width: wp('80%'),
                                        height: hp('70%'),
                                        borderTopRightRadius: 25,
                                        borderTopLeftRadius: 25,
                                        borderBottomLeftRadius: 25,
                                        borderBottomRightRadius: 25,
                                        borderWidth: 1,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <TouchableOpacity onPress={() => handleChange(item)}>
                                        <Image source={item.item} style={{
                                            width: wp('78%'),
                                            height: hp('59%'),
                                            borderTopRightRadius: 25,
                                            borderTopLeftRadius: 25,
                                            borderWidth: 1,

                                        }} />
                                        <View style={{
                                            backgroundColor: Logoblue,
                                            width: wp('78%'),
                                            height: hp('10%'),
                                            borderBottomLeftRadius: 25,
                                            borderBottomRightRadius: 25
                                        }}>
                                            <View style={{ padding: wp('3%'), paddingLeft: wp('4%') }}>
                                                <Text style={{ color: 'white', fontSize: hp('2.3%') }}>{item.name}</Text>
                                                <Text style={{ color: 'white', fontSize: hp('1.5%'), marginTop: hp('1%') }}>{item.discription}</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </LinearGradient>
                            </View>
                        )
                    }}
                />
            </View>
        )
    }

    return (
        <>
            {
                page ? <ListView /> : <Product  id={id} />
            }
        </>
    )
}





