import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { fetchPopularPhotos } from '../../api/photos';
import Store from '../../components/common/store';
import tw from 'twrnc';

const MyPosts = ({imageData}) => {
    const { generateUniqueId } = Store();

    const renderItem = ({ item }) => (
        <Image
            key={generateUniqueId()}
            source={{ uri: item?.src?.large2x }}
            style={{ width: '33%', height: 100, aspectRatio: 1, objectFit: 'cover' }}
        />
    );

    return (        
            <FlatList
                data={imageData}
                renderItem={renderItem}                                
                contentContainerStyle={tw` gap-[2px] mt-3 pb-20 `}
                numColumns={3}
            />        
    )
}

export default MyPosts

const styles = StyleSheet.create({})