import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
// import Logo from '../../../assests/images/Logo.jpg';
import CustomInput from '../../component/CustomInput/CustomInput';
import CustomButton from '../../component/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const SignInscreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const onSignInPressed = () => {
    navigation.navigate('Home');
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate('forgotPassword');
  };

  const onSignInGoogle = () => {
    console.warn('onSignInGoogle');
  };

  const onSignUpPress = () => {
    navigation.navigate('SignUp');
  };
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.root}>
          <Text style={styles.title}>Sign In</Text>
          {/* <Image
                source={Logo}
                style={[styles.logo]}
                resizeMode="contain"
            /> */}

          <Text style={styles.label}>Username*</Text>
          <CustomInput
            placeholder="Username"
            value={username}
            setValue={setUsername}
          />

          <Text style={styles.label}>Password*</Text>
          <CustomInput
            placeholder="Password"
            value={password}
            setValue={setPassword}
            secureTextEntry={true}
          />

          <CustomButton text="Sign In" onPress={onSignInPressed} />

          <CustomButton
            text="Forgot Password?"
            onPress={onForgotPasswordPressed}
            type="TERTIARY"
          />

          <CustomButton
            text="Sign In with Google"
            onPress={onSignInGoogle}
            bgColor="#FAE9EA"
            fgColor="#DD4D44"
          />

          <CustomButton
            text="Don't have an account? Create one"
            onPress={onSignUpPress}
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
  logo: {
    width: '50%',
    maxWidth: 250,
    maxheight: 150,
    height: '40%',
  },
  label: {
    color: 'gray',
    fontSize: 15,
    marginRight: 220,
    marginTop: 15,
    marginBottom: 2,
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
    marginBottom: 10,
  },
});
export default SignInscreen;
