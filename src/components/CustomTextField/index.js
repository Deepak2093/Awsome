import { View, Text,TextInput, StyleSheet } from 'react-native'
import React from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  import IconLock from 'react-native-vector-icons/SimpleLineIcons'
import CustomButton from '../../components/CustomButton';
import ArrowLeft from 'react-native-vector-icons/AntDesign'
import Icon from 'react-native-vector-icons/Fontisto'

const CustomTextField = ({placeholder,secureText,
topText,Icons}) => {
  return (
    <View style={[styles.Container,{  justifyContent:secureText==true?'center':'space-between'}]}>
        {topText?
        <Text style={{paddingLeft:wp(7)}}>{topText}</Text>
        :null}
      <View style={{flexDirection:'row',alignItems:'center'}}>
        {Icons}
      <TextInput style={styles.Input}
      placeholder={placeholder}
      secureTextEntry={secureText}
      />
      </View>
      </View>
  )
}

export default CustomTextField

const styles=StyleSheet.create({
    Container:{
        backgroundColor:'white',
        height:hp(7.2),borderRadius:5,
    paddingHorizontal:8,
      elevation: 10,
          shadowColor: '#52006A',
      },
      Input:{backgroundColor:'white',height:hp(4.8),width:wp(70),
      fontSize:16,fontWeight:'800',paddingHorizontal:10
      }
})