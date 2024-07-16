const { generateVoiceFromText } = require('../services/playhtService');
const { fetchCaptionsFromApi, saveCaptionToDatabase, getCaptionFromDatabase } = require('../services/youtubeService');

const generateVoice = async (req, res) => {
    const { videoId, voice } = req.body;

    try {
        // 자막 가져오기
        const videoCaptions = await fetchCaptionsFromApi(videoId);
        if (videoCaptions.length === 0) {
            return res.status(404).send('No captions found for this video.');
        }

        // 자막 텍스트 MongoDB에 저장하기
        const captionId = videoCaptions[0].id;
        const captionText = videoCaptions[0].snippet.title; // 여기서 실제 자막 텍스트를 가져오는 로직을 추가해야 합니다
        await saveCaptionToDatabase(videoId, captionId, captionText);

        // 저장된 자막 텍스트 가져오기
        const savedCaption = await getCaptionFromDatabase(videoId);

        // Play.ht API에 자막과 설정 전달하여 음성 생성
        const audioData = await generateVoiceFromText(savedCaption.text, voice);
        
        res.json(audioData);
    } catch (error) {
        console.error('Error generating voice:', error);
        res.status(500).send('Server error');
    }
};

module.exports = { generateVoice };
