import {View, Text, SafeAreaView, Image, StyleSheet, Touchable, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { COLORS } from '../../utils/colors';
import Icon from 'react-native-vector-icons/Entypo'
import Icon2 from 'react-native-vector-icons/FontAwesome'
import ProfileButton from '../../components/ProfileButton';
import CustomButton from '../../components/CustomButton';
import LinearGradient from 'react-native-linear-gradient';
const ProfileScreen = () => {
  return (
    <LinearGradient    colors={['#bef2f7', 'white']} style={styles.linearGradient}>
    <SafeAreaView style={{flex: 1, padding: 10}}>
      <View
        style={{
          width: wp(95),
          height: hp(26.5),
          top: hp(7),
          backgroundColor: '#9de1f2',
          margin: 9,
          borderRadius: 15,
          alignSelf: 'center',
alignItems:'center',
        }}>
       
          <Image source={require('../../Asset/Prof.png')} 
          resizeMode='cover'
          style={{height:hp(12),width:wp(25),
alignSelf:'center',
bottom:hp(6)
        }}
          />
       <View style={{bottom:hp(5)}}>
       <Text style={{color:COLORS.FONTCOLOR,fontSize:25,
        fontWeight:'bold'
        }}>Deepak Kumar</Text>
        <Text style={{color:COLORS.FONTCOLOR,fontSize:22,
       textAlign:'center'
        }}>+919****2093</Text>
       </View>
<ProfileButton text={<Icon2  name='angellist' size={25}/>} 
 text2={'My Watchlist'}/>
      </View>
    <View style={{top:hp(8),alignItems:"center"}}>
    <ProfileButton  text={'Edit Profile'}/>
    <ProfileButton  text={'My Favorite'}/>
    <ProfileButton  text={'Downloads'}/>
    <ProfileButton  text={'Settings'}/>
    <View style={{height:hp(0.2),backgroundColor:'white',width:wp(90),
marginVertical:10
}}/>
    <ProfileButton  text={'Help & Legal'}/>
    
        <View style={{height:hp(2)}}/>
    <CustomButton text={'Logout'} height={hp(6)} width={wp(30)}/>

    </View>
    </SafeAreaView> 
     <View style={{height:hp(5),width:wp(60),flex:1}}></View>
    </LinearGradient>
  );
};

export default ProfileScreen;
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