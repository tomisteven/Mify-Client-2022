import React from "react";
import CheckBox from 'react-native-check-box'
import { View, Text, StyleSheet, TouchableHighlight, Image, Alert, Modal, Pressable, TextInput, ActivityIndicator} from "react-native";
import { useEffect } from "react";
import { getMeses } from "../../../services/getMeses";

export default function ButtonAction({text, source, mesId, navigation, upload}) {

  //console.log(mesId);
    
    const [datos, setDatos] = React.useState({
        "precio": 0,
        "nombre": "",
        "ingreso" : false
    })

    const textos =["Nombre", "Precio", "Ingreso"]
    const [modalVisible, setModalVisible] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const handlePress = () => {
        setModalVisible(true)
    }

    const submitPayment = async () => {
      try {
          setLoading(true)
          const pago = await fetch(`https://tablecash.herokuapp.com/Cash/62f7417af39bf61aba34095d/${mesId}/consumo`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        })
        setLoading(false)
        upload()
        setModalVisible(false)

        await pago.json()
      } catch (error) {
        console.log(error)
      } 

      navigation.navigate("inicio")
    }

    const handleTextChange = (key, value) => {
        setDatos({
            ...datos, [key]: value 
        })
    }

    const setCheckIngreso = () => {
        setDatos({
            ...datos, ingreso: true
        })
    }

    const setCheckPago = () => {
        setDatos({
            ...datos, ingreso: false
        })
        console.log(datos);
    }

    
    return (<View style={styles.action_button_item}>

        <TouchableHighlight onPress={() => {handlePress()}} style={styles.action_button_touch}>
            <Image style={styles.action_button_img} source={source} />
        </TouchableHighlight>
        <Text style={styles.action_button_title}>{text}</Text>

        <Modal
        style={styles.modal}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          {
            loading ? <ActivityIndicator size="large" color="#0000ff" /> :
            (<View style={styles.modalView}>
              <Text style={styles.modalText_2}>Agregar un nuevo pago</Text>
              <TextInput style={styles.input} placeholderTextColor={"#0008"} placeholder={textos[0]} onChangeText={(nombre) => {
                  handleTextChange("nombre", nombre)
              }}/>
              <TextInput style={styles.input} placeholderTextColor={"#0008"} placeholder={textos[1]} onChangeText={(precio) => {
                  handleTextChange("precio", Number(precio))
              }}/>
              <View style={styles.checkbox}>
                <CheckBox style={{flex: 1, padding: 10}} isChecked={datos.ingreso} onClick={()=> {setCheckIngreso()}} leftText={"Ingreso"} />
                <CheckBox style={{flex: 1, padding: 10}} checkBoxColor={"#000"} leftTextStyle={{color:"#000"}} isChecked={!datos.ingreso} leftText={"Pago"} onClick={()=> {setCheckPago()}} />
              </View>
              <View style={styles.modalButtons}>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => submitPayment()}
                >
                  <Text style={styles.textStyle}>Agregar Pago</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose2]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Cancelar</Text>
                </Pressable>
              </View>
            </View>)
          }
        </View>
      </Modal>
    </View>
)
}

/* <TextInput style={styles.input} placeholderTextColor={"#0008"} placeholder={textos[2]} onChangeText={(ingreso) => {
                handleTextChange("ingreso", ingreso)
            }}/> */

const styles = StyleSheet.create({
  
  modalButtons:{
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%"
  },
  checkbox: {
    flexDirection: "row",
  },
    modal:{
        width: 250,
    },
    action_button_item:{
        width: '21%',
        height: 115,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: '#82AFF2',  
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
    },
    action_button: {
        width: "23%",
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    action_button_touch: {
        width: 55,
        height: 60,
        borderRadius: 10,
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    action_button_title: {
        fontSize: 13,
        fontFamily: 'josefin',
        color: '#fff',
        marginTop: 10
    },
    action_button_img: {
        width: 40,
        height: 40,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        
      },
      modalView: {
        width: 350,
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginTop: 10
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#691BB8",
      },
      buttonClose2: {
        backgroundColor: "red",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
        input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        width: 250,
        padding: 10,
        borderRadius: 10,
        borderColor: '#000',
        backgroundColor: '#fff',
        color: '#000'
        },
        modalText_2:{
            fontSize: 16,
            fontFamily: 'josefin',
            color: '#000',
            marginBottom: 10
        }
});
