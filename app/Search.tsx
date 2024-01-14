import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../constants/Colors'

const Search = () => {
    return (
        <View style={tw`px-3`}>
            <View style={[{ backgroundColor: Colors.dimgrey }, tw`flex flex-row p-2 px-3 rounded-xl gap-4 items-center`]}>
                <Ionicons name="search-outline" size={22} color={Colors.primary} />
                <Text style={[{ color: Colors.medium }, tw`text-base`]}>Search</Text>
            </View>
            <View>
                
            </View>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({})