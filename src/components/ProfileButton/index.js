import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import { COLORS } from '../../utils/colors';
import Icon from 'react-native-vector-icons/Entypo'

const ProfileButton = ({text,text2}) => {
  return (
    <TouchableOpacity>
    <View style={{
        width:wp(90),
        height:hp(6),flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        // backgroundColor:'pink'
        // paddingHorizontal:5
        }}>
<Text style={styles.text}>{text}{text2?`   ${text2}`:''}</Text>
<Icon  name='chevron-right' size={25} color={COLORS.FONTCOLOR}/>
        </View>
        </TouchableOpacity>
  )
}

export default ProfileButton
const styles=StyleSheet.create({
    text:{
fontSize:17,fontWeight:'700',
color:COLORS.FONTCOLOR,

    }
})