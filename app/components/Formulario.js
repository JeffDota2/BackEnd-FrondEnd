import React from 'react';

import { Text, TextInput,View,Button, ImageBackground, StyleSheet, AsyncStorage, Image} from 'react-native';

const image = { uri: "" };
const Formulario = () => {
 
        return(
            
<ImageBackground  style={{width: '100%', height: '100%'}}>
          <View style={styles.container}>
       
          <Image
            source ={require("../assets/logo.png")}
            style={{width:"100%", height:75, marginTop:40}}


          />

            <View>
            <View>
               <Text style={styles.messageBoxTitleText}>Bienvenido</Text>
            </View>
              <View style={styles.containerName}>
                <TextInput placeholder="Nombre Donante" placeholderTextColor="gray"
                style={styles.textInput}
                
                /> 
              </View>
              <View style={styles.separator1}/>
              <View style={styles.containerApellido}>
                <TextInput placeholder="Apellido Donante" placeholderTextColor="gray"
                style={styles.textInput}
              
                /> 
              </View>
              <View style={styles.separator1}/>

                <Button title='Guardar'title="Guardar"
                 color="#daa520"/>

            </View>         
          </View>        
        </ImageBackground>

        


        )
    
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems: 'stretch',
    },
  
    containerName:{
      height: 60,
      flexDirection:'row',
      justifyContent:'center',
      backgroundColor:'rgba(255, 255, 255, 0.7)',
      marginLeft:'10%',
      marginRight:'10%',
    },
    containerApellido:{
      height: 60,
      flexDirection:'row',
      justifyContent:'center',
      backgroundColor:'rgba(255, 255, 255, 0.7)',
    marginLeft:'10%',
    marginRight:'10%',
  },
  icon:{
    flex:1
  },
  textInput:{
    backgroundColor:'transparent',
    flex:1,
    color:'black',
    paddingLeft:'25%',
    opacity: 2,
  },
  separator1: {
    marginVertical: 10,
    borderBottomColor: 'transparent',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  messageBoxTitleText:{
    fontWeight: 'bold',
    marginLeft:'40%',
    marginRight:'40%'

  }
  
 
})

export default Formulario;
