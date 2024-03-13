import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import { COLORS } from '../../utils/colors'
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign'
const Favourite = () => {
  return (
    <LinearGradient    colors={['#bef2f7', 'white']} style={{flex:1}}>
   
    <SafeAreaView style={{flex:1,paddingHorizontal:10}}>
<View style={{flexDirection:'row',backgroundColor:'pink',
height:hp(5),
alignItems:'flex-end'
}}>
<Icon name='left' color={COLORS.FONTCOLOR} size={24}/>
<Text style={{fontSize:19,
  fontWeight:'700',color:COLORS.FONTCOLOR,marginLeft:12}}>Favourite</Text>
</View>

 <View style={{backgroundColor:'green',flexDirection:'row',
    alignItems:"center",
    paddingVertical:15
    }}> 
<Image source={{uri:'https://image.tmdb.org/t/p/w500/A4j8S6moJS2zNtRR8oWF08gRnL5.jpg'}}
style={{height:hp(10),width:wp(32),backgroundColor:'red',
borderRadius:10
}}
resizeMode='cover'
/>
<View style={{left:10}}>
<Text style={{fontSize:16,fontWeight:'800'}}>Five Nights of friddy's</Text>
<Text style={{fontWeight:'500'}}>110 minuts</Text>
</View>
      </View>
    </SafeAreaView>
    </LinearGradient>
  )
}

export default Favourite
const styles=StyleSheet.create({
  text:{
fontSize:17,fontWeight:'700',
color:COLORS.FONTCOLOR,

  },
  linearGradient: {
      flex: 1,
      // height:hp(60),
      // width:wp(80),
      // paddingLeft: 15,
      // paddingRight: 15,
      // borderRadius: 5
    },
})