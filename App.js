
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


  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

  const initalLoginState = {

    isLoading: true,
    userName: null,
    userToken: null,

  };

  const loginReducer = (prevState, action) => {

    switch (action.type) {

      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };

    }

  };

  const [loginState, dispatch] = React.useReducer(loginReducer,initalLoginState);

  const authContext = React.useMemo(() => ({
    login: (userName, password) => {
     // setUserToken('altaf');
     // setIsLoading(false);

     let userToken;
     userToken = null;
     if( userName == 'user' && password == 'pass' ){
       userToken = 'dgdgdg';
     }

     dispatch({type:'LOGIN',id:userName, token:userToken});


    },
    logout: () => {
    //  setUserToken(null);
     // setIsLoading(false);
     dispatch({type:'LOGOUT'});
    },
    signup: () => {
     // setUserToken(null);
     // setIsLoading(false);
    }
  }));

  useEffect(() => {
    setTimeout(() => {
      //setIsLoading(false);
      dispatch({type:'RETRIEVE_TOKEN',token:'dgdgdg'});
    }, 1000);

  }, []);

  if (loginState.isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }


  return (

    <AuthContext.Provider value={authContext} >
      <NavigationContainer>

        {loginState.userToken != null ?

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