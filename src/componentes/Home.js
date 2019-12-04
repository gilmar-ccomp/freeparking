import React, { Component } from 'react';
import {Text, KeyboardAvoidingView, Picker, StyleSheet, TouchableOpacity } from 'react-native';


export default class Home extends Component {
  state={
    unidades:'',
  }
  
  render() {
/*const { navigation } = this.props;
const nomeUsuario = navigation.getParam('nome');*/

const {navigate} = this.props.navigation;

    return (
      <KeyboardAvoidingView
       style={styles.container}
       behavior="padding" enabled
       >
         <Text>Olá </Text>
        
        <Text style={styles.welcome}>Bem vindo ao Free Parking!</Text>
        <Picker
            selectedValue={this.state.unidades}
            style={ styles.list}
            onValueChange={(itemValue, itemIndex) =>
            this.setState({unidade: itemValue})
         }>
             <Picker.Item label="Selecione uma das unidades" value="" />
             <Picker.Item label="Unidade 1" value="1" />
             <Picker.Item label="Unidade 3" value="3" />
             <Picker.Item label="Unidade 4" value="4" />
             <Picker.Item label="Unidade 6" value="6" />
             <Picker.Item label="Unidade 9" value="9" />
             <Picker.Item label="Unidade 10" value="10" />
             <Picker.Item label="Unidade 11" value="11" />
             <Picker.Item label="Unidade 20" value="20" />
         </Picker>

         <TouchableOpacity style={styles.botao} onPress={ () => navigate('Vagas') }>
          <Text>Ver vagas disponíveis</Text>
          </TouchableOpacity>
        
       
        </KeyboardAvoidingView>
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
  welcomeImage: {
    width: 150,
    height: 150,
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
  },
  picker: {

  },
  list:{
    height: 50,
    width: 300,
    alignItems: 'center',
    justifyContent: "center"
  }

});
