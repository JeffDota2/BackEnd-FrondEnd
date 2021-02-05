import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabBarProvider from './app/contexts/TabBarProvider';
import Formulario from './app/components/Formulario';
import DetallesEquipo from './app/components/DetallesEquipo';
import Mantenimiento from './app/components/Mantenimiento';
import Entrega from './app/components/Entrega';
import Tab from './app/components/Tab';
import TabNavigator from './app/mostrar/TabNavigator';
import {View, Text, FlatList} from 'react-native';

    
class App extends React.Component{
  constructor()
  {
    super();
    this.state={
      data:[]
    }
  }
  componentDidMount()
  {
    this.apiCall();
     
  }
  async apiCall()
  {
    let resp= await fetch('http://192.168.100.17:8000/api/donante')
    let respJson= await resp.json()
    console.warn(respJson)
    this.setState({data:respJson.donante})
  
  }
  render(){
    return (
      <View>
        <Text style={{fontSize:50, margin: 40}}>Lista de Donantes</Text>
  
          
      <FlatList
        data={this.state.data}
        renderItem={({item})=>
        <Text style={{fontSize:40 , backgroundColor:'skyblue', margin:10}}>{item}</Text>}
  
      />
      </View> 
      
    
    
            );
    }
  }
  export default App;
  