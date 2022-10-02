import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'

export default function Title({nombre, top}) {
  return (
    <View style={styles.home_title}>
      <Image style={styles.home_img} source={require('../../assets/avatar.png')} />
      <Text style={styles.home_title_text}><Text style={{fontWeight:"300"}}>Hola,</Text> {nombre}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    //titulo

    home_title: {
        width: '95%',
        marginTop: 30,
        height: '3%',
        position: 'relative',
        top: 7,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    home_img: {
        width: 35,
        height: 35,
        marginRight: 10,
    },
    home_title_text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },

})
