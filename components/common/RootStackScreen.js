import React from 'react';
import { View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './SplashScreen';
import LoginScreen from '../login/LoginScreen';
import SignupScreen from '../signup/SignupScreen';

const RootStack = createStackNavigator();

function RootStackScreen({ navigation }) {
    return (
        <RootStack.Navigator headerMode='none'>
            <RootStack.Screen name="SplashScreen" component={SplashScreen} />
            <RootStack.Screen name="LoginScreen" component={LoginScreen} />
            <RootStack.Screen name="SignupScreen" component={SignupScreen} />
        </RootStack.Navigator>
    );
}

export default RootStackScreen;