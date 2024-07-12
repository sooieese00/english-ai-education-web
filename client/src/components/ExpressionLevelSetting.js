import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ExpressionLevelSetting.css';

function ExpressionLevelSetting() {
    const [selectedOption, setSelectedOption] = useState(null);
    const navigate = useNavigate();

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        localStorage.setItem('selectedExpressioLevel', option); // 선택한 표현 개수를 로컬 스토리지에 저장
    };

    const handleNext = () => {
        navigate('/expression-level-setting'); // 다음 화면으로 이동
    };

    return (
        <div className="level-selection">
            <h2>몇 개의 표현을 학습할까요?</h2>
            <div className="options">
                <div className={`option ${selectedOption === 'Basic' ? 'selected' : ''}`} 
                    onClick={() => handleOptionClick('Basic')}>
                    <p className="level">걸음마</p>
                    <p className="description">영어라는 언어에 처음이에요. 한국어 자막 없이는 영상을 볼 수 없어요</p>
                </div>
                <div className={`option ${selectedOption === 'Intermediate' ? 'selected' : ''}`} 
                    onClick={() => handleOptionClick('Intermediate')}>
                    <p className="level">초급</p>
                    <p className="description">영어 자막이 있어도 어휘가 잘 들리지 않아요</p>
                </div>
                <div className={`option ${selectedOption === 'Advanced' ? 'selected' : ''}`} 
                    onClick={() => handleOptionClick('Advanced')}>
                    <p className="level">중급</p>
                    <p className="description">자막 없이도 영상 절반 정도는 이해할 수 있어요</p>
                </div>
                <div className={`option ${selectedOption === 'Proficient' ? 'selected' : ''}`} 
                    onClick={() => handleOptionClick('Proficient')}>
                    <p className="level">고급</p>
                    <p className="description">자막 없이도 대부분의 내용을 이해하고, 생소한 단어나 문장의 의미를 문맥을 통해 추론할 수 있어요</p>
                </div>
            </div>
            <button className="next-button" onClick={handleNext}>다음</button>
        </div>
    );
}

export default ExpressionLevelSetting;
