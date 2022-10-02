import React from "react"
import { View, Text, StyleSheet, TouchableHighlight, Image, ActivityIndicator, ScrollView } from 'react-native'
import ButtonAction from "./ButtonAction"



export default function PanelActions({ meses, navigation, mesActual, upload}) {
    return (
        <View style={styles.home_actions_buttons}>
            <ButtonAction text={"Sumar Pago"} mesId={meses[mesActual]._id} upload={upload} navigation={navigation} source={require('../../../assets/agregarpago.png')} />
            <View style={styles.action_button_item}>
                <TouchableHighlight onPress={() => navigation.navigate("charts", {meses: meses})} style={styles.action_button_touch}>
                    <Image style={styles.action_button_img} source={require('../../../assets/grafico.png')} />
                </TouchableHighlight>
                <Text style={styles.action_button_title}>Ver Grafico</Text>
            </View>
            <View style={styles.action_button_item}>
                <TouchableHighlight onPress={() => navigation.navigate("bills", {meses: meses})} style={styles.action_button_touch}>
                    <Image style={styles.action_button_img} source={require('../../../assets/gastos.png')} />
                </TouchableHighlight>
                <Text style={styles.action_button_title}>Ver Gastos</Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    //botones de acciones
    home_actions_buttons: {
        width: '95%',
        height: '10%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 15
    },
    action_button_item:{
        width: '21%',
        height: 115,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: '#82AFF2',  
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

    },
    action_button: {
        width: "23%",
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    action_button_touch: {
        width: 55,
        height: 60,
        borderRadius: 10,
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    action_button_title: {
        fontSize: 13,
        fontFamily: 'josefin',
        color: '#fff',
        marginTop: 10
    },
    action_button_img: {
        width: 40,
        height: 40,
    },

})


//source={require('../../../assets/gastos.png')}