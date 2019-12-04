import React, { Component } from 'react';
import {Text, KeyboardAvoidingView, FlatList, StyleSheet , TouchableOpacity} from 'react-native';


export default class Vagas extends Component {

  render() {
    
    return (
      <KeyboardAvoidingView
       style={styles.container}
       behavior="padding" enabled
       >
         <Text>Olá</Text>
        
        <Text style={styles.welcome}>Bem vindo ao Free Parking! Verifique as vagas</Text>

        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Dan'},
            {key: 'Dominic'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      
         <TouchableOpacity style={styles.botao}>
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
