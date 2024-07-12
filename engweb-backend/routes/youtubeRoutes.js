const express = require('express');
const { fetchCaption } = require('../controllers/youtubeController');
const router = express.Router();


// 자막 텍스트 가져오기
router.get('/captions/:videoId', fetchCaption);

module.exports = router;
