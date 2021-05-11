
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './components/common/MainTabScreen';
import DrawerContent from './components/common/DrawerContent';
import SettingScreen from './components/settings/SettingScreen';
import RootStackScreen from './components/common/RootStackScreen';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

import { AuthContext } from './components/context';

const Drawer = createDrawerNavigator();


const App = () => {


  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => ({
    login: () => {
      setUserToken('altaf');
      setIsLoading(false);
    },
    logout: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    signup: () => {
      setUserToken(null);
      setIsLoading(false);
    }
  }));

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }


  return (

    <AuthContext.Provider value={authContext} >
      <NavigationContainer>

        { userToken != null ? 

        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="Home" component={MainTabScreen} />
          <Drawer.Screen name="SettingScreen" component={SettingScreen} />
        </Drawer.Navigator>

        :

        <RootStackScreen />

       }

      </NavigationContainer>

    </AuthContext.Provider>



  );
};


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});