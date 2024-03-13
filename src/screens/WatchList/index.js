import { View, Text,TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { COLORS } from '../../utils/colors'

const WatchList = ({ navigation }) => {
    
  return (
   <SafeAreaView style={{backgroundColor:COLORS.APP_THEME,flex:1}}>
     <View>
      <Text>WatchList</Text>
      <TouchableOpacity  style={{height:40,width:100,
        backgroundColor:'green'}}
        onPress={() => navigation.navigate('Fav')}
        >
        <Text style={{
            fontSize:25
        }}>GO</Text>
      </TouchableOpacity>
    </View>
   </SafeAreaView>
  )
}

export default WatchList