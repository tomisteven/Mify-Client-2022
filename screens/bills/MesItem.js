import React from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator, TouchableHighlight, Alert } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { getMeses } from '../../services/getMeses';

export default function MesItem(props) {
    const [loading, setLoading] = React.useState(false);
    const [data, setData] = React.useState([]);
    const {id, navigation, mesSelected}= props

    React.useEffect(() => {
        getMeses().then((res) => {
            setData(res);
            setLoading(false);
        })
    }, []);

    if(typeof data[mesSelected] === 'undefined'){
        return (
            <View style={styles.home_mes_item}>
                <ActivityIndicator size="large" color="#fff" />
            </View>
        )
    }
    
    const EditYear = async (valor) => {
        setLoading(true);
        const url = `https://tablecash.herokuapp.com/Cash/62f7417af39bf61aba34095d/${id}/saldo`
        const res = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "saldo": valor
            })
        })
        await res.json()
        getMeses().then((res) => {
            setData(res);
            setLoading(false);
        }).finally(() => {
            Alert.alert("Aviso", "Se ha editado el saldo del mes");
        })

    }

    const mes = data[mesSelected];

    return (
        <LinearGradient colors={["#6f2dbd", "#B77ED6"]} start={{x:0.1, y:0.2 }} style={styles.mesItem}>
        {
            loading ? <ActivityIndicator style={{marginTop:35}} size="large" color="#fff" /> : (
                <>
                <View style={styles.mesItem_title} key={id}>
                <Text style={styles.mesItem_title_text}>{mes.mes.toUpperCase()}</Text>
                <TouchableHighlight style={styles.mesItem_button} onPress={() => navigation.navigate("list gastos", {data:data, mesSelected:mesSelected})}>
                    <Text style={styles.mesItem_button_text}>Ver</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.mesItem_button} onPress={() => {
                    Alert.prompt(
                        "Editar Sueldo",
                        "Ingrese el nuevo valor del Saldo",
                        [
                            {
                                text: "Cancelar",
                                onPress: () => console.log("Cancel Pressed"),
                                style: "cancel"
                            },
                            { text: "OK", onPress: (text) => EditYear(text) }
                        ],
                        "plain-text"
                    );

                }}>
                    <Text style={styles.mesItem_button_text}>Edit</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.mesItem_price}>
                <View style={styles.mesItem_price_total}>
                    <Text style={styles.mesItem_price_text}>Gasto Total</Text>
                    <Text style={styles.mesItem_price_text_p}>${mes.gastoTotal}</Text>
                </View>
                <View style={styles.mesItem_price_total}>
                    <Text style={styles.mesItem_price_text}>Saldo</Text>
                    <Text style={styles.mesItem_price_text_p}>${mes.saldo}</Text>
                </View>
            </View>
            </>
            )
        }    
            
        </LinearGradient>

    )
}


const styles= StyleSheet.create({
    mesItem: {
        display: 'flex',
        width: '95%',
        height: 150,  
        backgroundColor: '#fff',
        borderRadius: 20,
        margin: 10,
        padding: 5,


    },
    mesItem_title:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '95%',
    },
    mesItem_title_text:{
        fontSize: 35,
        fontWeight: 'bold', 
        color: '#fff',
        fontFamily: 'koulen',
        letterSpacing: 2,
        marginLeft: 33,
    },

    mesItem_button_text:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'josefin',
    },
    mesItem_button:{
        backgroundColor: '#00BA34',
        width: 70,
        height: 30,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    ,
    mesItem_price:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        width: '98%',
        height: '50%',
    },
    mesItem_price_total:{
        backgroundColor: '#fff3',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '45%',
        height: '100%',
        borderRadius: 20,
        padding: 10,
    },
    mesItem_price_text:{
        fontSize: 23,
        fontWeight: 'bold',
        color: '#fff',
        fontFamily: 'slab',
    },
    mesItem_price_text_p:{
        fontSize: 23,
        fontWeight: 'bold',
        color: '#fff',
        fontFamily: 'koulen',
        letterSpacing: 1.5,
    }
})