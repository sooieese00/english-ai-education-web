const { getVideoCaption, saveCaption, getCaption } = require('../api/youtube');
const Caption = require('../models/Caption');


// 자막 텍스트를 데이터베이스에 저장하는 함수
const saveCaption = async (videoId, captionId, text) => {
    const newCaption = new Caption({ videoId, captionId, text });
    await newCaption.save();
    console.log('Caption saved:', newCaption);
};


// 자막 텍스트를 가져오는 API
const fetchCaption = async (req, res) => {
    const videoId = req.params.videoId;

    try {
        const caption = await Caption.findOne({ videoId });
        if (!caption) {
            return res.status(404).send('No captions found for this video.');
        }
        res.json(caption); 
    } catch (error) {
        console.error('Error fetching captions:', error);
        res.status(500).send('Server error');
    }
};

module.exports = { saveCaption, fetchCaption };



