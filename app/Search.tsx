import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'twrnc';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../constants/Colors'
import { fetchPopularVideos } from '../api/videos';

const Search = () => {
    const [page, setPage] = useState(1);
    const [imageData, setImageData] = useState('');


    useEffect(() => {
        const fetchData = async () => {
            try {
                // Assuming fetchPopularVideos is an asynchronous function
                const data = await fetchPopularVideos(page);
                setImageData(data?.videos);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [page, !imageData])    

    const vid = "https://vod-progressive.akamaized.net/exp=1705240717~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4242%2F11%2F296210754%2F1127677370.mp4~hmac=bbab3ffce0bd51da6882fc88b1bf6f4af33e7dbd48c80ebf9d87cee8de1faf6e/vimeo-prod-skyfire-std-us/01/4242/11/296210754/1127677370.mp4";

    return (
        <View style={tw`px-3`}>
            <View style={[{ backgroundColor: Colors.dimgrey }, tw`flex flex-row p-2 px-3 rounded-xl gap-4 items-center`]}>
                <Ionicons name="search-outline" size={22} color={Colors.primary} />
                <Text style={[{ color: Colors.medium }, tw`text-base`]}>Search</Text>
            </View>
            <View style={tw`flex flex-row flex-wrap`}>
                {
                    imageData && imageData?.map((item) => (
                        <Image
                            key={item.id}
                            source={{ uri: item.image }}
                            style={{ width: '33%', height: 100, objectFit: 'contain' }}
                        />
                    ))
                }

            </View>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({})