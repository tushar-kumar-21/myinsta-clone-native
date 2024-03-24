import React from 'react'
import { Image, SafeAreaView, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import tw from 'twrnc';
import SearhBar from '../../components/common/SearhBar';
const metaLogo = require('../../assets/meta.png');

const SettingsPrivacy = () => {
  return (
    <SafeAreaView style={[{ color: Colors.primary }, tw``]}>
      <View style={tw`flex flex-row items-center gap-5 px-4 mb-6`}>
        <AntDesign name="arrowleft" size={28} color={Colors.primary} />
        <Text style={[{ color: Colors.primary }, tw`text-xl font-semibold`]}>Settings and activity</Text>
      </View>
      <SearhBar />
      <View>
        <Text>Your account</Text>
        <Text style={[{ color: Colors.primary }, tw`text-xl font-semibold`]}>meta</Text>
      </View>
    </SafeAreaView>
  )
}

export default SettingsPrivacy;