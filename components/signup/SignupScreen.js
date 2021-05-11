import React from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    StatusBar,
    Alert,
    Platform,
    ScrollView
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';


const SignupScreen = ({navigation}) => {
    const [data, setData] = React.useState({
        email: '',
        password: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });

    const textInputChange = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false
            });
        }
    }


    const handlePasswordChange = (val) => {
        if (val.trim().length >= 8) {
            setData({
                ...data,
                password: val,
                secureTextEntry: true
            });
        } else {
            setData({
                ...data,
                password: val,
                secureTextEntry: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const handleConfirmPasswordChange = (val) => {
        if (val.trim().length >= 8) {
            setData({
                ...data,
                confirm_password: val,
               confim_secureTextEntry: true
            });
        } else {
            setData({
                ...data,
                confirm_password: val,
                confim_secureTextEntry: false
            });
        }
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confrim_secureTextEntry: !data.confrim_secureTextEntry
        });
    }


    return (
        <View style={styles.container}>
             <StatusBar backgroundColor='#009387' barStyle="light-content" />
             
            <View style={styles.header}>
                <Text style={styles.text_header}>Register now</Text>
            </View>

            <Animatable.View animation="fadeInUpBig"
                style={styles.footer}
            >
                <ScrollView>

                <View style={styles.footer}>
                    <Text style={styles.text_footer}>Email</Text>

                    <View style={styles.action}>
                        <FontAwesome
                            name="user-o"
                            color="#05375a"
                            size={20}
                        />

                        <TextInput
                            placeholder="Enter your email"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => textInputChange(val)}
                        />
                        {data.check_textInputChange ?

                            <Animatable.View animation="bounceIn">

                                <Feather
                                    name="check-circle"
                                    color="green"
                                    size={20}
                                />

                            </Animatable.View>
                            : null}

                    </View>

                    <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="lock"
                            color="#05375a"
                            size={20}
                        />

                        <TextInput
                            placeholder="Enter your password"
                            secureTextEntry={data.secureTextEntry ? true : false}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => handlePasswordChange(val)}
                        />
                        <TouchableOpacity
                            onPress={updateSecureTextEntry}
                        >

                            {data.secureTextEntry ?
                                <Feather
                                    name="eye-off"
                                    color="grey"
                                    size={20}
                                />
                                :

                                <Feather
                                    name="eye"
                                    color="grey"
                                    size={20}
                                />
                            }

                        </TouchableOpacity>

                    </View>


                    <Text style={[styles.text_footer, { marginTop: 35 }]}>Confirm Password</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="lock"
                            color="#05375a"
                            size={20}
                        />

                        <TextInput
                            placeholder="Enter confirm password"
                            secureTextEntry={data.confirm_secureTextEntry ? true : false}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => handleConfirmPasswordChange(val)}
                        />
                        <TouchableOpacity
                            onPress={updateConfirmSecureTextEntry}
                        >

                            {data.confirm_secureTextEntry ?
                                <Feather
                                    name="eye-off"
                                    color="grey"
                                    size={20}
                                />
                                :

                                <Feather
                                    name="eye"
                                    color="grey"
                                    size={20}
                                />
                            }

                        </TouchableOpacity>

                    </View>




                    <View style={styles.button}>
                        <TouchableOpacity
                            style={styles.signIn}
                            onPress={() => Alert.alert('Ok')}>
                            <LinearGradient
                                colors={['#08d4c4', '#01ab9d']}
                                style={styles.signIn}
                            >
                                <Text style={[styles.textSign, {
                                    color: '#fff'
                                }]}>Sign Up</Text>
                            </LinearGradient>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}
                            style={[styles.signIn, styles.signup]} >
                            <Text style={[styles.textSign, { color: '#009387' }]}>Login</Text>
                        </TouchableOpacity>


                    </View>




                </View>
                    
                </ScrollView>

            </Animatable.View>

        </View>
    );
};

export default SignupScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },

    signup: {
        borderColor: '#009387',
        borderWidth: 1,
        marginTop: 15
    }

});