import { View, Text } from 'react-native'
import React from 'react'
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WatchList from '../../screens/WatchList';
import Favourite from '../../screens/Favourite';
import LoginScreen from '../../screens/Login';
import SignUpScreen from '../../screens/SignUp';
import MyTab from '../Tab/Tab';
import { COLORS } from '../../utils/colors';
import DetailScreen from '../../screens/DetailScreen';
const Stack = () => {

    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator >
     <Stack.Screen name='Login' component={LoginScreen} options={{headerShown:false}}/>
     <Stack.Screen name='Sign' component={SignUpScreen} options={{headerShown:false}}/>
     <Stack.Screen name='Detail' component={DetailScreen} options={{headerShown:false}}/>
     <Stack.Screen name='Tab' component={MyTab} options={{headerShown:false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Stack