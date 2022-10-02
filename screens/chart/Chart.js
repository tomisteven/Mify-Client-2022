import React,{useEffect} from 'react'
import { View, Text, StyleSheet, Image, ActivityIndicator, TouchableHighlight } from 'react-native'
import { useState } from 'react';

import PanelChart from './PanelChart';
import FusionChart from './FusionChart';
import { getMeses } from '../../services/getMeses';


export default function Chart(props) {

  //const {meses} = props.route.params
  //const [meses, setMeses] = useState([]);
  const [mesActual, setMesSelected] = useState(new Date().getMonth());
  const [loading, setLoading] = useState(false);
  const  [meses, setMesesData] = useState([]);
  
  useEffect(() => {
     
    getMeses().then((data) => {setMesesData(data)})
  }, [mesActual]); 
  
  const arrMeses = meses.map((mes) => mes.mes)

  if(typeof meses === 'undefined' || arrMeses.length == 0){
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    )
  } 

  return (
    <View  style={styles.container}>
         <View style={styles.chart_nombre}>
          <Image source={require('../../assets/avatar.png')} style={styles.img_nombre} />
          <Text style={styles.nombre_text}>Hola, <Text style={styles.nombre_text2}>Tomas!</Text></Text>
        </View>
          <View style={styles.calendar_text}>
            {
              arrMeses.map((mes, index) => {
                return (
                  <TouchableHighlight style={mesActual === index ? styles.calendar_button_selected : styles.calendar_button} key={index} onPress={() => setMesSelected(index)}>
                    <Text style={mesActual === index ? styles.mes_selected : styles.calendar_text2 }>{mes.charAt(0)}</Text>
                  </TouchableHighlight>
                )
              })
            }
          </View>
        <PanelChart navigation={props.navigation} meses={meses} mesActual={mesActual}/> 
        <FusionChart meses={meses} mesActual={mesActual} />    
    </View>
  )
}



  
const styles= StyleSheet.create({
  calendar_text: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "95%",
    marginBottom: 15,
    height: 40,
    backgroundColor: "#fff3",
    padding: 3,
    borderRadius: 10,
    
  },
  container: {
    flex: 1,
    backgroundColor: '#313846',
    alignItems: 'center',
    justifyContent: 'space-around',
    
  },

  mes_selected: {
    color: "#000",
    fontSize: 22,
    fontWeight: "bold",
    
    
  },

  calendar_text2: {
    fontSize: 18,
    color: "#fff",
    
    
  },
  calendar_button: {
    backgroundColor: "#fff3",
    borderRadius: 10,
    width: 25,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
  },  
  calendar_button_selected: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: 25,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
  },  

  //titulo
  chart_nombre: {
    display: 'flex',
    flexDirection: 'row',
    height: "10%",
    width: "90%",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "flex-start",
    position: "relative",
    top: 10,
  },
  img_nombre: {
    height: 40,
    width: 40,
  },
  nombre_text: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 20,
  },
  nombre_text2: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
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
    justifyContent: 'space-around',
    alignItems: 'center',   
  },
  text_mes: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "koulen",
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
  text_gastos_generales_precio: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "slab",
    marginTop: 10,
  },
  
  gastos_restante_view: {
    height: "14%",
    width: "95%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 10,
  },
  gastos_restante_mensual_view: {},
  gastos_neto_view: {
    height: "12%",
    width: "95%",
    display: "flex",
    flexDirection: "row",
    alignItems: "start",
    justifyContent: "flex-start",
    marginLeft: 10,
    
  },
  text_gastos_sueldo_neto: {
    color: "#fff",
    fontSize: 31,
    fontWeight: "bold",
    fontFamily: "josefin",

  },
  text_gastos_generales_precio_usd: {
    color: "#6ACC8C",
    fontSize: 21,
    marginRight: 20,
    fontFamily: "josefin",
  },




})


