import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../constants/Colors';
const insta = require('../assets/insta.png');
import tw from 'twrnc';

const Header = () => {
    return (
        <View style={[{backgroundColor:Colors.secondary},tw`flex flex-row justify-between px-5 pt-2`]}>
            <View style={tw`w-32`}>
                <Image
                    source={insta}
                    style={tw`w-full h-11`}
                />
            </View>
            <View style={tw`flex flex-row gap-6`}>
                <View>
                    <Ionicons name="heart-outline" size={28} color={Colors.primary} />
                    <Text style={tw`bg-red-500 rounded-full m-auto h-2 w-2 absolute right-1 top-[1px]`}></Text>
                </View>
                <View>
                    <Ionicons name="chatbubble-ellipses-outline" size={28} color={Colors.primary} />
                    <Text style={tw`bg-red-500 rounded-full text-xs m-auto w-4 h-4 text-center text-white absolute -right-1 -top-1`}>4</Text>
                </View>
            </View>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({    
});
