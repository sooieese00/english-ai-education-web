import React, { useEffect, useState } from 'react';

function LearnShadowing() {
    const [audioData, setAudioData] = useState(null);
    const [speed, setSpeed] = useState(1.0);
    const [playbackMode, setPlaybackMode] = useState('continuous');

    useEffect(() => {
        const data = localStorage.getItem('audioData');
        if (data) {
            setAudioData(JSON.parse(data));
        }
    }, []);

    const handlePlaybackSpeedChange = (event) => {
        setSpeed(parseFloat(event.target.value));
    };

    const handlePlaybackModeChange = (event) => {
        setPlaybackMode(event.target.value);
    };

    return (
        <div className="container">
            <h2>쉐도잉이 시작되었어요!</h2>
            {audioData && (
                <audio controls src={audioData.audioUrl} playbackRate={speed}></audio>
            )}
            <div>
                <label>
                    속도:
                    <select value={speed} onChange={handlePlaybackSpeedChange}>
                        <option value={0.75}>0.75배속</option>
                        <option value={1.0}>1배속</option>
                        <option value={1.25}>1.25배속</option>
                    </select>
                </label>
            </div>
            <div>
                <label>
                    재생 모드:
                    <select value={playbackMode} onChange={handlePlaybackModeChange}>
                        <option value="continuous">연속 재생</option>
                        <option value="repeat">반복 재생</option>
                    </select>
                </label>
            </div>
        </div>
    );
}

export default LearnShadowing;
