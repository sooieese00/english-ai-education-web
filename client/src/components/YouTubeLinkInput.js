import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './YouTubeLinkInput.css';

function YouTubeLinkInput() {
    const [url, setUrl] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault(); // 페이지 리로드 방지

        const videoId = extractVideoId(url);
        if (!videoId) {
            setError('유효한 유튜브 URL을 입력해주세요.');
            alert('유효한 유튜브 URL을 입력해주세요.'); 
            return;
        }

        // 비디오 ID를 로컬 스토리지에 저장
        localStorage.setItem('videoId', videoId);
        // 다음 페이지로 이동
        navigate(`/study-order-selection`);
    };

    const extractVideoId = (url) => {
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
    };

    return (
        <div className="link-container">
            <h2>학습을 원하시는 유튜브 영상의 URL을 입력해주세요!</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="youtubeUrl">
                    <Form.Control 
                        type="url" 
                        placeholder="여기에 입력하세요" 
                        className="link-input" 
                        value={url} 
                        onChange={(e) => setUrl(e.target.value)} 
                    />
                </Form.Group>
                <Button variant="primary" type="submit">제출</Button>
            </Form>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
}

export default YouTubeLinkInput;
