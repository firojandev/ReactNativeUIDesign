import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import Profile from './Profile';

const ProfileStack = createStackNavigator();

const ProfileStackScreen = ({ navigation }) => {
    return (
        <ProfileStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#d02860',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }} >
            <ProfileStack.Screen name="Profile" component={Profile} options={{
                title: 'Profile',
                headerLeft: () => (
                    <Icon.Button name="ios-menu" size={25} backgroundColor="#d02860" onPress={
                        () => {
                            navigation.openDrawer();
                        }
                    } >

                    </Icon.Button>
                )
            }} />

        </ProfileStack.Navigator>
    )
}

export default ProfileStackScreen;