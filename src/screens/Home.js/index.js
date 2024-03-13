import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  FlatList,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Swiper from 'react-native-swiper';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {COLORS} from '../../utils/colors';
import {GetMovies} from '../../APIs/Movies';
import { IMAGES } from '../../utils/ImagePath';
import Icon from 'react-native-vector-icons/AntDesign';
import CircleButton from '../../components/CircleButton';
import LinearGradient from 'react-native-linear-gradient';
import { TrandingAPI } from '../../APIs/Tranding';

const Home = ({navigation}) => {
  const [card, setCard] = useState('');
const [movie,setMovie]=useState([]);
const [trand,setTrand]=useState([]);

  const arr = [3, 4, 5, 5, 3];
  const arr1 = [3, 4, 5, 5, 3, 4, 56, 75, 7, 4, 54, 75, 3];

  useEffect(() => {
    getTrainding()
    getMovieApi();
  }, []);

  const getMovieApi = () => {
    GetMovies(onMovieResponse);
  };


const getTrainding=()=>{
  TrandingAPI(
    {
    language:'en-US'
  },
  onTrandingResponse
  )
}

const onTrandingResponse = response => {
  if (response.status == 200) {
    console.log('MYTrand----->', response.data.results);
    setTrand(response.data.results)
  } else {
    console.error('Trandingerror-->', error);
  }
};
  const onMovieResponse = response => {
    if (response.status == 200) {
      // console.log('MYRES----->', response.data.results);
      setMovie(response.data.results)
    } else {
      console.error('onmovieerror-->', error);
    }
  };




// console.log("IMage>> ", 'https://image.tmdb.org/t/p/w500'+movie[0].poster_path)
  return (
    <LinearGradient    colors={[COLORS.APP_THEME, 'white']} style={styles.linearGradient}>

    <SafeAreaView style={{
      // backgroundColor: '#bef2f7', 
      flex: 1}}>
      <ScrollView style={{}}>
        <View
          style={{
            height: hp(8),
            width: wp(100),
            backgroundColor: '#bef2f7',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}>
          <View>
            <Text style={{fontSize: 17, fontWeight: '600',
          color:COLORS.FONTCOLOR
          }}>Hello!</Text>
            <Text style={{fontSize: 14,
            color:COLORS.FONTCOLOR
            }}>Explore your favorite movies</Text>
          </View>
          

<CircleButton text={<Icon name='search1' size={25} color='white'/>} 
backgroundColor={'#3dceeb'}
/>
          
        </View>
        <View
          style={{
            // backgroundColor: 'yellow',
            alignItems: 'center',
            paddingTop: hp(3.5),
          }}>
          <SwiperFlatList
            // autoplay
            // autoplayDelay={2}
            // autoplayLoop
            // index={1}
            // showPagination
            
            // disableGesture={true}
            autoplayLoopKeepAnimation={true}
            onChangeIndex={text => {
              setCard(text.index);
              console.log('my-->', text.index);
            }}
            getCurrentIndex={text => {
              // console.log('myourgetcurrent-->', text.index);
            }}
            data={trand}
            renderItem={(items, index) => (
              console.log('Eff ', index),
              (
               <TouchableOpacity
               onPress={()=>navigation.navigate('Detail',{id:items.item.id})}
               >
                 <View
                  // style={[
                  //   styles.child,
                  //   {width: index == card ? wp(100) : wp(100)},
                  //   {height: index == card ? hp(30) : hp(30)},
                  // ]}
                  >
                    <Image source={{uri:IMAGES.Imag_URI+items.item.backdrop_path}}
                    style={{
                      width: wp(100),
                      height: hp(35),
                      borderRadius: 10,
                      opacity:1
                    }}
                    resizeMode='cover'  />
                <View style={{position:'absolute',
                backgroundColor:'rgba(0,0,0,0.1)',
top:hp(25),left:wp(6),padding:10}}>
                <Text style={{fontSize:30,
                  color:'white',fontWeight:"900"

                  }}>{items.item.title}</Text>
                </View>
                </View>
               </TouchableOpacity>
              )
            )}
          />
        </View>

        <View
          style={{
            // backgroundColor: 'teal',
            width: wp(100),
            height: hp(5.7),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            marginTop:3
          }}>
          <Text
            style={{fontSize: 17, fontWeight: '600', color: COLORS.FONTCOLOR}}>
            Popular movies
          </Text>
          <Text
            style={{fontSize: 17, fontWeight: '500', color: COLORS.FONTCOLOR}}>
            See all
          </Text>
        </View>

        <View style={{}}>
          <FlatList
            contentContainerStyle={{
              // backgroundColor: 'orange',
              alignItems: 'center',
            }}
            scrollEnabled={true}
            numColumns={3}
            keyExtractor={(item, index) => index}
            data={movie}
            renderItem={(items) => {
              // console.log('Chacha', items);
              return (
             <TouchableOpacity onPress={()=>navigation.navigate('Detail',{id:items.item.id})}>
                 <View
                  style={{
                    width: wp(29),
                    height: hp(20),
                    backgroundColor: 'green',
                    margin: 9,
                    borderRadius: 15,
                  }}>
                    <Image source={{uri:IMAGES.Imag_URI+items.item.poster_path}}
                    style={{
                      width: wp(29),
                      height: hp(20),
                      borderRadius: 15,
                    }}
                    resizeMode='contain'/>
                  <Text>{items.id}</Text>
                </View>
             </TouchableOpacity>
              );
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
    </LinearGradient>

  );
};

export default Home;

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  popularText: {
    fontSize: 17,
    fontWeight: '600',
  },
  child: {
    justifyContent: 'center',
    backgroundColor: 'pink',
    paddingHorizontal: 5,
    marginRight: 5,
    alignSelf: 'center',
    borderRadius: 17,
  },
  text: {fontSize: width * 0.5, textAlign: 'center'},
  linearGradient: {
    flex: 1,
    // height:hp(60),
    // width:wp(80),
    // paddingLeft: 15,
    // paddingRight: 15,
    // borderRadius: 5
  },
});
