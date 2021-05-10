import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';

import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function DrawerContent(props) {
    return (
        <View style={styles.topflex}>

            <DrawerContentScrollView {...props}>

                <View style={styles.drawerContent}>

                    <View style={styles.userInfoSection}>
                        <View style={styles.avatarimage}>
                            <Avatar.Image source={{
                                uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                            }}
                              size={50}
                            />
                        </View>
                        <View style={styles.userinfo}>
                            <Title style={styles.title}>Altaf</Title>
                            <Caption style={styles.caption}>@firojandev</Caption>
                        </View>
                    </View>
                    
                    <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>3</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>10</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>
                    </View>


                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <MaterialCommunityIcons 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <MaterialCommunityIcons 
                                name="account-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />
                       
                        <DrawerItem 
                            icon={({color, size}) => (
                                <MaterialCommunityIcons 
                                name="account-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Settings"
                            onPress={() => {props.navigation.navigate('SettingScreen')}}
                        />
                        
                    </Drawer.Section>


                </View>


            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>

                <DrawerItem
                    icon={({ color, size }) => (
                        <MaterialCommunityIcons name="exit-to-app" color={color} size={size} />
                    )}
                    label="Logout"
                    onPress={() => { }}>

                </DrawerItem>

            </Drawer.Section>

        </View>
    );
}

export default DrawerContent;

const styles = StyleSheet.create({
    avatarimage: {
        marginTop: 15,
    },
    userinfo: {
        marginLeft: 15,
        marginTop:6,
        flexDirection: 'column'
    },
    topflex: {
        flex: 1
    },
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        flexDirection:'row',
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
        marginLeft:3,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft:20,
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