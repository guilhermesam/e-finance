import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from './pages/Home';
import Bill from './pages/Bill';
import Help from './pages/Help';
import Historic from './pages/Historic';
import Settings from './pages/Settings';
import Statistics from './pages/Statistics';





const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Bill" component={Bill} />
        <Drawer.Screen name="Help" component={Help} />
        <Drawer.Screen name="Historic" component={Historic} />
        <Drawer.Screen name="Statistics" component={Statistics} />
        <Drawer.Screen name="Settings" component={Settings} />
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}