import axios from 'axios';

export const fetchPopularVideos = async (page) => {
    const apiKey = 'v57ka443EQ0G2plWF7DhtsDupxFfYa1vVx0s2A0kAiOvqKrhbhglz2Uf';
    const apiUrl = `https://api.pexels.com/videos/popular?page=${page}&per_page=4`;

    try {
        const response = await axios.get(apiUrl, {
            headers: {
                Authorization: apiKey,
            },
        });                

        return response.data;
    } catch (error) {
        // Handle errors
        console.error('Error:', error);
        throw error;
    }
};
