import React, { useEffect, useState} from 'react'
import { View,StyleSheet,ActivityIndicator} from 'react-native'

import Title from './Title';
import PanelSaldos from './Panel/PanelSaldos';
import PanelActions from './Panel/PanelActions';
import TitleMesGastos from './TitleMesGastos';
import ListGastos from './Gastos/ListGastos';
import { getMeses } from '../../services/getMeses';
import { getCash } from '../../services/getCash';
import { loaderFonts } from '../../services/LoaderFonts';

const Home =  (props) => {
    const [meses, setMeses] = useState([]);
    const [cash, setCash] = useState([]);
    const mesActual = new Date().getMonth();


    useEffect(() => {
        getMeses().then((data) => {setMeses(data)})
        getCash().then((data) => {setCash(data[0])})    
    }, [])  

    const uploadPage = () => {
        getCash().then((data) => {setCash(data[0])})
        getMeses().then((data) => {setMeses(data)})    
    }
   
    //carga de fuentes
    loaderFonts();

    if(typeof cash === 'undefined' || typeof meses[0] === 'undefined'){
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        )
    }
        
    return (
    <>
    <View style={styles.purple}></View>
        <View style={styles.container}>
        <Title nombre={"Tomas"} />
        <PanelSaldos total={cash.total} saldoRestante={meses[mesActual].saldoRestante} saldo={meses[mesActual].saldo} gastoGeneral={meses[mesActual].gastoTotal} />
        <PanelActions upload={uploadPage} navigation={props.navigation} mesActual={mesActual} meses={meses} />
        <TitleMesGastos mes={meses[mesActual].mes} />
        <ListGastos meses={meses} mesActual={mesActual}/>
    </View>  
    </>   
    )
}

const styles= StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'space-around',
        alignItems: 'center'
        
    },
    purple: {
        width: '100%',
        height: '42%',
        position: 'absolute',
        backgroundColor: '#663DD9',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
})

export default Home



//arreglar asinc en charts js porque no lo carga al actualizar el componente hijo y db