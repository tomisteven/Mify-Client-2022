import React, {useState} from 'react'
import { View, Text, StyleSheet} from 'react-native'
import PanelItemMoney from './PanelItemMoney';
import PanelMensualAnual from './PanelMensualAnual';

export default function PanelSaldos({saldoRestante , saldo, total, gastoGeneral}) {
    
    const [changeCash, setChangeCash] = useState(false);

  return (
    <View style={styles.BlurContainer}>
        <View style={styles.panel_title}>
            <Text style={styles.panel_title_text}>Gastos Generales</Text>
        </View>
        <PanelMensualAnual changeCash={changeCash} setChangeCash={setChangeCash} gastoGeneral={gastoGeneral} total={total}/>
        <View style={styles.panel_saldos}>
            <View style={styles.panel_saldo_total_restante}>
                <PanelItemMoney valor={saldoRestante} text="Saldo Restante" />
                <PanelItemMoney valor={saldo} text="Saldo Total" />
            </View>
        </View>
</View>
  )
}

const styles = StyleSheet.create({
    //panel de gastos

    BlurContainer: {
        width: '96%',
        height: '23%',
        borderRadius: 20,
        marginTop: 10,
        paddingBottom: 10,
        backgroundColor: '#fff3',
        justifyContent: 'space-around',
        
       
    },
    panel_title:{},
    panel_title_text: {
        fontSize: 18,
        fontFamily: 'jost',
        color: '#fff',
        marginLeft: 18,
        marginTop: 10
    },
    
    panel_anio: {
        width: 30,
        height: 30,
        borderRadius: 5,
        backgroundColor: '#fff4',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    },

    panel_saldos: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: 10
    },
    
    panel_saldo_total_restante: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        width: '50%'
    },
    
    
    panel_agregar_1000: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    panel_1000 : {
        width: 55,
        height: 35,
        borderRadius: 10,
        marginRight: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    panel_agregar_1000_btn_text: {
        fontSize: 14,
        fontFamily: 'slab',
        color: '#000'
    },
})