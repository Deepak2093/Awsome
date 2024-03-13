import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WatchList from '../../screens/WatchList';
import Favourite from '../../screens/Favourite';
import { COLORS } from '../../utils/colors';
import Home from '../../screens/Home.js';
import Icon from 'react-native-vector-icons/AntDesign';
import FirstIcon from 'react-native-vector-icons/Entypo'
import First from 'react-native-vector-icons/SimpleLineIcons'
import User from 'react-native-vector-icons/FontAwesome'
import ProfileScreen from '../../screens/ProfileScreen';
const Tab = createBottomTabNavigator();
const MyTab = () => {

  return (
    <Tab.Navigator theme={COLORS.APP_THEME}>
      <Tab.Screen name='Home'  component={Home} 
    options={{
      headerShown:false,
      tabBarIcon:({ focused }) => {
        return (          
          <Text>{focused?<FirstIcon name='home' size={28} color={'skyblue'}/>:<First name='home' size={24}/>}</Text>
        );
      },
    }}
    />
        <Tab.Screen name='fav'  component={Favourite}
        options={{headerShown:false,
          title:'Favourite',
         
          tabBarIcon:({ focused }) => {
            return (          
              <Text>{focused?<Icon name='heart' size={25} color={'skyblue'}/>:<Icon name='hearto' size={22}/>}</Text>
            );
          },
        }}
        />
          <Tab.Screen name='Profile'  component={ProfileScreen} 
    options={{headerShown:false,
      tabBarIcon:({ focused }) => {
        return (          
          <Text>{focused?<User name='user-circle-o' size={28} color={'skyblue'}/>:
          <User name='user-circle' size={26}/>}</Text>
        );
      },
    }}
    />
  </Tab.Navigator>
  )
}

export default MyTab