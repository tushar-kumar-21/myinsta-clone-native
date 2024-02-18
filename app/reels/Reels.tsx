import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import BottomSheetSettings from '../userSection/BottomSheetComp';

const Reels = () => {
    return (
        <View style={tw`flex-1`}>
            <Text style={tw`text-white`}>Reels</Text>
            <BottomSheetSettings/>
        </View>
    )
}

export default Reels;

const styles = StyleSheet.create({})