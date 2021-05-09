import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import Notifications from './Notifications';


const NotificationStack = createStackNavigator();

const NotificationStackScreen = ({ navigation }) => {
    return (
        <NotificationStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#009387',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }} >
            <NotificationStack.Screen name="Notifications" component={Notifications} options={{
                title: 'Notifications',
                headerLeft: () => (
                    <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={
                        () => {
                            navigation.openDrawer();
                        }
                    } >

                    </Icon.Button>
                )
            }} />

        </NotificationStack.Navigator>
    )
}


export default NotificationStackScreen;