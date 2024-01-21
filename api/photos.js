import axios from 'axios';

export const fetchPopularPhotos = async (page, perPage) => {
    const apiKey = 'v57ka443EQ0G2plWF7DhtsDupxFfYa1vVx0s2A0kAiOvqKrhbhglz2Uf';
    const apiUrl = `https://api.pexels.com/v1/curated?page=${page}&per_page=${perPage}`;

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
