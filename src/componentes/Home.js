import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Estacionar from './Estacionar';
import Reservar from './Reservar';

Icon.loadFont();

const mainNavigation = createMaterialBottomTabNavigator(
  {
   
    Reservar: {
      screen: Reservar,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => (
          <Icon name="rocket" size={20} color={focused ? '#fff' : '#ddd'} />
        ),
      }),
    },
    Estacionar: {
      screen: Estacionar,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => (
          <Icon name="lock" size={20} color={focused ? '#fff' : '#ddd'} />
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