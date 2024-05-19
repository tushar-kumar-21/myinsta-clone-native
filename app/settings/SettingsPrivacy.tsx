import React from 'react'
import { Image, Linking, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import {
  Feather,
  AntDesign,
  Fontisto,
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
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

  const contentListData = [
    { iconName: 'lock', iconLibrary: Feather, text: 'Accout privacy' },
    { iconName: 'star-circle-outline', iconLibrary: MaterialCommunityIcons, text: 'Close friends' },
    { iconName: 'do-not-disturb', iconLibrary: MaterialIcons, text: 'Blocked' },
    { iconName: 'hide-source', iconLibrary: MaterialIcons, text: 'Hide story and live' },
  ]

  const othersListData = [
    { iconName: 'facebook-messenger', iconLibrary: FontAwesome5, text: 'Message and story replies' },
    { iconName: 'tagso', iconLibrary: AntDesign, text: 'Tags and mentions' },
    { iconName: 'comment', iconLibrary: FontAwesome5, text: 'Comments' },
    { iconName: 'share-square', iconLibrary: FontAwesome5, text: 'Sharing and remixes' },
    { iconName: 'do-not-disturb-off', iconLibrary: MaterialIcons, text: 'Restricted' },
    { iconName: 'information-outline', iconLibrary: MaterialCommunityIcons, text: 'Limited interactions' },
    { iconName: 'alphabet-cyrillic', iconLibrary: MaterialCommunityIcons, text: 'Hidden Words' },
    { iconName: 'user-plus', iconLibrary: Feather, text: 'Follow and invited friends' }

  ]

  return (
    <SafeAreaView style={[{ color: Colors.primary }, tw``]}>
      <ScrollView>
        <View style={tw`flex flex-row items-center gap-5 px-4 mb-6`}>
          <AntDesign name="arrowleft" size={28} color={Colors.primary} />
          <Text style={[{ color: Colors.primary }, tw`text-xl font-semibold`]}>Settings and activity</Text>
        </View>
        <SearhBar />
        <View style={tw`px-4`}>
          <View style={tw`pt-2 flex flex-row justify-between items-center`}>
            <Text style={[{ color: Colors.medium }, tw`text-sm font-semibold`]}>Your account</Text>
            <Text style={[{ color: Colors.primary }, tw`text-lg font-semibold`]}>Meta</Text>
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
          <View style={tw`flex flex-col gap-5`}>
            {listData.map((item: ListItem, index) => (
              <View key={index} style={tw`flex-row justify-between items-center`}>
                <View style={tw`flex-row gap-3 items-center`}>
                  <item.iconLibrary name={item.iconName} size={22} color={Colors.primary} />
                  <Text style={[{ color: Colors.primary }, tw`text-base`]}>{item.text}</Text>
                </View>
                <FontAwesome name="angle-right" size={24} color={Colors.primary} />
              </View>
            ))}

          </View>
        </View>
        <View style={[{ backgroundColor: Colors.dimgrey }, tw`h-1.5 mt-4`]} />
        <View style={tw`px-4`}>
          <Text style={[{ color: Colors.medium }, tw`py-4`]}>Who can see your content</Text>
          <View style={tw`flex flex-col gap-5`}>
            {contentListData.map((item: ListItem, index) => (
              <View key={index} style={tw`flex-row justify-between items-center`}>
                <View style={tw`flex-row gap-3 items-center`}>
                  <item.iconLibrary name={item.iconName} size={22} color={Colors.primary} />
                  <Text style={[{ color: Colors.primary }, tw`text-base`]}>{item.text}</Text>
                </View>
                <FontAwesome name="angle-right" size={24} color={Colors.primary} />
              </View>
            ))}

          </View>
        </View>
        <View style={[{ backgroundColor: Colors.dimgrey }, tw`h-1.5 mt-4`]} />
        <View style={tw`px-4`}>
          <Text style={[{ color: Colors.medium }, tw`py-4`]}>How others can interact with you</Text>
          <View style={tw`flex flex-col gap-5`}>
            {othersListData.map((item: ListItem, index) => (
              <View key={index} style={tw`flex-row justify-between items-center`}>
                <View style={tw`flex-row gap-3 items-center`}>
                  <item.iconLibrary name={item.iconName} size={22} color={Colors.primary} />
                  <Text style={[{ color: Colors.primary }, tw`text-base`]}>{item.text}</Text>
                </View>
                <FontAwesome name="angle-right" size={24} color={Colors.primary} />
              </View>
            ))}

          </View>
        </View>
        <View style={[{ backgroundColor: Colors.dimgrey }, tw`h-1.5 mt-4`]} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default SettingsPrivacy;