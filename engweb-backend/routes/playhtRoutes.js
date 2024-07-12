const express = require('express');
const { generateVoice } = require('../services/playhtService');
const { fetchCaption } = require('../controllers/youtubeController');

const router = express.Router();

router.post('/voice', async (req, res) => {
    const { text, voice } = req.body;
    try {
        const audioData = await generateVoice(text, voice);
        res.json(audioData);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

router.get('/caption/:videoId', fetchCaption);

module.exports = router;
