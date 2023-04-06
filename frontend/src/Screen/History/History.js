import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../component/CustomInput/CustomInput';
import CustomButton from '../../component/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


const History = () => {
  
  const navigation = useNavigation();
 
  const SubmitHandler = async e => {
    e.preventDefault();


  
    try {
      if (user) {
        const res = await axios.post(
          'http://192.168.193.234:3000/api/user',
          user,
        );
        console.log(res.data);
      }
    } catch (error) {
      console.log('error form content', error);
    }
    setUsername('');
    setPassword('');
    setEmail('');
    setPasswordRepeat('');
  };



  const onSignInGoogle = () => {
    console.warn('onSignInGoogle');
  };

  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };

  const onTermsOfUsePressed = () => {
    console.warn('Read trems and condition carfully');
  };

  const onPrivacyPolicyPressed = () => {
    console.warn('privacy Policy');
  };

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.root}>
          <Text style={styles.title}>Create an account</Text>

          
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


});
export default History;
