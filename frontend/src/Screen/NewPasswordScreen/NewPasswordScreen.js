import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomInput from '../../component/CustomInput/CustomInput';
import CustomButton from '../../component/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
const NewPasswordScreen = () => {
    const [code, setCode] = useState('');
    const [newpassword, setNewPassword] = useState('');

    const navigation=useNavigation();

    const onSubmitPressed = () => {
        navigation.navigate('Home');
    };

    const onSignInPress = () => {
        navigation.navigate('SignIn');
    }

    return (

        <View style={styles.container}>
        <View style={styles.container1}>
          <View style={styles.root}>
            <Text style={styles.title}>
                Reset your password
            </Text>

            <Text style={styles.label1}>Code</Text>
            <CustomInput
                placeholder="Code"
                value={code}
                setValue={setCode}
            />
            <Text style={styles.label}>New Password</Text>
            <CustomInput
                placeholder="Enter new password"
                value={newpassword}
                setValue={setNewPassword}
            />

            <CustomButton
                text="Submit"
                onPress={onSubmitPressed}
            />

            <CustomButton
                text="Back to Sign In"
                onPress={onSignInPress}
                type="TERTIARY"
            />

        </View>
        </View>
        </View>

    );
};

const styles = StyleSheet.create({

    root: {
        alignItems: 'center',
        padding: 20,
        marginTop: 100,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: '#F6F1F1',
       
      },
      
      container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      container1: {
        height: hp('35%'),
        backgroundColor: '#19376D',
        // marginLeft:hp('10%'),
        // overflow:'hidden',
        borderBottomLeftRadius: hp('8%'),
        borderBottomRightRadius: hp('8%'),
      },
    
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },
    link: {
        color: '#FDB075',
    },
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    label: {
        color: 'gray',
        fontSize: 15,
        marginRight: 180,
        marginTop: 10,
        marginBottom: 2,
    },
    label1: {
        color: 'gray',
        fontSize: 15,
        marginRight: 250,
        marginTop: 10,
        marginBottom: 2,
    },

});

export default NewPasswordScreen;