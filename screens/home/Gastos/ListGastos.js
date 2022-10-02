import React from "react";
import { View, Text, StyleSheet, TouchableHighlight, Image, ActivityIndicator, ScrollView } from "react-native";
import ItemGasto from "./ItemGasto";
import NoGastos from "./NoGastos";


export default function ListGastos({meses, mesActual}) {

    const arrReverse = meses[mesActual].consumos.reverse()

    return (            
    <View style={styles.home_list_gastos}>
        <ScrollView>
       {
              meses[mesActual].consumos.length == 0 ? (
                <NoGastos />
                ) : (
                    arrReverse.map((item, index) => {
                        return (
                            <ItemGasto fecha={item.fecha} id={item.id} nombre={item.nombre} precio={item.precio} ingreso={item.ingreso} key={index} /> 
                        )
                    }
                )
            )
                
        }
       </ScrollView>     
       
   </View>) 
}


const styles = StyleSheet.create({
    //lista de gastos
    home_list_gastos: {
        width: '100%',
        height: '43%',
        backgroundColor: '#fff1',
        borderRadius: 30,
        display: 'flex',
        alignItems: 'center',

    },
    
    
})