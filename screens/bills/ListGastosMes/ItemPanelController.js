import React from "react";
import { View, Text, StyleSheet, ScrollView, ActivityIndicator} from 'react-native'


export default function ItemPanelController({title, value}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text_title}>{title}</Text>
            <Text style={styles.text}>$ {value}</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        width: '30%',
        height: '70%',
        justifyContent: 'space-around',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff1',
        borderRadius: 10,
        padding: 5,
    },
    text_title: {
        color: '#fff',
        fontSize: 15,

        fontWeight: 'bold',
        fontFamily: 'josefin',
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'josefin',
    }
})