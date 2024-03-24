import React from 'react'
import { Text, View } from 'react-native';
import Colors from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons'
import tw from 'twrnc';

const SearhBar = () => {
    return (
        <View style={[{ backgroundColor: Colors.dimgrey }, tw`flex flex-row p-1.8 px-3 mx-3 rounded-xl gap-4 items-center`]}>
            <Ionicons name="search-outline" size={22} color={Colors.primary} />
            <Text style={[{ color: Colors.medium }, tw`text-base`]}>Search</Text>
        </View>

    )
}

export default SearhBar;