const axios = require('axios');
const { Caption } = require('../models/Caption');
const dotenv = require('dotenv');
dotenv.config();

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const BASE_URL_YOUTUBE = 'https://www.googleapis.com/youtube/v3';

// API를 호출하여 자막을 가져옴
const fetchCaptionsFromApi = async (videoId) => {
    try {
        const response = await axios.get(`${BASE_URL_YOUTUBE}/captions`, {
            params: {
                part: 'snippet',
                videoId: videoId,
                key: YOUTUBE_API_KEY,
            },
        });
        return response.data.items;
    } catch (error) {
        console.error('Error fetching video captions:', error);
        throw error;
    }
};

// 데이터베이스에 자막 저장
const saveCaptionToDatabase = async (videoId, captionId, text) => {
    const newCaption = new Caption({ videoId, captionId, text });
    await newCaption.save();
    console.log('Caption saved:', newCaption);
};

// 데이터베이스에서 자막 가져오기
const getCaptionFromDatabase = async (videoId) => {
    return await Caption.findOne({ videoId });
};

module.exports = { fetchCaptionsFromApi, saveCaptionToDatabase, getCaptionFromDatabase };
