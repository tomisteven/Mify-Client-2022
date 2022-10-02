import React from "react";
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, Image, TouchableHighlight} from 'react-native'
import { parseDate } from "../../../services/parseDate";

export default function ItemListGasto({consumo}) {
    
    return ( 
        <View key={consumo._id} style={styles.list_view}>
                 <View style={styles.list_img_item}>
                    {
                        consumo.ingreso ? (
                        <Image style={styles.list_img} source={require('../../../assets/mas.png')} />
                        ) : 
                       <Image style={styles.list_img} source={require('../../../assets/menos.png')} />
                    }
                 </View>
                <View style={styles.list_name_item}>
                    <Text style={styles.list_item_text}>{consumo.nombre}</Text>
                    <Text style={styles.list_item_date}>{parseDate(consumo.fecha)}</Text>
                </View>
                <View style={styles.list_precio_item}>
                    <Text style={styles.list_precio_text}>${consumo.precio}</Text> 
                </View>
                <TouchableHighlight style={styles.list_delete_item}>
                    <Image style={styles.list_img_delete} source={require('../../../assets/delete.png')} />
                </TouchableHighlight>
            </View>
    )
}

const styles = StyleSheet.create({
    list_view: {
        width: '95%',
        height: 70,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 20,
        backgroundColor: '#fff',
        
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
        fontSize: 22,
        fontFamily: 'slab',
    },
    list_item_text: {
        fontSize: 21,
        marginBottom: 5,
        fontFamily: 'josefin',
        color: '#0007',
    },
    list_item_date: {
        fontSize: 13,
        fontFamily: 'josefin',
        color: '#0005'
    },
    list_delete_item: {
        width: 40,
        height: 45,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#74D664',
        borderRadius: 10,
        position: 'relative',
        right: 10,
    },
    list_img_delete: {
        width: 30,
        height: 30,
    }

})