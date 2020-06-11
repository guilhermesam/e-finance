import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'

import Bill from './pages/Bill';
import Home from './pages/Home';
import Help from './pages/Help';
import Historic from './pages/Historic'
import Login from './pages/Login';
import Settings from './pages/Settings'
import Statistics from './pages/Statistics'

const AppStack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={ {headerShown: false} }>
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="Bill" component={Bill} />
                <AppStack.Screen name="Help" component={Help} />
                <AppStack.Screen name="Settings" component={Settings} />
                <AppStack.Screen name="Historic" component={Historic} />
                <AppStack.Screen name="Statistics" component={Statistics} />
            </AppStack.Navigator>            
        </NavigationContainer>
    );
}