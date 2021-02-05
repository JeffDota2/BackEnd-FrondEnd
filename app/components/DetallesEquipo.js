import React from 'react';
import { Text, TextInput,View,Button, ImageBackground, StyleSheet } from 'react-native';

const image = { uri: "" };
const DetallesEquipo = () => {
 
        return(
            
<ImageBackground  style={{width: '100%', height: '100%'}}>
          <View style={styles.container}>
            <View>
            <View>
               <Text style={styles.messageBoxTitleText}>Detllaes del Equipo</Text>
            </View>
              <View style={styles.containerDetalles}>
                <TextInput placeholder="Tipo de Equipo" placeholderTextColor="gray"
                style={styles.textInput}
                
                /> 
              </View>
              <View style={styles.separator1}/>
              <View style={styles.containerDetalles}>
                <TextInput placeholder="Ram" placeholderTextColor="gray"
                style={styles.textInput}
              
                /> 

</View>
              <View style={styles.separator1}/>
              <View style={styles.containerDetalles}>
                <TextInput placeholder="Procesador" placeholderTextColor="gray"
                style={styles.textInput}
              
                /> 

</View>
              <View style={styles.separator1}/>
              <View style={styles.containerDetalles}>
                <TextInput placeholder="Alamacenamiento" placeholderTextColor="gray"
                style={styles.textInput}
              
                /> 

</View>
              <View style={styles.separator1}/>
              <View style={styles.containerDetalles}>
                <TextInput placeholder="Sistema Operativo" placeholderTextColor="gray"
                style={styles.textInput}
              
                /> 



              </View>
              <View style={styles.separator2}/>

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

    containerDetalles:{
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
    marginLeft:'30%',
    marginRight:'30%'
    

  },
  separator2: {
    marginVertical: 40,
    borderBottomColor: 'transparent',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  
 
})

export default DetallesEquipo;
