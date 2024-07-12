import React, { useState, useEffect } from 'react';
import axios from 'axios';  // axios 임포트 추가
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './LearnExpression.css';

function LearnExpression() {
    const navigate = useNavigate();
    const [expression, setLearningExpressions] = useState({ title: '', originalSentence: '', meaning: '', newExample: '' });

    useEffect(() => {
        const fetchLearningExpressions = async () => {
            const videoId = localStorage.getItem('videoId');
            const expressionLevel = localStorage.getItem('selectedExpressionLevel');
            const expressionNumber = localStorage.getItem('selectedExpressionNumber');
    
            try {
                const response = await axios.post(`http://localhost:5000/api/youtube/details/${videoId}`, {
                    expressionLevel,
                    expressionNumber,
                });
    
                setLearningExpressions(response.data.learningExpressions);
            } catch (error) {
                console.error('Failed to fetch learning expressions:', error);
            }
        };
    
        fetchLearningExpressions();
    }, []);

    return (
        <div className="container">
            <h1 className="my-4">{expression.title}</h1>
            <div className="content">
                <div className="video-section">
                    <iframe
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <p className="original-sentence"><strong>원본 문장</strong><br />{expression.originalSentence}</p>
                </div>
                <div className="meaning-section">
                    <h3>뜻</h3>
                    <p>{expression.meaning}</p>
                    <h3><br></br>새로운 예문</h3>
                    <p>{expression.newExample}</p>
                </div>
            </div>
            <div className="button-container">
                <Button variant="secondary" onClick={() => navigate(-1)}>뒤로 가기</Button>
                <Button variant="success" onClick={() => navigate('/quiz')}>다음</Button>
            </div>
        </div>
    );
}

export default LearnExpression;
