import React from "react"
import { View, Text, StyleSheet, TouchableHighlight, Image, ActivityIndicator, ScrollView } from "react-native"


export default function PanelActions({mes}) {
    return (<View style={styles.home_title_list}>
        <Text style={styles.home_title_list_text}>Ultimos Pagos de {mes}</Text>
    </View>)
}


const styles = StyleSheet.create({
    //titulo de lista
    home_title_list: {
        width: '95%',
        height: '5%',
    },
    home_title_list_text: {
        fontSize: 22,
        fontFamily: 'josefin',
        color: '#000',
        marginLeft: 18,
        marginTop: 20
    },
})