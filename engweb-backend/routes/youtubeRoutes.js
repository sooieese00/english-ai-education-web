const express = require('express');
const { fetchCaptionFromDatabase, saveCaption } = require('../controllers/youtubeController');
const router = express.Router();


// 자막 텍스트 가져오기
router.get('/captions/:videoId', fetchCaptionFromDatabase);

// 자막 텍스트 저장하기
router.post('/captions', saveCaption);

module.exports = router;
