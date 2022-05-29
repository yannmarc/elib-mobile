import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/home/SplashScreen';
import BottomSheet from './src/screens/auth/SeConnecter';

// Creating a variable that holds our stackNavigation

const AuthNavigation = createNativeStackNavigator()

export default function App() {
  
  return (

    // Embedding everything into the Navigator component
    <NavigationContainer>
      <AuthNavigation.Navigator>
        <AuthNavigation.Screen name = 'Se connecter' component={BottomSheet}></AuthNavigation.Screen>
        {/* handling the spash screen */}

      </AuthNavigation.Navigator>
    </NavigationContainer>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  }

});
