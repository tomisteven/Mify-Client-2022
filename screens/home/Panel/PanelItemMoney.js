import React from "react";
import { View, Text, StyleSheet} from "react-native";

export default function PanelItemMoney({valor, text}){
    return (
        <View style={styles.panel_total}>
                    <Text style={styles.panel_total_text}>{text}</Text>
                    <Text style={styles.panel_total_precio}>${valor}</Text>
                </View>
    )
};

const styles = StyleSheet.create({
    panel_total: {
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff3',
        borderRadius: 15,
        height: 70,
        margin: 5
    },
    panel_total_text: {
        fontSize: 18,
        textAlign: 'center',
        width: '100%',
        fontFamily: 'josefin',
        fontWeight: 'bold',
        color: '#fff'
    },
    panel_total_precio: {
        fontSize: 25,
        marginTop: 10,
        textAlign: 'center',
        width: '100%',
        fontFamily: 'slab',
        color: '#fff',

    },
});
