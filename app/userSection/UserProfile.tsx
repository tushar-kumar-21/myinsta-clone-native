import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import FeatherIcons from '@expo/vector-icons/Feather';
import tw from 'twrnc';
import Colors from '../../constants/Colors';
import Discover from './Discover';
import Highlights from './Highlights';
import UserPosts from './UserPosts';
import { fetchPopularPhotos } from '../../api/photos';
import BottomSheetSettings from './BottomSheetComp';

const UserProfile = () => {
    const [imageData, setImageData] = useState('');
    const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

    const fetchPhotosData = async (page, perPage) => {
        const data = await fetchPopularPhotos(page, perPage)
        setImageData(data?.photos || [])
    }

    useEffect(() => {
        fetchPhotosData(9, 10)
    }, [])

    const handleBottomSheetToggle = () => {
        setBottomSheetVisible(!bottomSheetVisible);
    };

    return (
        <>
            <View style={tw`flex-1`}>
<BottomSheetSettings/>
                <FlatList
                    ListHeaderComponent={
                        <>
                            {/* Header */}
                            <View style={tw`flex flex-row justify-between px-4`}>
                                <View style={tw`flex flex-row items-center`}>
                                    <Text style={[{ color: Colors.primary }, tw`text-2xl font-bold`]}>tusharcr4</Text>
                                    <FeatherIcons name="chevron-down" size={25} color={Colors.primary} />
                                </View>
                                <View style={tw`flex flex-row items-center gap-6`}>
                                    <FeatherIcons name="plus-square" size={30} color={Colors.primary} />
                                    <FeatherIcons name="menu" size={35} color={Colors.primary} />
                                </View>
                            </View>

                            {/* Profile information */}
                            <View style={tw`flex flex-row justify-between items-center p-4`}>
                                <View style={tw` flex flex-col items-center gap-1`}>
                                    <Image
                                        source={{ uri: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
                                        style={tw`w-20 aspect-square rounded-full`}
                                    />
                                    <Text style={[{ color: Colors.primary }, tw`font-semibold`]}>Tushar</Text>
                                </View>
                                <View style={tw`flex flex-row gap-5`}>
                                    <View style={tw`flex flex-col items-center`}>
                                        <Text style={[{ color: Colors.primary }, tw`font-bold text-xl`]}>0</Text>
                                        <Text style={[{ color: Colors.primary }, tw`font-semibold text-[3.7]`]}>Posts</Text>
                                    </View>

                                    <View style={tw`flex flex-col items-center`}>
                                        <Text style={[{ color: Colors.primary }, tw`font-bold text-xl`]}>45</Text>
                                        <Text style={[{ color: Colors.primary }, tw`font-semibold text-[3.7]`]}>Followers</Text>
                                    </View>

                                    <View style={tw`flex flex-col items-center`}>
                                        <Text style={[{ color: Colors.primary }, tw`font-bold text-xl`]}>42</Text>
                                        <Text style={[{ color: Colors.primary }, tw`font-semibold text-[3.7]`]}>Following</Text>
                                    </View>
                                </View>
                            </View>
                        </>
                    }
                    data={[
                        { key: 'discover' },
                        { key: 'highlights' },
                        { key: 'userPosts' },
                        { key: 'bottomSheet' }
                    ]}
                    renderItem={({ item }) => {
                        switch (item.key) {
                            case 'discover':
                                return <Discover imageData={imageData} />;
                            case 'highlights':
                                return <Highlights />;
                            case 'userPosts':
                                return <UserPosts />;                          
                            default:
                                return null;
                        }
                    }}
                    keyExtractor={item => item.key}
                />
            </View>         
        </>
    )
}

const styles = StyleSheet.create({
    bottomSheetToggle: {
        backgroundColor: 'red',
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomSheetToggleText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default UserProfile;
