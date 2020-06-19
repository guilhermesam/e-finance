import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack'

import { NavigationContainer } from '@react-navigation/native';

import Home from './pages/Home';
import AddBill from './pages/AddBill';
import Help from './pages/Help';
import Historic from './pages/Historic';
import Settings from './pages/Settings';
import Statistics from './pages/Statistics';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Página Inicial" component={Home} />
        <Drawer.Screen name="Adicionar Conta" component={AddBill} />
        <Drawer.Screen name="Histórico" component={Historic} />
        <Drawer.Screen name="Estatísticas" component={Statistics} />
        <Drawer.Screen name="Configurações" component={Settings} />
        <Drawer.Screen name="Ajuda" component={Help} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}