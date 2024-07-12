import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ExpressionNumberSetting.css';

function ExpressionNumberSetting() {
    const [selectedOption, setSelectedOption] = useState(null);
    const navigate = useNavigate();

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        localStorage.setItem('selectedExpressionNumber', option); // 선택한 표현 개수를 로컬 스토리지에 저장
    };

    const handleNext = () => {
        navigate('/learn-expression'); // 다음 화면으로 이동
    };

    return (
        <div className="number-selection">
            <h2>몇 개의 표현을 학습할까요?</h2>
            <div className="options">
                <div className={`option ${selectedOption === '5' ? 'selected' : ''}`} 
                    onClick={() => handleOptionClick('5')}>
                    <p className="number">5개</p>
                    <p className="description">학습 시간이 많이 없을 때 좋아요</p>
                </div>
                <div className={`option ${selectedOption === '10' ? 'selected' : ''}`} 
                    onClick={() => handleOptionClick('10')}>
                    <p className="number">10개</p>
                    <p className="description">다시 영상을 볼 때 내용을 잘 이해할 수 있어요</p>
                </div>
                <div className={`option ${selectedOption === '20' ? 'selected' : ''}`} 
                    onClick={() => handleOptionClick('20')}>
                    <p className="number">20개</p>
                    <p className="description">직접 튜터가 될 수 있을 정도예요!</p>
                </div>
            </div>
            <button className="next-button" onClick={handleNext}>다음</button>
        </div>
    );
}

export default ExpressionNumberSetting;
