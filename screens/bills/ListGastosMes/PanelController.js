import React from "react";
import { View, Text, StyleSheet, TouchableHighlight, Image, ActivityIndicator, ScrollView } from "react-native";
import ItemPanelController from "./ItemPanelController";


export default function PanelController({gastoTotal, saldoTotal, ahorro}) {

    console.log("gastoTotal", gastoTotal);
    console.log("saldoTotal", saldoTotal);
    console.log("ahorro", ahorro);
    return (
        <View style={styles.container}>
            <ItemPanelController title={"Gasto Total"} value={gastoTotal} />
            <ItemPanelController title={"Saldo"} value={saldoTotal} />
            <ItemPanelController title={"Ahorro"} value={ahorro} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '98%',
        height: 80,
        backgroundColor: '#0007',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 7,

        shadowColor: "#fff",
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.41,
        shadowRadius: 3.84,
        
    }
})