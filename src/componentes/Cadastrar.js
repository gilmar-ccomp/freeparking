import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class Cadastrar extends Component {

  cadastrar2() {
    this.props.navigation.navigate('Cadastro',{'nome': this.state.nome});
  }

  state = {
    matricula:'',
    nome:'',
    unidade:'',
    senha:'',
    csenha:''
  }
  
  render() {
    return (
      <View style={styles.container}>
        
        <Text style={styles.welcome}>Tela de Cadastro!</Text>
        <Text style={styles.instructions}>Complete os campos abaixo para se cadastrar</Text>
        <TextInput 
             style={styles.ctexto} placeholder='Digite sua matrícula'
             onChangeText = { text => this.state.matricula = text } 
             >
        </TextInput>
        <TextInput 
             style={styles.ctexto} placeholder='Digite seu nome'
             onChangeText = { text => this.state.nome = text } >
        </TextInput>
        <TextInput 
              style={styles.ctexto} placeholder='Escolha sua unidade'
              onChangeText = { text => this.state.unidade = text } >
        </TextInput>
        <TextInput
              style={styles.ctexto} placeholder='Digite sua senha'
              onChangeText = { text => this.state.senha = text } >
        </TextInput>
        <TextInput
              style={styles.ctexto} secureTextEntry={true} placeholder='Confirme sua senha'
              onChangeText = { text => this.state.csenha = text } >
        </TextInput>
        <Text style={styles.instructions}>{instructions}</Text>
        <TouchableOpacity 
              style={styles.botao}
              onPress = { () => this.cadastrar2()}>
          <Text>Confirmar</Text>
        </TouchableOpacity>
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
