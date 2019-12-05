import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Login from './Login';
import Reservar from './Reservar';

Icon.loadFont();

const mainNavigation = createMaterialBottomTabNavigator(
  {
   Estacionar: {
      screen: Login,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => (
          <Icon name="lock" size={20} color={focused ? '#fff' : '#ddd'} />
        ),
      }),
    },
    Reservar: {
      screen: Reservar,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => (
          <Icon name="rocket" size={20} color={focused ? '#fff' : '#ddd'} />
        ),
      }),
    },
  },
  {
    barStyle: {
      backgroundColor: '#7159c1',
    },
  },
);

export default createAppContainer(mainNavigation);