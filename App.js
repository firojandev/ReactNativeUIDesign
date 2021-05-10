
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './components/common/MainTabScreen';
import DrawerContent from './components/common/DrawerContent';



const Drawer = createDrawerNavigator();


const App = () => {

  return (

    <NavigationContainer>

      <Drawer.Navigator drawerContent={props => <DrawerContent { ...props } />}>
        <Drawer.Screen name="Home" component={MainTabScreen} />
        {/* <Drawer.Screen name="Notifications" component={NotificationStackScreen} /> */}
      </Drawer.Navigator>

    </NavigationContainer>

  );
};


export default App;
