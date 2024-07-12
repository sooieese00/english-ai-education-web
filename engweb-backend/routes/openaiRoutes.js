const express = require('express');
const { fetchLearningExpressions } = require('../controllers/openaiController');
const router = express.Router();

// 학습 표현 가져오기
router.post('/expressions/:videoId', fetchLearningExpressions);