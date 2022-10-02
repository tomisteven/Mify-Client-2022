import React, { Component, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, ActivityIndicator} from 'react-native'
import Title from '../home/Title'
import MesItem from './MesItem'
import { getMeses } from '../../services/getMeses'
const Months = (props) => {

         //const {meses}= props.route.params
    const [loading, setLoading] = React.useState(true);
         const [_meses, setMeses] = React.useState([]);

         useEffect(() => {
             getMeses().then((data) => {setMeses(data) ; setLoading(false)})
         }, []);


            if(loading){
                return (
                    <View style={styles.container_loader}>
                        <ActivityIndicator size="large" color="#fff" />
                    </View>
                )
            } 

    return (
        <View style={styles.container}>
            <Title nombre={"Tomas"} />
            <ScrollView style={{width:"100%", marginTop:30}}>
            {
                _meses.map((mes, index) => {
                    return (
                        <MesItem gastoTotal={mes.gastoTotal} id={mes._id} key={index} mes={mes.mes} arrMeses={_meses} sueldoNeto ={mes.saldo}  mesSelected={index} navigation={props.navigation}/>
                    )
                })
            }
            </ScrollView>
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        paddingTop: 15,
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1E1E1E'
        
    },
    container_loader: {
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1E1E1E'
    }
})

export default Months