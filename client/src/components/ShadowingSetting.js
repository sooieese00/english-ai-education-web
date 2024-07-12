import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import './ShadowingSetting.css';

function ShadowingSetting() {
    const [selectedVoice, setSelectedVoice] = useState(null);
    const [captionText, setCaptionText] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCaptionText = async () => {
            const videoId = localStorage.getItem('videoId');
            if (!videoId) {
                alert('유튜브 URL을 입력해 주세요.');
                return;
            }

            try {
                const response = await fetch(`http://localhost:5000/api/caption/${videoId}`);
                if (response.ok) {
                    const data = await response.json();
                    setCaptionText(data.captionText);
                } else {
                    alert('유튜브 스크립트를 찾을 수 없습니다.');
                }
            } catch (error) {
                console.error('Error fetching captions:', error);
                alert('자막 텍스트를 가져오는 중 오류가 발생했습니다.');
            }
        };

        fetchCaptionText();
    }, []);

    const handleVoiceSelect = (voice) => {
        setSelectedVoice(voice);
        localStorage.setItem('selectedVoice', voice); // 선택한 목소리를 로컬 스토리지에 저장
    };

    const handleNext = async () => {
        const videoId = localStorage.getItem('videoId');
        if (!videoId) {
            alert('유튜브 URL을 입력해 주세요.');
            return;
        }

        const text = captionText;
        if (!text) {
            alert('유튜브 스크립트를 찾을 수 없습니다.');
            return;
        }

        const voice = selectedVoice;

        try {
            const response = await fetch('http://localhost:5000/api/voice', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text, voice }),
            });
            const audioData = await response.json();
            localStorage.setItem('audioData', JSON.stringify(audioData)); // 생성된 오디오 데이터 저장
            navigate('/learn-shadowing');
        } catch (error) {
            console.error('Error generating voice:', error);
            alert('음성 생성 중 오류가 발생했습니다.');
        }
    };


    return (
        <div className="shadowing-selection">
            <h2 className="my-4">누구의 목소리로 쉐도잉을 연습할까요?</h2>
            <div className="options">
                <div 
                    className={`option ${selectedVoice === 'original' ? 'selected' : ''}`} 
                    onClick={() => handleVoiceSelect('original')}
                >
                    <Card>
                    <Card.Img variant="top" src="/images/originalsound.jpg" alt="OriginalSound" className="voice-image" />
                        <Card.Body>                        
                            <p className="description">유튜브 음성 그대로</p>
                        </Card.Body>
                    </Card>
                </div>
                <div 
                    className={`option ${selectedVoice === 'hagrid' ? 'selected' : ''}`} 
                    onClick={() => handleVoiceSelect('hagrid')}
                >
                    <Card>
                        <Card.Img variant="top" src="/images/hagrid.jpg" alt="Hagrid" className="voice-image" />
                        <Card.Body>
                            <p className="description">Hagrid</p>
                        </Card.Body>
                    </Card>
                </div>
                <div 
                    className={`option ${selectedVoice === 'younYuhJung' ? 'selected' : ''}`} 
                    onClick={() => handleVoiceSelect('younYuhJung')}
                >
                    <Card>
                        <Card.Img variant="top" src="/images/younYuhJung.jpg" alt="윤여정" className="voice-image" />
                        <Card.Body>
                            <p className="description">윤여정</p>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <button className="next-button" onClick={handleNext}>다음</button>
        </div>
    );
}

export default ShadowingSetting;
