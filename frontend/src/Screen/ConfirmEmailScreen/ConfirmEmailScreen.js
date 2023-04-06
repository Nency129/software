import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomInput from '../../component/CustomInput/CustomInput'
import CustomButton from '../../component/CustomButton/CustomButton';
 import { useNavigation } from '@react-navigation/native';
 import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

const ConfirmEmailScreen = () => {
    const [code, setCode] = useState('');

    const navigation = useNavigation();

    const onConfirmPressed = () => {
       navigation.navigate('Home');
    };

    const onSignInPress = () => {
        navigation.navigate('SignIn');
    }

    const onResendPress = () => {
        console.warn('onResendPressed')
    }

    return (

        <View style={styles.container}>
        <View style={styles.container1}>
          <View style={styles.root}>
            <Text style={styles.title}>
                Confirm your Email
            </Text>

            <Text style={styles.Codelabel}>Code:</Text>
            <CustomInput
                placeholder="Enter your confirmation code"
                value={code}
                setValue={setCode}
            />

            <CustomButton
                text="Confirm"
                onPress={onConfirmPressed}
            />

            <CustomButton
                text="Resend Code"
                onPress={onResendPress}
                type="SECONDARY"
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
        // borderWidth:2,
      },
      // linearGradient:{
      //   borderRadius:20,
      // },
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
    Codelabel: {
        color: 'gray',
        fontSize: 15,
        marginRight: 300,
        marginTop: 10,
        marginBottom: 2,
    },
});

export default ConfirmEmailScreen;