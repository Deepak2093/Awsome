import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
const CircleButton = ({text,onPress,backgroundColor}) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <View
          style={{
            backgroundColor:backgroundColor,
            width: wp(11.2),
            height: hp(5.3),
            borderRadius: hp(4),
            alignItems: 'center',
            justifyContent: 'center',
            elevation:5
          }}>
            <Text>{text}</Text>
          </View>
    </TouchableOpacity>
  )
}

export default CircleButton