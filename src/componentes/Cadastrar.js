import React, { Component } from 'react'
import { Alert,  StyleSheet, Text, View, Image,Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { navigation } from 'react-navigation-stack';
import api from '../services/api';

export default class Login extends Component {

  state = {
         erroMessage:'',
        //construtor de senha e email vazios
        //nome: '',
        //senha: ''
    };
 

  Logar = async () => {
    try {
      const response = await api.post( '/auth' , { 
        email: '07.gilmar@gmail.com' , 
        password: '123', 
      } )
      . then ( function ( response )  { 
        Alert.alert( response ) ;
      } )
      . catch ( function ( error )  { 
        Alert.alert ( error ) ;
      } ) ;
  
      const { token } = response.data;
  
      await AsyncStorage.multset([
        ['@CodeApi:token', token]
      ]);

       console.log(response);
    }catch (response){
      this.setState({ erroMessage : response.data.error});
    }

    };
    
  

  render() {
    return (
      <View style={styles.container}>

        <Image style={styles.welcomeImage} source={require('../assets/images/carro.png')}
        />
        <Text style={styles.welcome}>Bem vindo ao Free Parking!</Text>
        <Text style={styles.instructions}>Encontre sua vaga </Text>
        { !!this.state.erroMessage && <Text>{ this.state.erroMessage } </Text>}
        <TextInput style={styles.ctexto} placeholder='Digite sua matrícula'></TextInput>
        <TextInput style={styles.ctexto} secureTextEntry={true} placeholder='Digite sua senha'></TextInput>
        <Button style={styles.botao} onPress={ this.Logar} title="Logar"/>
    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0D0CBF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  imageIcon: {
    width: 150,
    height: 150
  },
  welcomeImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  ctexto: {
    marginTop: 10,
    padding: 15,
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 4,
    borderColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center'
  },
  botao: {
    width: 300,
    backgroundColor: '#4CB1F7',
    marginTop: 10,
    padding: 15,
    borderRadius: 4,
    borderColor: '#F2F2F2'
  }
});
