import React from 'react'
import { Image, Linking, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import {
  Feather,
  AntDesign,
  Fontisto,
  Ionicons,
  FontAwesome,
  Octicons
} from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import tw from 'twrnc';
import { ListItem } from '../interfaces/Interface';
import SearhBar from '../../components/common/SearhBar';
const metaLogo = require('../../assets/meta.png');

const SettingsPrivacy = () => {

  const listData = [
    { iconName: 'bookmark', iconLibrary: Feather, text: 'Saved' },
    { iconName: 'archive-outline', iconLibrary: Ionicons, text: 'Archive' },
    { iconName: 'activity', iconLibrary: Feather, text: 'Your activity' },
    { iconName: 'bell', iconLibrary: Fontisto, text: 'Notifications' },
    { iconName: 'clock', iconLibrary: Fontisto, text: 'Time spent' },
  ];

  return (
    <SafeAreaView style={[{ color: Colors.primary }, tw``]}>
      <View style={tw`flex flex-row items-center gap-5 px-4 mb-6`}>
        <AntDesign name="arrowleft" size={28} color={Colors.primary} />
        <Text style={[{ color: Colors.primary }, tw`text-xl font-semibold`]}>Settings and activity</Text>
      </View>
      <SearhBar />
      <View style={tw`px-4`}>
        <View style={tw`pt-2 flex flex-row justify-between items-center`}>
          <Text style={[{ color: Colors.medium }, tw`text-sm font-semibold`]}>Your account</Text>
          <Text style={[{ color: Colors.primary }, tw`text-xl font-semibold`]}>Meta</Text>
        </View>
        <View style={tw`py-4 flex-row justify-between items-center`}>
          <View style={tw`flex-row justify-between items-center gap-4`}>
            <FontAwesome name="user-circle" size={24} color={Colors.primary} />
            <View >
              <Text style={[{ color: Colors.primary }, tw`text-base text-white`]}>Accounts Centre</Text>
              <Text style={[{ color: Colors.medium }, tw``]}>Password, security, personal details, ads</Text>
            </View>
          </View>
          <FontAwesome name="angle-right" size={24} color={Colors.primary} />
        </View>
        <Text style={[{ color: Colors.medium }, tw`text-xs`]}>Manage your connected experiences and account settings across Meta technologies.
          <Text style={[{ color: Colors.textPrimary }, tw``]} onPress={() => Linking.openURL("https://youtube.com")}>Learn more</Text>
        </Text>
      </View>
      <View style={[{ backgroundColor: Colors.dimgrey }, tw`h-1.5 mt-4`]} />
      <View style={tw`px-4`}>
        <Text style={[{ color: Colors.medium }, tw`py-4`]}>How you use Instagram</Text>

        {listData.map((item: ListItem, index) => (
          <View key={index} style={tw`flex-row justify-between items-center mb-5`}>
            <View style={tw`flex-row gap-3 items-center`}>
              <item.iconLibrary name={item.iconName} size={22} color={Colors.primary} />
              <Text style={[{ color: Colors.primary }, tw`text-base`]}>{item.text}</Text>
            </View>
            <FontAwesome name="angle-right" size={24} color={Colors.primary} />
          </View>
        ))}

      </View>
    </SafeAreaView>
  )
}

export default SettingsPrivacy;