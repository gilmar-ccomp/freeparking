import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Login from './Login';
import Cadastrar from './Cadastrar';
import Reservar from './Reservar';
import Home from './Home';
import Vagas from './Vagas';
import Estacionar from './Estacionar';

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
    Reservar:{
        screen: Reservar,
        navigationOptions:{
            headerTitle: 'Faça sua Reserva'

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
    },
    Estacionar:{
        screen: Estacionar,
        navigationOptions:{
            headerTitle:'Confirme sua entrada'
        }
    }
}    
)

export default Rotas = createAppContainer(MainNav);