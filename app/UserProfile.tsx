import { StyleSheet, Text, View, Image } from 'react-native'
import FeatherIcons from '@expo/vector-icons/Feather';
import tw from 'twrnc';
import Colors from '../constants/Colors';

const UserProfile = () => {
    return (
        <View>
            <View style={tw`flex flex-row justify-between px-5`}>
                <View style={tw`flex flex-row items-center`}>
                    <Text style={[{ color: Colors.primary }, tw`text-2xl font-bold`]}>tusharcr4</Text>
                    <FeatherIcons name="chevron-down" size={25} color={Colors.primary} />
                </View>
                <View style={tw`flex flex-row items-center gap-6`}>
                    <FeatherIcons name="plus-square" size={30} color={Colors.primary} />
                    <FeatherIcons name="menu" size={37} color={Colors.primary} />
                </View>
            </View>
            <View style={tw`flex flex-row justify-between items-center border border-white`}>
                <View style={tw` flex flex-col items-center gap-1`}>
                    <Image
                        source={{ uri: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
                        style={tw`w-25 aspect-square rounded-full`}                        
                    />
                    <Text style={[{color:Colors.primary}, tw`font-semibold`]}>Tushar</Text>
                </View>
                <View style={tw`flex flex-row`}>
                    <View >
                        <Text style={[{color:Colors.primary}, tw`font-bold`]}>0</Text>
                        <Text style={{color:Colors.primary}}>Posts</Text>
                    </View>
                    
                    <View>
                        <Text style={[{color:Colors.primary}, tw`font-bold`]}>45</Text>
                        <Text style={{color:Colors.primary}}>Followers</Text>
                    </View>
                    
                    <View>
                        <Text style={[{color:Colors.primary}, tw`font-bold`]}>42</Text>
                        <Text style={{color:Colors.primary}}>Following</Text>
                    </View>                    
                </View>
            </View>
        </View>
    )
}

export default UserProfile

const styles = StyleSheet.create({});