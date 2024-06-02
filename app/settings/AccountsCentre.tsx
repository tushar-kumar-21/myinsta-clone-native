import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import tw from 'twrnc';

const AccountsCentre = () => {
    return (
        <View>
            <LinearGradient
                colors={['#ff7e5f', '#feb47b']}
                style={styles.linearGradient}
            >
                <Text style={styles.text}>Custom Gradient</Text>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#ffffff',
        fontSize: 20,
    },
});

export default AccountsCentre;