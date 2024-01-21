import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import tw from 'twrnc'
import icons from "@expo/vector-icons/"
import { Entypo } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import { useEffect, useState } from 'react';
import { fetchPopularPhotos } from '../../api/photos';

const Discover = ({imageData}) => {

    const renderItem = ({ item: photos, index }) => (
        <>
            <View
                style={tw`border border-slate-600 w-36 rounded-md relative p-3 px-2 h-51`}
                key={photos?.photographer_id}
            >
                <Entypo
                    name="cross"
                    size={24}
                    color={Colors.medium}
                    style={tw`text-right absolute right-[.5] top-[.5]`}
                />
                <View style={tw`flex flex-col items-center justify-between h-full`}>
                    <Image
                        source={{ uri: photos?.src?.large2x }}
                        style={tw`w-20 aspect-square rounded-full`}
                    />
                    <View style={tw`flex flex-col items-center`}>
                        <Text style={[{ color: Colors.primary }, tw`font-semibold`]}>{photos?.photographer}</Text>
                        <Text style={[{ color: Colors.medium }, tw`text-[3.2]`]}>Follows you</Text>
                    </View>
                    <TouchableOpacity style={[{ backgroundColor: Colors.textPrimary }, tw`w-full p-1.8 rounded-2 mt-2`]}>
                        <Text style={tw`text-white font-semibold text-center`}>Follow</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {
                index === imageData.length - 1 &&
                <View style={tw`border border-slate-600 w-36 rounded-md relative p-3 px-2 h-51 ml-1`}>
                    <Entypo
                        name="cross"
                        size={24}
                        color={Colors.medium}
                        style={tw`text-right absolute right-[.5] top-[.5]`}
                    />
                    <View style={tw`flex flex-col items-center justify-between h-full`}>
                        <View style={tw`relative w-20 h-20`}>
                            <Image
                                source={{ uri: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
                                style={tw`w-15 aspect-square rounded-full`}
                            />
                            <Image
                                source={{ uri: 'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
                                style={tw`w-15 aspect-square rounded-full absolute right-2 top-3`}
                            />
                        </View>
                        <View style={tw`flex flex-col items-center`}>
                            <Text style={[{ color: Colors.primary }, tw`font-semibold`]}>Jordan hersy</Text>
                            <Text style={[{ color: Colors.medium }, tw`text-[3.2]`]}>Follows you</Text>
                        </View>
                        <TouchableOpacity style={[{ backgroundColor: Colors.dimgrey }, tw`w-full p-1.8 rounded-2 mt-2`]}>
                            <Text style={tw`text-white font-semibold text-center`}>See All</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            }
        </>
    )

    return (
        <View style={tw``}>
            <View style={tw`flex flex-row justify-between items-center mb-2 px-3`}>
                <Text style={tw`text-white text-sm font-semibold`}>Discover people</Text>
                <Text style={[{ color: Colors.textPrimary }, tw`text-sm font-semibold`]}>See All</Text>
            </View>
            <View style={tw`flex flex-row`}>
                <FlatList
                    data={imageData}
                    horizontal
                    renderItem={renderItem}
                    contentContainerStyle={tw`flex flex-row gap-1 px-3`}
                />

            </View>


        </View>
    )
}

export default Discover

const styles = StyleSheet.create({})