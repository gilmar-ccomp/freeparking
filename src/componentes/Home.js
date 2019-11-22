import React, { Component } from 'react';
import {Text, View, Image } from 'react-native';



export default class Home extends Component {
  
  
  render() {
const { navigation } = this.props;
const nomeUsuario = navigation.getParam('nome');

    return (
      <View style={styles.container}>
        
        <Text style={styles.welcome}>Bem vindo ao Free Parking!</Text>

        <Text>Olá { nomeUsuario }</Text>
       
      </View>
    );
  }
}