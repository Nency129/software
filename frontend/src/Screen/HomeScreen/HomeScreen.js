import { View, Text,StyleSheet } from 'react-native';
import React from 'react';
import CustomButton from '../../component/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';



const HomeScreen = () => {

  const navigation = useNavigation();

    const onProfilePressed = () => {
      navigation.navigate('Form');
   
    };

    const onScanPressed = () => {
      navigation.navigate('Scanner');
   
    };

    const onHistoryPressed = () => {
      navigation.navigate('History');
   
    };
  return (
    <View style={styles.container}>
    <View style={styles.container1}>
      <View style={styles.root}>

    <Text style={styles.title}>
       Home Page
    </Text>
    <CustomButton
    text="Create Your Profile"
    onPress={onProfilePressed}
    />
    

    <CustomButton
    text="Scan QR"
    onPress={onScanPressed}
    />

  <CustomButton
    text="Go To Profile"
    onPress={onHistoryPressed}
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
text: {
  // marginTop:15,
  color: 'gray',
  marginVertical:20,
},
title: {
  fontSize: 24,
  fontWeight: 'bold',
  color: '#051C60',
  margin: 10,
},
});
export default HomeScreen;