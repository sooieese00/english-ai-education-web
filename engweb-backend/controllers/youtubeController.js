const { saveCaptionToDatabase, getCaptionFromDatabase } = require('../services/youtubeService');

// 자막 텍스트를 데이터베이스에 저장
const saveCaption = async (req, res) => {
    const { videoId, captionId, text } = req.body;

    try {
        await saveCaptionToDatabase(videoId, captionId, text);
        res.status(201).send('Caption saved successfully.');
    } catch (error) {
        console.error('Error saving caption:', error);
        res.status(500).send('Server error');
    }
};

// 데이터베이스에서 자막 텍스트를 가져오기
const fetchCaptionFromDatabase = async (req, res) => {
    const videoId = req.params.videoId;

    try {
        const caption = await getCaptionFromDatabase(videoId);
        if (!caption) {
            return res.status(404).send('No captions found for this video.');
        }
        res.json(caption); 
    } catch (error) {
        console.error('Error fetching captions:', error);
        res.status(500).send('Server error');
    }
};

module.exports = { fetchCaptionFromDatabase,  saveCaption };
