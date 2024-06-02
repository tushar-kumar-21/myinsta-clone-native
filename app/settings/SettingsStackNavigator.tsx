import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingsPrivacy from './SettingsPrivacy';
import AccountsCentre from './AccountsCentre';
import Colors from '../../constants/Colors';
import { StyleSheet } from 'react-native';

const settingsStack = createNativeStackNavigator();

const SettingsStackNavigator = () => {



  return (
    <settingsStack.Navigator>
        <settingsStack.Screen
        name="SettingsPrivacy"
        component={SettingsPrivacy}
        options={{
            headerShown: false,
            contentStyle: styles.container,
          }}
        />
        <settingsStack.Screen
        name="AccountsCentre"
        component={AccountsCentre}
        options={{
            headerShown: false,
            contentStyle: styles.container,
          }}
        />
    </settingsStack.Navigator>
  )
}

export default SettingsStackNavigator;

const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.secondary,
      width: '100%',
      height: '100%',
    },
    androidSafeArea: {
      backgroundColor: Colors.secondary,
      // paddingTop:Platform.OS === 'android' ? 25 : 0,
    }
  });