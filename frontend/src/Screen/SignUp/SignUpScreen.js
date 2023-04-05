import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../component/CustomInput/CustomInput';
import CustomButton from '../../component/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const navigation = useNavigation();
  // const fetchProdcuts = async ()=>{
  //   const res = await axios.post("https://api.genderize.io/", null, {params: {
  //     "name" : "jainam"
  //   }}).catch( e =>{
  //     console.log(e);
  //   }).then(()=>{
  //     console.log("succss");
  //   });
    // const data = await res.json();
    // console.log(res.data);
  // }
  

  const SubmitHandler = async e => {
    e.preventDefault();
    // await fetchProdcuts();
    
    const user = {
      username: username,
      email: email,
      password: password,
      // cpassword: passwordRepeat,
    };
    console.log(user);
    try {
      if (user) {
        // const res = await axios.post(
        //   'http://localhost:3000/api/user/signup',
        //   // "https://google.co.in",
        //   user,
        // );
        // console.log(res.data);
        // if(res.data){
        //   navigation("")
        // }
        const res = await axios.post('http://192.168.193.234:3000/api/user', user)
        console.log(res.data);
        // localStorage.setItem('signature', res.data.signature);
        // navigate('/');
      }
    } catch (error) {
      console.log('error form content', error);
    }
    setUsername('');
    setPassword('');
    setEmail('');
    setPasswordRepeat('');
  };

  // const onRegisterPressed = () => {
  //     navigation.navigate('ConfirmEmail');
  // };

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
    <View style={styles.root}>
      <Text style={styles.title}>Create an account</Text>

      <Text style={styles.label}>Username*</Text>
      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUsername}
      />

      <Text style={styles.emaillabel}>Email*</Text>
      <CustomInput placeholder="Email" value={email} setValue={setEmail} />

      <Text style={styles.label}>Password*</Text>
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />

      <Text style={styles.confirmpasslabel}>Confirm Password</Text>
      <CustomInput
        placeholder=" Confirm Password"
        value={passwordRepeat}
        setValue={setPasswordRepeat}
        secureTextEntry={true}
      />

      <CustomButton text="Register" onPress={SubmitHandler} />

      <Text style={styles.text}>
        By Registering, you confirm that you accept our
        <Text style={styles.link} onPress={onTermsOfUsePressed}>
          {' '}
          Terms of Use{' '}
        </Text>{' '}
        and{' '}
        <Text style={styles.link} onPress={onPrivacyPolicyPressed}>
          Privacy Policy{' '}
        </Text>
      </Text>

      <CustomButton
        text="Sign In with Google"
        onPress={onSignInGoogle}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />

      <CustomButton
        text="Have an account? Sign In"
        onPress={onSignInPress}
        type="TERTIARY"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
    marginBottom: 10,
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
    marginRight: 275,
    marginTop: 10,
    marginBottom: 2,
  },

  confirmpasslabel: {
    color: 'gray',
    fontSize: 15,
    marginRight: 280,
    marginTop: 10,
    marginBottom: 2,
  },
  emaillabel: {
    color: 'gray',
    fontSize: 15,
    marginRight: 294,
    marginTop: 10,
    marginBottom: 2,
  },
});
export default SignUpScreen;
