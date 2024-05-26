import React from 'react';
import { Image, Linking, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import * as Icons from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import tw from 'twrnc';
import { ListItem } from '../interfaces/Interface';
import SearhBar from '../../components/common/SearhBar';
const metaLogo = require('../../assets/meta.png');

const Section = ({ title, data }) => (
  <View style={tw`px-4`}>
    <Text style={[{ color: Colors.medium }, tw`py-4`]}>{title}</Text>
    <View style={tw`flex flex-col gap-5`}>
      {data.map((item: ListItem, index:number) => (
        <View key={index} style={tw`flex-row justify-between items-center`}>
          <View style={tw`flex-row gap-3 items-center`}>
            <item.iconLibrary name={item.iconName} size={22} color={Colors.primary} />
            <Text style={[{ color: Colors.primary }, tw`text-base`]}>{item.text}</Text>
          </View>
          <Icons.FontAwesome name="angle-right" size={24} color={Colors.primary} />
        </View>
      ))}
    </View>
  </View>
);

const SettingsPrivacy = () => {
  const sections = [
    {
      title: 'How you use Instagram',
      data: [
        { iconName: 'bookmark', iconLibrary: Icons.Feather, text: 'Saved' },
        { iconName: 'archive-outline', iconLibrary: Icons.Ionicons, text: 'Archive' },
        { iconName: 'activity', iconLibrary: Icons.Feather, text: 'Your activity' },
        { iconName: 'bell', iconLibrary: Icons.Fontisto, text: 'Notifications' },
        { iconName: 'clock', iconLibrary: Icons.Fontisto, text: 'Time spent' },
      ],
    },
    {
      title: 'Who can see your content',
      data: [
        { iconName: 'lock', iconLibrary: Icons.Feather, text: 'Accout privacy' },
        { iconName: 'star-circle-outline', iconLibrary: Icons.MaterialCommunityIcons, text: 'Close friends' },
        { iconName: 'do-not-disturb', iconLibrary: Icons.MaterialIcons, text: 'Blocked' },
        { iconName: 'hide-source', iconLibrary: Icons.MaterialIcons, text: 'Hide story and live' },
      ],
    },
    {
      title: 'How others can interact with you',
      data: [
        { iconName: 'facebook-messenger', iconLibrary: Icons.FontAwesome5, text: 'Message and story replies' },
        { iconName: 'tagso', iconLibrary: Icons.AntDesign, text: 'Tags and mentions' },
        { iconName: 'comment', iconLibrary: Icons.FontAwesome5, text: 'Comments' },
        { iconName: 'share-square', iconLibrary: Icons.FontAwesome5, text: 'Sharing and remixes' },
        { iconName: 'do-not-disturb-off', iconLibrary: Icons.MaterialIcons, text: 'Restricted' },
        { iconName: 'information-outline', iconLibrary: Icons.MaterialCommunityIcons, text: 'Limited interactions' },
        { iconName: 'alphabet-cyrillic', iconLibrary: Icons.MaterialCommunityIcons, text: 'Hidden Words' },
        { iconName: 'user-plus', iconLibrary: Icons.Feather, text: 'Follow and invited friends' },
      ],
    },
    {
      title: 'What you see',
      data: [
        { iconName: 'star', iconLibrary: Icons.Feather, text: 'Favourites' },
        { iconName: 'bell-slash', iconLibrary: Icons.Octicons, text: 'Muted accounts' },
        { iconName: 'play-box-multiple-outline', iconLibrary: Icons.MaterialCommunityIcons, text: 'Suggested content' },
        { iconName: 'heart-off-outline', iconLibrary: Icons.MaterialCommunityIcons, text: 'Like and share counts' },
      ],
    },
    {
      title: 'Your app and profile',
      data: [
        { iconName: 'device-mobile', iconLibrary: Icons.Octicons, text: 'Device permissions' },
        { iconName: 'download', iconLibrary: Icons.Octicons, text: 'Archiving and downloading' },
        { iconName: 'person-circle-plus', iconLibrary: Icons.FontAwesome6, text: 'Accessibility' },
        { iconName: 'language', iconLibrary: Icons.Entypo, text: 'Language' },
        { iconName: 'bar-chart', iconLibrary: Icons.Feather, text: 'Data usage and media quality' },
        { iconName: 'devices', iconLibrary: Icons.MaterialIcons, text: 'Website permissions' },
      ],
    },
    {
      title: 'For Families',
      data: [{ iconName: 'users', iconLibrary: Icons.Feather, text: 'Supervision' }],
    },
    {
      title: 'For professionals',
      data: [
        { iconName: 'chart-bar', iconLibrary: Icons.FontAwesome6, text: 'Account type and tools' },
        { iconName: 'verified', iconLibrary: Icons.Octicons, text: 'Meta Verified' },
      ],
    },
    {
      title: 'Your order and fundraisers',
      data: [{ iconName: 'payment', iconLibrary: Icons.MaterialIcons, text: 'Orders and payments' }],
    },
    {
      title: 'More info and support',
      data: [
        { iconName: 'help-buoy-sharp', iconLibrary: Icons.Ionicons, text: 'Help' },
        { iconName: 'user', iconLibrary: Icons.Feather, text: 'Account Status' },
        { iconName: 'information-circle-outline', iconLibrary: Icons.Ionicons, text: 'About' },
      ],
    },
  ];

  return (
    <SafeAreaView style={[{ color: Colors.primary }, tw``]}>
      <ScrollView>
        <View style={tw`flex flex-row items-center gap-5 px-4 mb-6`}>
          <Icons.AntDesign name="arrowleft" size={28} color={Colors.primary} />
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
              <Icons.FontAwesome name="user-circle" size={24} color={Colors.primary} />
              <View>
                <Text style={[{ color: Colors.primary }, tw`text-base text-white`]}>Accounts Centre</Text>
                <Text style={[{ color: Colors.medium }, tw``]}>Password, security, personal details, ads</Text>
              </View>
            </View>
            <Icons.FontAwesome name="angle-right" size={24} color={Colors.primary} />
          </View>
          <Text style={[{ color: Colors.medium }, tw`text-xs`]}>
            Manage your connected experiences and account settings across Meta technologies.
            <Text style={[{ color: Colors.textPrimary }, tw``]} onPress={() => Linking.openURL("https://youtube.com")}>Learn more</Text>
          </Text>
        </View>
        <View style={[{ backgroundColor: Colors.dimgrey }, tw`h-1.5 mt-4`]} />
        {sections.map((section, index) => (
          <View key={index}>
            <Section title={section.title} data={section.data} />
            <View style={[{ backgroundColor: Colors.dimgrey }, tw`h-1.5 mt-4`]} />
          </View>
        ))}
        <View style={tw`px-4`}>
          <Text style={[{ color: Colors.medium }, tw`py-4 text-base`]}>Login</Text>
          <Text style={[{ color: Colors.textPrimary }, tw`py-4 text-base`]}>Add account</Text>
          <Text style={[{ color: Colors.redDanger }, tw`py-4 text-base`]}>Log out</Text>
          <Text style={[{ color: Colors.redDanger }, tw`py-4 text-base`]}>Log out of all accounts</Text>
        </View>
        <View style={[{ backgroundColor: Colors.dimgrey }, tw`h-1.5 mt-4`]} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingsPrivacy;
