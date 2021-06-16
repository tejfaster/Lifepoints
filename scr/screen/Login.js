import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Splashscreen from './Splashscreen';
import LoginScreen from './LoginScreen';

const Login = ({ navigation }) => {
  const [isVisible, setVisible] = useState(true)

  useEffect(() => {
    const Timeout = setTimeout(() => {
      setVisible(false)
    }, 2000)

    return () => clearTimeout(Timeout)
  }, [])

  return (
    <View style={styles.MainContainer}>
      {
        isVisible ?  <Splashscreen /> :  <LoginScreen navigation={navigation} />
      }
    </View>
  );
}
const styles = StyleSheet.create(
  {
    MainContainer:
    {
      flex: 1,
    },

    SplashScreen_RootView:
    {
      justifyContent: 'center',
      flex: 1,
      margin: 10,
      position: 'absolute',
      width: '100%',
      height: '100%',
    }
  });


export default Login

 