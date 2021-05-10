import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch} from 'react-native-paper';

import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function DrawerContent(props) {
    return (
        <View style={styles.topflex}>

            <DrawerContentScrollView { ... props}>

                <View>

                    <Text>Main Content</Text>


                </View>


            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>

                <DrawerItem
                icon= {({color, size}) => (
                    <MaterialCommunityIcons name="exit-to-app" color={color} size={size} />
                )}
                 label="Logout"
                 onPress={() => {}}>

                </DrawerItem>

            </Drawer.Section>
           
        </View>
    );
}

export default DrawerContent;

const styles = StyleSheet.create({
    topflex: {
        flex:1
    },
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });