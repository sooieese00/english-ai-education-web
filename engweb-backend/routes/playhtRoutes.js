const express = require('express');
const { generateVoice } = require('../services/playhtService');

const router = express.Router();

router.post('/voice', generateVoice);

module.exports = router;
