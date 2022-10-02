import React from "react";
import { View, Text, StyleSheet, TouchableHighlight, Image, ActivityIndicator, ScrollView } from "react-native";


export default function NoGastos() {
    return (
        <View style={styles.home_list_gastos_empty}>
                    <Image style={styles.home_list_gastos_empty_img} source={require('../../../assets/empty.png')} />
                    <Text style={styles.home_list_gastos_empty_text}>No hay gastos</Text>
                </View>
    )
}

const styles = StyleSheet.create({
    home_list_gastos_empty: {
        width: '100%',
        height: 350,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',

    },
    home_list_gastos_empty_text: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
        fontFamily: 'slab',

        
    },
    home_list_gastos_empty_img: {
        marginBottom: 20,
    }
})