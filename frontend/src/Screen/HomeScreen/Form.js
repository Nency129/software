import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../component/CustomInput/CustomInput';
import CustomButton from '../../component/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Form = () => {
  const navigation = useNavigation();

  const [Name, setName] = useState('');
  const [DOB, setDOB] = useState('');
  const [phone, setPhone] = useState('');
  const [add, setAdd] = useState('');
  const [aadhar, setAadhar] = useState('');
  const onSavePressed = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.root}>
          <Text style={styles.title}>Build Your Profile</Text>

          <Text style={styles.label}>Name*</Text>
          <CustomInput
            placeholder="Enter your Name"
            value={Name}
            setValue={setName}
          />

          <Text style={styles.label}>DOB*</Text>
          <CustomInput
            placeholder="e.g.12/1/2000"
            value={DOB}
            setValue={setDOB}
            secureTextEntry={true}
            type={Date}
          />

          <Text style={styles.addlabel}>Address*</Text>
          <CustomInput
            value={phone}
            setValue={setPhone}
            secureTextEntry={true}
          />

          <Text style={styles.label}>Phone*</Text>
          <CustomInput value={add} setValue={setAdd} secureTextEntry={true} />

          <Text style={styles.text}>Aadhar Number*</Text>
          <CustomInput
            value={aadhar}
            setValue={setAadhar}
            secureTextEntry={true}
          />

          <CustomButton
            text="Upload Image"
            // onPress={onSave}
            type="SECONDARY"
          />
          <CustomButton text="Save" onPress={onSavePressed} />
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
 
  logo: {
    width: '50%',
    maxWidth: 250,
    maxheight: 150,
    height: '40%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  addlabel: {
    color: 'gray',
    fontSize: 15,
    marginRight: 230,
    marginTop: 10,
    marginBottom: 2,
  },
  label: {
    color: 'gray',
    fontSize: 15,
    marginRight: 230,
    marginTop: 10,
    marginBottom: 2,
  },
  text: {
    color: 'gray',
    fontSize: 15,
    marginRight: 180,
    marginTop: 10,
    marginBottom: 2,
  },
});

export default Form;
