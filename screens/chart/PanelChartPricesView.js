import React from "react";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";

export default function PanelChartPricesView({ gastoTotal, gastoUsd, title}) {
   if(typeof gastoTotal === 'undefined' || typeof gastoUsd === 'undefined'){ 
      return (
         <View style={styles.container}>
            <ActivityIndicator size="large" color="#0000ff" />
         </View>
      )
   }

    return (<>
        <View style={styles.gastos_mes_view}>
                <Text style={styles.text_gastos_generales}>{title}</Text>
            </View>
        <View style={styles.gastos_restante_view}>
                <Text style={styles.text_gastos_generales_precio}>$ {gastoTotal}</Text>
                <Text style={styles.text_gastos_generales_precio_usd}>U$D {gastoUsd}</Text>
            </View>
            </>
    );
}


const styles = StyleSheet.create({
    gastos_restante_view: {
        height: "14%",
        width: "95%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginLeft: 10,
      },
      text_gastos_generales_precio_usd: {
        color: "#6ACC8C",
        fontSize: 21,
        marginRight: 20,
        fontFamily: "josefin",
      },
      text_gastos_generales_precio: {
        color: "#fff",
        fontSize: 25,
        fontWeight: "bold",
        fontFamily: "slab",
        marginTop: 10,
      },
      gastos_mes_view: {
        height: "10%",
        width: "95%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        marginLeft: 10,
        marginTop: 10,
      },
      text_gastos_generales: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        fontFamily: "josefin",
      },
});