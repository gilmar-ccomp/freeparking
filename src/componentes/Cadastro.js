import React, { Component } from 'react';
import { Alert, Platform, StyleSheet, Text, View, Image } from 'react-native';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class cadastro extends Component {
  
  
  render() {
const { navigation } = this.props;
const nomeUsuario = navigation.getParam('nome');

    return (
      <View style={styles.container}>
        <Image style={styles.welcomeImage} source={require('../assets/images/carro.png')}
        />
        <Text style={styles.welcome}>Bem vindo ao Free Parking!</Text>

        <Text>Olá { nomeUsuario }</Text>
       
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
    height:150
  },
  welcomeImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  ctexto:{
    marginTop:10,
    padding:15,
    width:300,
    backgroundColor:'#fff',
    borderRadius:4,
    borderColor: '#F2F2F2',
    alignItems:'center',
    justifyContent:'center'
  },
  botao:{
    width:300,
    backgroundColor:'#4CB1F7',
    marginTop:10,
    padding:15,
    borderRadius:4,
    borderColor: '#F2F2F2'
  }
});
