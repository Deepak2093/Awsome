import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../utils/colors';
import {GetMovieDetail} from '../../APIs/SingleMovie';
import {IMAGES} from '../../utils/ImagePath';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import CircleButton from '../../components/CircleButton';
import CustomButton from '../../components/CustomButton';

const DetailScreen = ({route}) => {
  const [movie, setMovie] = useState({});
  const [genre, setGenre] = useState([]);
  const [language, setLanguage] = useState([]);
  const navigation = useNavigation();
  const {id} = route.params;
  console.log('route.params---->', route.params);
  console.log('MovieID--> ', id);
  useEffect(() => {
    getMovieDetailApi();
  }, []);

  const getMovieDetailApi = () => {
    GetMovieDetail(id, onMovieResponse);
  };

  const onMovieResponse = response => {
    if (response.status == 200) {
      console.log('MovieDetail----->', response.data);
      setMovie(response.data);
      setGenre(response.data.genres);

      setLanguage(response.data.spoken_languages);
    } else {
      console.error('MovieDetail-->', error);
    }
  };
  const arr = [1];
  return (
    <SafeAreaView style={{backgroundColor: '#bef2f7', flex: 1}}>
      <View
        style={{
          height: hp(8),
          width: wp(100),
          //   backgroundColor: 'green',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 10,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#d7f3f5',
            width: wp(11),
            height: hp(5),
            borderRadius: hp(4),
            alignItems: 'center',
            justifyContent: 'center',
            elevation:5
          }}
          onPress={() => navigation.goBack()}>
          <Icon name="arrowleft" size={26} color={COLORS.APP_THEME} />
        </TouchableOpacity>
        <View>
          <Text
            style={{fontSize: 17, fontWeight: '600', color: COLORS.FONTCOLOR}}>
            Movie Details
          </Text>
        </View>

        <CircleButton text={<Icon name="hearto" size={25} color={COLORS.FONTCOLOR}/>} backgroundColor={'#d7f3f5'} />
      </View>

      <ScrollView style={{marginTop: 5}}>
        <View
          style={{
            justifyContent: 'center',
            backgroundColor: 'pink',
            alignSelf: 'center',
            height: hp(52),
            width: wp(65),
            borderRadius: 17,
          }}>
          <Image
            source={{uri: IMAGES.Imag_URI + movie.poster_path}}
            style={{
              height: hp(52),
              width: wp(65),
              borderRadius: 15,
            }}
            resizeMode="contain"
          />
        </View>
        <View
          style={{
            alignSelf: 'center',
            marginTop: 10,
            justifyContent: 'center',
            // backgroundColor:'red',
            alignItems: 'center',
          }}>
          <Text
            style={{fontSize: 18, fontWeight: '600', color: COLORS.FONTCOLOR}}>
            {movie.title}
          </Text>
          <Text style={{alignSelf: 'center', color: COLORS.FONTCOLOR}}>
            {movie.tagline}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            paddingHorizontal: 10,
            paddingVertical: 10,
          }}>
          <View style={styles.retingContainers}>
            <Text style={styles.ImdbText}>Genre</Text>
            {genre.slice(0, 1).map(item => {
              return <Text style={styles.ImdbText2}>{item.name}</Text>;
            })}
          </View>
          <View style={styles.retingContainers}>
            <Text style={styles.ImdbText}>Time</Text>
            <Text style={styles.ImdbText2}>{movie.runtime} Minuts</Text>
          </View>
          <View style={styles.retingContainers}>
            <Text style={styles.ImdbText}>Imdb</Text>
            <Text style={styles.ImdbText2}>
              {parseFloat(movie.vote_average).toFixed(1)}/10
            </Text>
          </View>
        </View>

        <Text
          style={{
            alignSelf: 'center',
            color: COLORS.FONTCOLOR,
            textAlign: 'left',
            padding: 6.5,
          }}>
          {movie.overview}
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontWeight: '700',
            color: COLORS.FONTCOLOR,
            paddingHorizontal: 10,
          }}>
          {'Languages'}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            paddingHorizontal: 10,
            paddingBottom: 15,
          }}>
          {language.map((item, index) => {
            return (
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '500',
                  paddingVertical: 5,
                  paddingHorizontal: 5,
                }}>
                {item.english_name}
              </Text>
            );
          })}
        </View>
      </ScrollView>
     
        <CustomButton text={'Add to Watchlist'} height={hp(6)} width={wp(90)}
          bottom= {hp(2, 5)} flex={'center'}
        /> 
      
    </SafeAreaView>
  );
};

export default DetailScreen;
const styles = StyleSheet.create({
  retingContainers: {
    backgroundColor: '#e9f4f5',
    height: hp(6),
    width: wp(22),
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImdbText: {
    color: COLORS.FONTCOLOR,
    fontWeight: '600',
  },
  ImdbText2: {
    color: COLORS.FONTCOLOR,
    fontWeight: '900',
  },
});
