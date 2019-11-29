import React, { Component } from 'react'
import { Alert,  StyleSheet, Text, KeyboardAvoidingView, Image,Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import api from '../services/api';

export default class Login extends Component {

  state = {
         erroMessage:'',
         nome: '',
         matricula:'',
         email:'',
         senha:'',
         csenha: '',
    };
 

  Cadastrar = async () => {
    try {
      const response = await api.post( '/users' , { 
        username: this.state.nome,
        registration_id: this.state.matricula,
        email: this.state.email, 
        password: this.state.csenha, 
      } );
       console.log('cadastrado');
       console.log(response);
    }catch (response){
      this.setState({ erroMessage : response.data.error});
      console.log(response);
    }

    };
    
  

  render() {
    return (
      <KeyboardAvoidingView
       style={styles.container}
       behavior="padding" enabled
       >

        <Image style={styles.welcomeImage} source={require('../assets/images/carro.png')}
        />
        <Text style={styles.welcome}>Bem vindo ao Free Parking!</Text>
        <Text style={styles.instructions}>Encontre sua vaga </Text>
        { !!this.state.erroMessage && <Text>{ this.state.erroMessage } </Text>}
        
        <TextInput
          style={styles.ctexto} 
          placeholder="Digite seu nome"
          onChangeText={text => this.setState({nome : text})}
          
        />
        <TextInput
          style={styles.ctexto} 
          placeholder="Digite sua matrícula"
          onChangeText={text => this.setState({matricula : text})}
          
        />
        <TextInput
          style={styles.ctexto} 
          placeholder="Digite seu email"
          onChangeText={text => this.setState({email : text})}
          
        />
        <TextInput
          style={styles.ctexto} 
          placeholder="Digite sua senha"
          secureTextEntry={true}
          onChangeText={text => this.setState({senha : text})}
          
        />
        <TextInput
          style={styles.ctexto} 
          placeholder="Repita sua senha"
          secureTextEntry={true}
          onChangeText={text => this.setState({csenha : text})}
          
        />

        <Button style={styles.botao} onPress={ this.Cadastrar} title="Confirmar"/>
    
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
    padding: 10,
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 4,
    borderColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center'
  },
  botao: {
    width: 100,
    backgroundColor: '#4CB1F7',
    marginTop: 10,
    padding: 15,
    borderRadius: 4,
    borderColor: '#F2F2F2'
  }
});
