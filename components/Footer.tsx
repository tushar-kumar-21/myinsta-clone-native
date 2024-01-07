import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../constants/Colors';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type FooterProps = NativeStackScreenProps<RootStackParamList, 'Home'>

const Footer = () => {
    const navigation = useNavigation<FooterProps['navigation']>();

    return (
        <View style={[{ backgroundColor: '#000' }, tw`flex flex-row w-full justify-between pb-5 pt-2 px-4 border border-t-gray-800 absolute bottom-0`]}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Ionicons name="home" size={28} color={Colors.primary} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                <Ionicons name="search" size={28} color={Colors.primary} />
            </TouchableOpacity>

            <Ionicons name="duplicate-outline" size={28} color={Colors.primary} />
            <Ionicons name="play-circle-outline" size={28} color={Colors.primary} />
            <Image
                source={{ uri: 'https://picsum.photos/seed/696/3000/2000' }}
                style={tw`w-7 h-7 rounded-full`}
            />
        </View>
    )
}

export default Footer;

const styles = StyleSheet.create({})