import React from 'react'
import { View, Text, StyleSheet, Image, ActivityIndicator, TouchableHighlight } from 'react-native'
import { useState } from 'react';
import { useEffect } from 'react';
import { getPriceDolar } from '../../services/getDollarPrice';
import { getCash } from '../../services/getCash';
import PanelChartPricesView from './PanelChartPricesView';
import { getMeses } from '../../services/getMeses';

const PanelChart = ({meses, mesActual, navigation}) => {
    const [dollar, setDollar] = useState(0)   
    const [mesSelected, setMesSelected] = useState({mes: meses[mesActual]})
 
    useEffect(() => {
      getMeses().then((data) => {setMesData(data[mesActual])})
        setMesSelected({mes: meses[mesActual]})
        getPriceDolar().then((data) => {setDollar(data.blue.value_buy)})
      }, [dollar, mesActual])

      if(typeof meses === 'undefined' || dollar === 0){
        return (
          <View style={styles.container}>
            <ActivityIndicator size="small" color="transparent" />
          </View>
        )
      } 

      //props.navigation.navigate("inicio")
  return (
    <View style={styles.chart_gastos_view}>
    <View style={styles.gastos_mes_text}>
      <TouchableHighlight underlayColor={"transparent"} onPress={() => {navigation.navigate("inicio")}} >
        <Image style={styles.back_img} source={require('../../assets/arrow_left.png')} />
      </TouchableHighlight>
        <Text style={styles.text_mes}>{mesSelected.mes.mes}</Text>
    </View>
      <PanelChartPricesView gastoTotal={mesSelected.mes.gastoTotal} title="Gastos Generales Mensuales" gastoUsd={Math.floor(mesSelected.mes.gastoTotal/dollar)} />
      <PanelChartPricesView gastoTotal={mesSelected.mes.saldoRestante} title="Saldo Mensual" gastoUsd={Math.floor(mesSelected.mes.saldoRestante/dollar)} />
      <PanelChartPricesView gastoTotal={mesSelected.mes.saldo} title="Sueldo Neto" gastoUsd={Math.floor(mesSelected.mes.saldo/dollar)} />
    </View>
  )
}

const styles = StyleSheet.create({
  back_img:{
    width: 32,
    height: 32,
    position: "relative",
    right: 110,
  },
//gastos panel
chart_gastos_view: {
    height: "35%",
    width: "95%",
    backgroundColor: '#fff3',
    borderRadius: 25,
  },
  gastos_mes_text: {
    marginTop: 4,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',   
  },
  text_mes: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "koulen",
  },
  
})

export default PanelChart

