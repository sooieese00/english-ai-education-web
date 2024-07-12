import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Home.css';


function Home() {
    const navigate = useNavigate(); // useNavigate 훅 사용

    const handleButtonClick = () => {
        navigate('/youtube-link-input');
    };

    return (
        <div className="container">
            <h1 className="my-4">원하는대로! Langbot 영어</h1>
            <Button variant="primary" onClick={handleButtonClick}>지금 바로 시작합시다!</Button> 
        </div>
    );
}

export default Home;
