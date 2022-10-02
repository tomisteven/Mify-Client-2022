import React from "react";
import { View, Text, StyleSheet, TouchableHighlight, Image, ActivityIndicator, ScrollView } from 'react-native'


export default function PanelMensualAnual({changeCash = false,  setChangeCash, gastoGeneral, total}) {

    if(typeof gastoGeneral === 'undefined' || typeof total === 'undefined'){
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#fff" />
            </View>
        )
    }

    return (
        <View style={styles.panel_gastos_generales}>
        <View style={styles.panel_gastos}>
            <Text style={styles.panel_gastos_text}>${
                changeCash ? gastoGeneral : total
            }</Text>
        </View>
        <View style={styles.panel_mes_anio}>
            <TouchableHighlight onPress={()=> setChangeCash(true)} style={
                changeCash ? styles.panel_mes : styles.panel_mes_noactive
            }>
                <Text style={styles.panel_mes_text}>Mensual</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={()=> setChangeCash(false)} style={
                changeCash ? styles.panel_mes_noactive : styles.panel_mes
            }>
                <Text style={styles.panel_mes_text}>Anual</Text>
            </TouchableHighlight>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    panel_gastos_generales: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },
    panel_gastos: {
        width: '50%',
        
    },
    panel_gastos_text: {
        fontSize: 40,
        fontFamily: 'josefin',
        color: '#fff',
        marginLeft: 15,
        marginTop: 10
    },
    panel_mes_anio: {
        width: '40%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginRight: 15
    },
    panel_mes_text: {
        fontSize: 14,
        fontFamily: 'josefin',
        color: '#fff'
    },
    panel_mes: {
        width: 65,
        height: 30,
        borderRadius: 5,
        backgroundColor: '#33B955',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    panel_mes_noactive: {
        width: 65,
        height: 30,
        borderRadius: 5,
        backgroundColor: '#fff3',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
})