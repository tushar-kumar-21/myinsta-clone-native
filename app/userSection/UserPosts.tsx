import React, { useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import tw from 'twrnc';
import { useState } from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import MyPosts from './MyPosts';
import Store from '../../components/common/store';
import { fetchPopularPhotos } from '../../api/photos';

const UserPosts = () => {
    const [status, setStatus] = useState('All');
    const [imageData, setImageData] = useState([]);
    const { generateSingleDigitUniqueNumber } = Store();

    const fetchPhotosData = async (page: number, perPage: number) => {
        const data = await fetchPopularPhotos(page, perPage)
        setImageData(data?.photos || [])
    }

    useEffect(() => {
        fetchPhotosData(38, 10)
    }, [])

    console.log(generateSingleDigitUniqueNumber())

    const positionX = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: positionX.value }],
            width: '50%'
        };
    });

    return (
        <View style={tw`mt-6 w-full mb-25`}>
            <View style={tw`flex flex-row justify-between`}>
                <TouchableOpacity
                    style={tw`w-1/2`}
                    onPress={() => {
                        setStatus('All')
                        positionX.value = withTiming(0);
                        fetchPhotosData(generateSingleDigitUniqueNumber(), 12)
                    }}
                >
                    <View style={tw`border-white pb-2`}>
                        <MaterialIcons
                            name="grid-on"
                            size={24}
                            color={`${status === 'All' ? Colors.primary : Colors.medium}`}
                            style={tw`text-center`}
                        />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={tw`w-1/2`}
                    onPress={() => {
                        setStatus('User')
                        positionX.value = withTiming(200);
                        fetchPhotosData(generateSingleDigitUniqueNumber(), 12)
                    }}
                >
                    <View style={tw`border-white pb-2`}>
                        <MaterialCommunityIcons
                            name="comment-account-outline"
                            size={26}
                            color={`${status === 'User' ? Colors.primary : Colors.medium}`}
                            style={tw`text-center`}
                        />
                    </View>
                </TouchableOpacity>
            </View>
            <Animated.View style={[tw`h-.5 bg-white`, animatedStyle]} />
            <View>
                <MyPosts
                    imageData={imageData}
                />
            </View>
        </View>
    );
};

export default UserPosts;
