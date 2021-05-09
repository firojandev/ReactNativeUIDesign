
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './components/home/HomeScreen';
import Notifications from './components/notifications/Notifications';

const HomeStack = createStackNavigator();
const NotificationStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({ navigation }) => {
  return (
    <HomeStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }} >
      <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title: 'Overview',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={
            () => {
              navigation.openDrawer();
            }
          } >

          </Icon.Button>
        )
      }} />

    </HomeStack.Navigator>
  )
}

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
        title: 'Notifications'
      }} />

    </NotificationStack.Navigator>
  )
}


const App = () => {

  return (

    <NavigationContainer>

      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Notifications" component={NotificationStackScreen} />
      </Drawer.Navigator>

      {/* <Stack.Navigator screenOptions={{
          headerStyle:{
            backgroundColor:'#009387',
          },
          headerTintColor:'#fff',
          headerTitleStyle:{
            fontWeight:'bold'
          }
        }} >
        <Stack.Screen name="Home" component={HomeScreen} options={{
          title:'Home'
        }}  />
        <Stack.Screen name="Details" component={DetailScreen} options={{
          title:'Details Screen'
        }} />
      </Stack.Navigator> */}

    </NavigationContainer>

  );
};


export default App;
