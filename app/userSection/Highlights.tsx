import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import tw from 'twrnc';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import { useEffect } from 'react';

const Highlights = ({ imageData}) => {

    const renderItem = ({ item: photos, index }) => (
        <>
            <View
                style={tw`flex gap-1 items-center`}
                key={photos?.id}
            >
                <View style={tw`border border-slate-600 rounded-full p-.5 relative`}>
                    <Image
                        source={{ uri: photos?.src?.large2x }}
                        style={tw`w-15 aspect-square rounded-full`}
                    />
                </View>
                <Text style={[{ color: Colors.primary }, tw``]}>Henry</Text>
            </View>
            {
                index === imageData?.length - 1 && (
                    <View style={tw`flex gap-1 items-center ml-2`}>
                        <View style={tw`border border-white rounded-full p-.5 flex items-center aspect-square w-16 justify-center relative`}>
                            <AntDesign name="plus" size={24} color={Colors.primary} style={tw`aspect-square `} />
                        </View>
                        <Text style={[{ color: Colors.primary }, tw``]}>New</Text>
                    </View>
                )
            }
        </>
    )

    return (        
            <View style={tw`flex flex-row py-5 items-center px-3 mt-2`}>
                <FlatList
                    data={imageData}
                    horizontal
                    renderItem={renderItem}
                    contentContainerStyle={tw`gap-2`}
                />
            </View>        
    )
}

export default Highlights

const styles = StyleSheet.create({});