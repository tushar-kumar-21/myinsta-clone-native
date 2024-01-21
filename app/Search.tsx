import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import tw from 'twrnc';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../constants/Colors';
import { fetchPopularVideos } from '../api/videos';
import Store from '../components/common/store';

const Search = () => {
    const [page, setPage] = useState(6);
    const [imageData, setImageData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [shouldFetchData, setShouldFetchData] = useState(true);
    const { generateUniqueId } = Store();


    const fetchData = async () => {
        if (!shouldFetchData) {
            return;
        }

        try {
            setLoading(true);
            const data = await fetchPopularVideos(page);
            setImageData((prevData) => [...prevData, ...(data?.videos || [])]);
            setPage((prevPage) => prevPage + 1);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setShouldFetchData(false);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();        
    }, [page, shouldFetchData]);

    // You can use this function to manually trigger data fetching when needed
    const triggerFetchData = () => {
        setShouldFetchData(true);
    };

    const renderItem = ({ item }) => (
        <Image
            key={generateUniqueId()}
            source={{ uri: item.image }}
            style={{ width: '33%', height: 100, aspectRatio: 1, objectFit: 'cover' }}
        />
    );

    const renderFooter = () => {
        return (
            <View style={tw`my-12 items-center`}>
                <ActivityIndicator size={70} color={Colors.medium} />
            </View>
        )
    };

    return (
        <View style={tw`flex-1`}>
            <View style={[{ backgroundColor: Colors.dimgrey }, tw`flex flex-row p-2 px-3 rounded-xl gap-4 items-center`]}>
                <Ionicons name="search-outline" size={22} color={Colors.primary} />
                <Text style={[{ color: Colors.medium }, tw`text-base`]}>Search</Text>
            </View>

            <FlatList
                data={imageData}
                renderItem={renderItem}
                onEndReached={triggerFetchData}
                onEndReachedThreshold={0.1}
                ListFooterComponent={renderFooter}
                contentContainerStyle={tw` gap-[2px] mt-3 pb-20 `}
                numColumns={3}
            />
        </View>
    );
};

export default Search;

const styles = StyleSheet.create({});
