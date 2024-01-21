import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import tw from 'twrnc';
import Colors from '../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import Footer from '../../components/Footer';
import Post from '../../components/Post';
import { fetchPopularPhotos } from '../../api/photos';
import Store from '../../components/common/store';
import Stories from './Stories';

const Home = ({ navigation }) => {

    const [page, setPage] = useState(6);
    const [imageData, setImageData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [shouldFetchData, setShouldFetchData] = useState(true);
    const { generateSingleDigitUniqueNumber } = Store();

    const fetchPhotosData = async (page: number, perPage: number) => {
        if (!shouldFetchData) {
            return;
        }

        try {
            setLoading(true);
            const data = await fetchPopularPhotos(page, perPage);
            setImageData((prevData) => [...prevData, ...(data?.photos || [])]);
            setPage((prevPage) => prevPage + 1);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setShouldFetchData(false);
            setLoading(false);
        }
    }
    const triggerFetchData = () => {
        setShouldFetchData(true);
    };


    useEffect(() => {
        fetchPhotosData(generateSingleDigitUniqueNumber(), 50)        
    }, []);


    return (
        // <ScrollView>
            <View style={[{ backgroundColor: Colors.secondary }, tw`mb-40`]}>
                <View>
                    <Header />
                    <Stories/>
                </View>                
                    <Post
                        imageData={imageData}
                        triggerFetchData={triggerFetchData}
                    />                
            </View>
        // </ScrollView>
    )
}

export default Home;

const styles = StyleSheet.create({})