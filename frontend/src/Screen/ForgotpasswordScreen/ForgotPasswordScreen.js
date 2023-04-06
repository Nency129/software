import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomInput from '../../component/CustomInput/CustomInput'
import CustomButton from '../../component/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

const ForgotPasswordScreen = () => {
    const [username, setUsername] = useState('');

    const navigation = useNavigation();

    const onSendPressed = () => {
        navigation.navigate('Newpassword');
    };

    const onSignInPress = () => {
        navigation.navigate('SignIn');
    }

    return (
    <View style={styles.container}>
        <View style={styles.container1}>
          <View style={styles.root}>
     
        
            <Text style={styles.title}>
                Reset Password
            </Text>

            <Text style={styles.label}>
                Username*
            </Text>

            <CustomInput
                placeholder="Username"
                value={username}
                setValue={setUsername}
            />

            <CustomButton
                text="Send"
                onPress={onSendPressed}
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
        marginVertical: 12,
    },
    label: {
        color: 'gray',
        fontSize: 15,
        marginRight:210,
        marginTop: 15,
        marginBottom: 2,
    },
});

export default ForgotPasswordScreen;