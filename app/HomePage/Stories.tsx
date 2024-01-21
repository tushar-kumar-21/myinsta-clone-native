import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import tw from 'twrnc';
import Colors from '../../constants/Colors';
import { useEffect, useState } from 'react';
import { fetchPopularPhotos } from '../../api/photos';
import Store from '../../components/common/store';

const Stories = () => {

    const [imageData, setImageData] = useState([]);
    const { generateSingleDigitUniqueNumber } = Store();

    const fetchPhotosData = async (page: number, perPage: number) => {
        const data = await fetchPopularPhotos(page, perPage)
        setImageData(data?.photos || [])
    }

    useEffect(() => {
        fetchPhotosData(generateSingleDigitUniqueNumber(), 10)
    }, [])

    const renderItem = ({ item: photos, index }) => ( 
        <>
            {
                index === 0 && (
                    <View style={tw`flex items-center flex-col justify-between h-full p-0 pt-2 mr-3`}>
                        <View style={tw``}>
                            <Image
                                source={{ uri: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
                                style={tw`w-18 h-18 rounded-full`}
                            />
                        </View>
                        <Text style={[{ color: Colors.primary }, tw`text-xs`]}>Your story</Text>
                        <Ionicons name="add-circle" size={32} color={Colors.primary} style={tw`absolute bottom-8 right-1`} />
                    </View>
                )
            }
            <View style={tw`flex items-center flex-col justify-between h-full p-1 gap-1`}>
                <View style={tw`border-[2.5px] rounded-full p-1 border-pink-500`}>
                    <Image
                        source={{ uri: photos?.src?.large2x }}
                        style={tw`w-19 h-19 rounded-full`}
                    />
                </View>
                <Text style={[{ color: Colors.primary }, tw`text-xs`]}>{photos?.photographer.split(" ")[0]}</Text>
            </View>
            </>
        
    )

    return (        
            <FlatList
                horizontal
                data={imageData}
                renderItem={renderItem}
                contentContainerStyle={tw`flex flex-row h-30 mb-4 pt-1 gap-3 items-center border border-b-gray-800 pb-1 px-3 `}
            />        
    )
}

export default Stories

const styles = StyleSheet.create({});