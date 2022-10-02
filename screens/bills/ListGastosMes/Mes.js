import React from "react";
import { View, Text, StyleSheet, ScrollView, ActivityIndicator} from 'react-native'

export default function Mes({mes, year}){
    return (
        <View style={styles.container_mes}>
            <Text style={styles.container_mes_text}>{mes} de {year}</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    container_mes: {
        width: '100%',
        height: 30,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: 40,
        position: 'relative',
        left: 20,
        marginBottom: 25
        
    }   ,
    container_mes_text: {
        color: '#fff',
        fontSize: 35,
        fontFamily: 'josefin',

    }
})