import React from "react";
import { View, Text, StyleSheet, TouchableHighlight, Image, ActivityIndicator, ScrollView } from "react-native";


export default function ItemGasto({id, nombre, precio, fecha, ingreso}) {
    const parseDate = (date) => {
        let dateArray = date.split('T')
        dateArray = dateArray[0].split('-')
        dateArray = dateArray.reverse()
        return dateArray.join('/')
      }

    return ( 
        <View key={id} style={styles.list_view}>
                 <View style={styles.list_img_item}>
                    {
                        ingreso ? (
                        <Image style={styles.list_img} source={require('../../../assets/mas.png')} />
                        ) : 
                       <Image style={styles.list_img} source={require('../../../assets/menos.png')} />
                    }
                 </View>
                <View style={styles.list_name_item}>
                    <Text style={styles.list_item_text}>{nombre}</Text>
                    <Text style={styles.list_item_date}>{parseDate(fecha)}</Text>
                </View>
                <View style={styles.list_precio_item}>
                    <Text style={styles.list_precio_text}>${precio}</Text> 
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    list_view: {
        width: '93%',
        height: 60,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        
        backgroundColor: '#fff',
        margin: 10,
        borderRadius: 20,
    },
    list_img_item:{
        width: '20%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    list_img: {
        width: 45,
        height: 45,
    },
    list_precio_item: {
        width: '20%',
    },
    list_name_item: {
        width: '45%',
    },
    list_precio_text: {
        fontSize: 18,
        fontFamily: 'slab',
    },
    list_item_text: {
        fontSize: 16,
        marginBottom: 5,
        fontFamily: 'josefin',
        color: '#0007',
    },
    list_item_date: {
        fontSize: 13,
        fontFamily: 'josefin',
        color: '#0005'
    },
})