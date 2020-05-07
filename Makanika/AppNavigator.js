import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './components/Login';
import Home from './components/Home';


const AppNavigator = createStackNavigator({
  Login: { screen: Login },
  Home: { screen: Home },
});

export default createAppContainer(AppNavigator);