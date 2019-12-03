import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './Login';
import Cadastrar from './Cadastrar';
import cadastro from './Cadastro';
import Home from './Home';
import Vagas from './Vagas';

const MainNav = createStackNavigator (
{
    Login:{
        screen: Login,
        navigationOptions:{
            header: null
        }
    },
    Cadastrar:{
        screen: Cadastrar,
        navigationOptions:{
            header: null
        }
    },
    Cadastro:{
        screen: cadastro,
        navigationOptions:{
            headerTitle: 'Cadastro Realizado'

        }
    },
    Home:{
        screen: Home,
        navigationOptions:{
            headerTitle:'Bem vindo'
        }
    },
    Vagas:{
        screen: Vagas,
        navigationOptions:{
            headerTitle:'Selecione uma vaga'
        }
    }
}    
)

export default Rotas = createAppContainer(MainNav);