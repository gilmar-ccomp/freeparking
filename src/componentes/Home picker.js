import React, { Component } from 'react';
import {Text, View, Picker } from 'react-native';


export default class Home extends Component {
  state={
    unidades:'',
  }
  
  render() {
const { navigation } = this.props;
const nomeUsuario = navigation.getParam('nome');

    return (
      <View style={styles.container}>
        
        <Text style={styles.welcome}>Bem vindo ao Free Parking!</Text>
        <Picker
        style = {styles.picker}
        selectedValue={this.state.unidades}
        onValueChange={
          (itemValor, itemIndex) => this.setState({
            unidades: itemValor
          })
        }
        >
          <Picker.item label="Selecione sua Unidade Uninorte para ver as vagas" value=""/>
          <Picker.item label="Unidade 1" value="Unidade 1"/>
          <Picker.item label="Unidade 1" value="Unidade 10"/>
          <Picker.item label="Unidade 1" value="Unidade 6"/>
          <Picker.item label="Unidade 1" value="Unidade 4"/>
          <Picker.item label="Unidade 1" value="Unidade 11"/>
        </Picker>

        <Text>Olá { nomeUsuario }</Text>
       
      </View>
    );
  }
}