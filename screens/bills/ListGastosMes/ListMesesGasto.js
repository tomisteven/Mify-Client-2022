import React from "react";
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, Image} from 'react-native'
import Title from "../../home/Title";
import Mes from "./Mes";
import ItemListGasto from "./ItemListGasto";
import PanelController from "./PanelController";
import { useEffect } from "react";
import { getMeses } from "../../../services/getMeses";

export default function ListMesesGasto(props) {
    
    const {mesSelected, data} = props.route.params
    const [loading, setLoading] = React.useState(true);
    const [_meses, setMeses] = React.useState([]);

    useEffect(() => {
        getMeses().then((data) => {setMeses(data); setLoading(false)})
    }, [mesSelected, loading])

    const updateMeses = () => {
        setLoading(true)
        getMeses().then((data) => {setMeses(data) ; setLoading(false)})
    }
    
    if(typeof _meses == "undefined" || _meses.length == 0){
        return (
            <View style={styles.container}>
                <ActivityIndicator style={{marginTop:250}} size="large" color="#fff" />
            </View>
        )
    }
    
    

    return (

        <View style={styles.container}>
            <Title nombre={"Tomas"} />
            <Mes mes={_meses[mesSelected].mes} year={new Date().getFullYear()} />
            <ScrollView>
            {
                _meses[mesSelected].consumos.length == 0 ? (
                    <View style={styles.container}>
                        <Image style={styles.image} source={require("../../../assets/wallet.png")} />
                        <Text style={styles.text}>No hay gastos</Text>
                    </View>
                ) : (
                    _meses[mesSelected].consumos.map((consumo, index) => {
                        return (
                            <ItemListGasto update={updateMeses} key={index} consumo={consumo} mes_id={_meses[mesSelected]._id} />
                        )
                    })
                )
            }
            </ScrollView>
            <PanelController saldoTotal={data[mesSelected].saldo} gastoTotal={data[mesSelected].gastoTotal} ahorro={data[mesSelected].saldoRestante}  />
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1E1E1E'
    },
    container_mes_text: {
        color: '#fff',
    },
    text: {
        position: "relative",
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'josefin',
        top:200
    },
    image: {
        width: 100,
        height: 100,
        position: "relative",
        top: 190
    }
})