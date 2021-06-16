import * as React from 'react';
import { View, Image, Text } from 'react-native';
import LoginScreen from '../screen/LoginScreen';
import Login from '../screen/Login';
import SignUp from '../screen/SignUp';
import Forgot_password from '../screen/Forgot_password';
import Verification from '../screen/Verification';
import Reset_password from '../screen/Reset_password';
import News from '../screen/News';
import Qr from '../screen/Qr';
import Award from '../screen/Award';
import Shop from '../screen/Shop';
import CustomHeader from '../component/CustomHeader';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const CustomTab = () =>{
  return(
    <View>
      <Text style={{color:'white'}}>News</Text>
    </View>
    )
}


function MyTabs() {
  return (
    <Tab.Navigator 
    activeColor="#D93069"
    inactiveColor="#ffffff"
    barStyle={{ backgroundColor: '#000' }}
    >
      <Tab.Screen name="News" component={News} options={{
        tabBarLabelcolor:'white'
      }}/>
      <Tab.Screen name="Qr" component={Qr} />
      <Tab.Screen name="Award" component={Award} />
      <Tab.Screen name="Shop" component={Shop} />
    </Tab.Navigator>
  );
}

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Forgot_password" component={Forgot_password} />
      <Stack.Screen name="Verification" component={Verification} />
      <Stack.Screen name="Reset_password" component={Reset_password} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="DashBoard" component={MyTabs} options={{
        header: () => <CustomHeader/>
      }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer theme={{ colors: { background: '#000' } }}>
      <MyStack />
    </NavigationContainer>
  );
}
