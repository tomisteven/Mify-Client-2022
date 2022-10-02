import React from 'react'
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native'
import ReactNativeFusionCharts from 'react-native-fusioncharts';


const FusionChart = ({meses, mesActual}) => {

    //const [mesSelected, setMesSelected] = useState(7)
    if(typeof meses[0] === 'undefined'){
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#fff" />
            </View>
        )
    }

     
     
     let charData = [];
     meses[mesActual].consumos.forEach(element => {
        let Arr = charData.filter((item) => item.label === element.nombre)
        if (Arr.length > 0) {
          Arr[0].value = Arr[0].value + element.precio
        }
        else{
          if(element.ingreso == false){
            charData.push({label: element.nombre, value: element.precio})
          }
        }
      }); 

    const chartConfigs = {
        type: "doughnut2d", // The chart type
        width: "425", // Width of the chart
        height: "420", // Height of the chart
        dataFormat: "json", // Data type
        dataSource: {
          // Chart Configuration
          chart: {
            animation: true,
            showLegend: true,
            legendPosition: "top",
            legendNumColumns: 3,
            legendItemFontSize: "12",
            legendCaptionAlignment: "right",
            theme: "fusion", 
            pieRadius: 150,
            bgColor: "#313846",
            baseFontColor : "#000",
            baseFontSize: 13,
            showValues: "0",
            showLabels: false,
            chartBottomMargin: -10,
            
          },
          // Chart Data - from step 2
          data: charData
        }
      };


  return (
    <View style={styles.chart_grafico_view}>
        <View style={styles.chartContainer}>
        {
                meses[mesActual].consumos.length > 0 ? 
                 <ReactNativeFusionCharts chartConfig={chartConfigs}/> 
                : 
              <View style={{height: "100%", width: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <Text style={{color: "#fff", fontSize: 20, fontFamily: "josefin"}}>No hay datos para mostrar</Text>
              <Image source={require('../../assets/presupuesto.png')} style={{marginTop:25}} />
              </View>
            }
        </View>
    </View>
  )
}

export default FusionChart


const styles = StyleSheet.create({
    //grafico
    chart_grafico_view: {
      height: "47%",
      width: "100%",
      
  }
})



/*  */