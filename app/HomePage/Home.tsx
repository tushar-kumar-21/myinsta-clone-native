import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import tw from 'twrnc';
import Colors from '../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import Footer from '../../components/Footer';
import Post from '../../components/Post';

const Home = ({navigation}) => {
    return (
        <>
            <ScrollView style={[{backgroundColor:Colors.secondary},tw``]}>
                <View>
                    <Header />
                    <ScrollView scrollEnabled horizontal={true}>
                        <View style={tw`flex flex-row h-31 w-full gap-3 items-center border border-b-gray-800 pb-1 px-3 `}>
                            <View style={tw`flex items-center flex-col justify-between h-full p-1 pt-3`}>
                                <View style={tw``}>
                                    <Image
                                        source={{ uri: 'https://picsum.photos/seed/696/3000/2000' }}
                                        style={tw`w-18 h-18 rounded-full`}
                                    />
                                </View>
                                <Text style={[{ color: Colors.primary }, tw`text-xs`]}>Your story</Text>
                                <Ionicons name="add-circle" size={32} color={Colors.primary} style={tw`absolute bottom-8 right-1`} />
                            </View>
                            <View style={tw`flex items-center flex-col justify-between h-full p-1`}>
                                <View style={tw`border-[2.5px] rounded-full p-1 border-pink-500`}>
                                    <Image
                                        source={{ uri: 'https://picsum.photos/seed/696/3000/2000' }}
                                        style={tw`w-19 h-19 rounded-full`}
                                    />
                                </View>
                                <Text style={[{ color: Colors.primary }, tw`text-xs`]}>Cristiano</Text>
                            </View>
                            <View style={tw`flex items-center flex-col justify-between h-full p-1`}>
                                <View style={tw`border-[2.5px] rounded-full p-1 border-pink-500`}>
                                    <Image
                                        source={{ uri: 'https://picsum.photos/seed/696/3000/2000' }}
                                        style={tw`w-19 h-19 rounded-full`}
                                    />
                                </View>
                                <Text style={[{ color: Colors.primary }, tw`text-xs`]}>Cristiano</Text>
                            </View>
                            <View style={tw`flex items-center flex-col justify-between h-full p-1`}>
                                <View style={tw`border-[2.5px] rounded-full p-1 border-pink-500`}>
                                    <Image
                                        source={{ uri: 'https://picsum.photos/seed/696/3000/2000' }}
                                        style={tw`w-19 h-19 rounded-full`}
                                    />
                                </View>
                                <Text style={[{ color: Colors.primary }, tw`text-xs`]}>Cristiano</Text>
                            </View>
                            <View style={tw`flex items-center flex-col justify-between h-full p-1`}>
                                <View style={tw`border-[2.5px] rounded-full p-1 border-pink-500`}>
                                    <Image
                                        source={{ uri: 'https://picsum.photos/seed/696/3000/2000' }}
                                        style={tw`w-19 h-19 rounded-full`}
                                    />
                                </View>
                                <Text style={[{ color: Colors.primary }, tw`text-xs`]}>Cristiano</Text>
                            </View>
                            <View style={tw`flex items-center flex-col justify-between h-full p-1`}>
                                <View style={tw`border-[2.5px] rounded-full p-1 border-pink-500`}>
                                    <Image
                                        source={{ uri: 'https://picsum.photos/seed/696/3000/2000' }}
                                        style={tw`w-19 h-19 rounded-full`}
                                    />
                                </View>
                                <Text style={[{ color: Colors.primary }, tw`text-xs`]}>Cristiano</Text>
                            </View>
                            <View style={tw`flex items-center flex-col justify-between h-full p-1`}>
                                <View style={tw`border-[2.5px] rounded-full p-1 border-pink-500`}>
                                    <Image
                                        source={{ uri: 'https://picsum.photos/seed/696/3000/2000' }}
                                        style={tw`w-19 h-19 rounded-full`}
                                    />
                                </View>
                                <Text style={[{ color: Colors.primary }, tw`text-xs`]}>Cristiano</Text>
                            </View>
                            <View style={tw`flex items-center flex-col justify-between h-full p-1`}>
                                <View style={tw`border-[2.5px] rounded-full p-1 border-pink-500`}>
                                    <Image
                                        source={{ uri: 'https://picsum.photos/seed/696/3000/2000' }}
                                        style={tw`w-19 h-19 rounded-full`}
                                    />
                                </View>
                                <Text style={[{ color: Colors.primary }, tw`text-xs`]}>Cristiano</Text>
                            </View>
                            <View style={tw`flex items-center flex-col justify-between h-full p-1`}>
                                <View style={tw`border-[2.5px] rounded-full p-1 border-pink-500`}>
                                    <Image
                                        source={{ uri: 'https://picsum.photos/seed/696/3000/2000' }}
                                        style={tw`w-19 h-19 rounded-full`}
                                    />
                                </View>
                                <Text style={[{ color: Colors.primary }, tw`text-xs`]}>Cristiano</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </ScrollView>
        </>
    )
}

export default Home;

const styles = StyleSheet.create({})