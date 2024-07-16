const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// DB 연결
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

// 기본 라우트 설정 예시
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// 추가 라우트 설정
// app.use('/api/your-route', yourRouteHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
