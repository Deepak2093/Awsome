import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../utils/colors';
import LottieView from 'lottie-react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Fontisto';
import IconLock from 'react-native-vector-icons/SimpleLineIcons';
import CustomButton from '../../components/CustomButton';
import ArrowLeft from 'react-native-vector-icons/AntDesign';
import Lock from 'react-native-vector-icons/MaterialIcons';
import Usr from 'react-native-vector-icons/Feather';
import CustomTextField from '../../components/CustomTextField';
const SignUpScreen = ({navigation}) => {
  return (
    <LinearGradient colors={['#bef2f7', 'white']} style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <LottieView
          style={{
            height: hp(35),
            width: wp(70),
            alignSelf: 'flex-end',
            left: wp(12),
          }}
          source={require('../../Asset/lottie/logo.json')}
          autoPlay
          loop
        />
        <View
          style={{
            paddingHorizontal: wp(8),
            justifyContent: 'center',
            bottom: hp(14),
            // backgroundColor:'orange'
          }}>
          <Text
            style={{color: COLORS.FONTCOLOR, fontSize: 35, fontWeight: '800'}}>
            Create Account
          </Text>
          <Text
            style={{color: COLORS.FONTCOLOR, fontSize: 18, fontWeight: '500'}}>
            Pleas sign in to continue
          </Text>
          <View style={{height: hp(4)}} />

          <CustomTextField
            placeholder={'Username'}
            topText={'FULL NAME'}
            Icons={<Usr name="user" size={20} color="black" />}
          />
          <View style={{height: hp(2.6)}} />

          <CustomTextField
            placeholder={'Email'}
            topText={'EMAIL'}
            Icons={<Icon name="email" size={20} color="black" />}
          />
          <View style={{height: hp(2)}} />
          <CustomTextField
            placeholder={'Password'}
            Icons={<IconLock name="lock" size={20} color="black" />}
            secureText={true}
          />
          <View style={{height: hp(2.6)}} />

          <CustomTextField
            placeholder={'Confirm Password'}
            Icons={<Lock name="lock-outline" size={22} color="black" />}
            secureText={true}
          />
          <CustomButton
            width={wp(40)}
            height={hp(6.2)}
            elevation={16}
            top={hp(5.4)}
            borderRadius={25}
            text={'SIGN UP'}
            text2={<ArrowLeft name="arrowright" size={21} alignSelf="center" />}
            flex={'flex-end'}
          />
        </View>
      </SafeAreaView>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          paddingBottom: hp(3),
        }}>
        <Text style={{fontSize: 15}}>Already have a account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{color: COLORS.BUTTON_COLOR}}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default SignUpScreen;
