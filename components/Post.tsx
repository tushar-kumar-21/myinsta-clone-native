import { Image, StyleSheet, Text, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import tw from 'twrnc';
import Colors from '../constants/Colors';

const Post = () => {
    return (
        <View style={tw`mb-4`}>
            <View style={tw`flex flex-row justify-between items-center py-2 px-3`}>
                <View style={tw`flex flex-row justify-center gap-2 items-center`}>
                    <Image
                        source={{ uri: 'https://picsum.photos/seed/696/3000/2000' }}
                        style={tw`w-8 h-8 rounded-full`}
                    />
                    <View style={tw`flex flex-col`}>
                        <Text style={[{ color: Colors.primary }, tw`font-semibold`]}>allen.codes</Text>
                        <Text style={[{ color: Colors.primary }, tw` text-xs font-normal`]}>New Zealand</Text>
                    </View>
                </View>
                <Ionicons name="ellipsis-vertical-outline" size={20} color={Colors.primary} />
            </View>
            <Image
                source={{ uri: 'https://picsum.photos/seed/696/3000/2000' }}
                style={tw`w-full h-125`}
            />
            <View style={tw`px-4`}>
                <View style={tw`flex flex-row justify-between py-2`}>
                    <View style={tw`flex flex-row gap-3`}>
                        <Ionicons name="heart-outline" size={28} color={Colors.primary} />
                        <Ionicons name="chatbubbles-outline" size={28} color={Colors.primary} />
                        <Ionicons name="paper-plane-outline" size={28} color={Colors.primary} />
                    </View>
                    <Ionicons name="bookmark-outline" size={28} color={Colors.primary} />
                </View>
                <View style={tw`flex flex-row items-center w-full gap-3 py-2`}>
                    <Image
                        source={{ uri: 'https://picsum.photos/seed/696/3000/2000' }}
                        style={tw`h-5 w-5 rounded-full`}
                    />
                    <Text style={[{ color: Colors.primary }]}>
                        Liked by
                        <Text style={[tw`font-semibold`]}> camavinga </Text>
                        and
                        <Text style={[tw`font-semibold`]}> 1,675,555 </Text>
                        others
                    </Text>
                </View>
                <View style={tw``}>
                    <Text style={[{ color: Colors.primary }]}>
                        <Text>lisandro martinez </Text>
                        <Text>Really happy to be back with the team. Let's do this together!</Text>
                    </Text>
                </View>
                <Text style={[{ color: Colors.medium }, tw`mt-1`]}>View all <Text>3,343 </Text>comments</Text>
                <Text style={[{ color: Colors.medium }, tw`text-xs mt-1`]}>5 hours ago</Text>
            </View>
        </View>
    )
}

export default Post

const styles = StyleSheet.create({})