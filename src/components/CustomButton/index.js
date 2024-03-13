import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../../utils/colors'

const CustomButton = ({text,height,width,bottom,top,elevation,borderRadius,
flex,text2,onPress
}) => {
  return (
    <TouchableOpacity
    style={{
      backgroundColor: COLORS.BUTTON_COLOR,
      height: height,
      width: width,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: borderRadius?borderRadius:15,
      bottom:bottom,
elevation:elevation,
      top:top,
      alignSelf:flex,
      shadowColor:'skyblue'
    }}
    onPress={onPress}
    >
    <Text style={{fontSize: 17, fontWeight: '600', color: 'white',
  }}>
      {text}  {text2}
    </Text>
  </TouchableOpacity>
  )
}

export default CustomButton