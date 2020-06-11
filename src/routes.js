import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'

const AppStack = createStackNavigator();
const Drawer = createDrawerNavigator();

import Login from './pages/Login';
import Home from './pages/Home';
import Bill from './pages/Bill';

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={ {headerShown: false} }>
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="Bill" component={Bill} />
            </AppStack.Navigator>            
        </NavigationContainer>
    );
}