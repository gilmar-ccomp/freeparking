import React, { Component } from 'react'
import { Alert,  StyleSheet, Text, Image, AsyncStorage , Platform, KeyboardAvoidingView} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import api from '../services/api';



export default class Login extends Component {

  state = {
         erroMessage: null,
        //construtor de senha e email vazios
        nome: '',
        matricula:'',
        email:'',
        senha: '',
    }; 

  Logar = async () => {
    try {
      const response = await api.post('/auth', { 
        email: this.state.email, 
        password: this.state.senha, 
      } );
  
      const { token } = response.data;
  
      await AsyncStorage.multiSet([
        ['@CodeApi:token', token]
      ]);

       console.log(response);
       Alert.alert('Logado');
       
        if(token) {
          this.props.navigation.navigate('Home');
          }
    }catch (response){
      console.log('deu erro');
      console.log(response);
      this.setState({ erroMessage: response.data.error})
    }

    };    
  

  render() {

    const {navigate} = this.props.navigation;

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
          placeholder="Digite seu email"
          onChangeText={text => this.setState({email:text})}
          
        />
        <TextInput
          style={styles.ctexto} 
          placeholder="Digite sua senha"
          secureTextEntry={true}
          onChangeText={text => this.setState({senha : text})}
          
        />

        
        <TouchableOpacity style={styles.botao} onPress={ this.Logar}>
          <Text>Logar</Text>
          </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={ () => navigate('Cadastrar') }>
          <Text>Cadastrar</Text>
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
    color:'#fff',
    backgroundColor: '#4CB1F7',
    marginTop: 10,
    padding: 15,
    borderRadius: 4,
    borderColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
