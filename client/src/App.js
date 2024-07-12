import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ShadowingSetting from './components/ShadowingSetting';
import YouTubeLinkInput from './components/YouTubeLinkInput';
import StudyOrderSelection from './components/StudyOrderSelection';
import ExpressionLevelSetting from './components/ExpressionLevelSetting';
import ExpressionNumberSetting from './components/ExpressionNumberSetting';
import LearnExpression from './components/LearnExpression';
import LearnShadowing from './components/LearnShadowing';
import NavigationBar from './components/NavigationBar'; // NavigationBar로 임포트 경로 수정
import './App.css'; // 전역 스타일 파일 로드

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shadowing-setting" element={<ShadowingSetting />} />
        <Route path="/youtube-link-input" element={<YouTubeLinkInput />} />
        <Route path="/study-order-selection" element={<StudyOrderSelection />} />
        <Route path="/expression-level-setting" element={<ExpressionLevelSetting />} />
        <Route path="/number-setting" element={<ExpressionNumberSetting />} />
        <Route path="/learn-expression" element={<LearnExpression />} />
        <Route path="/learn-shadowing" element={<LearnShadowing />} />
      </Routes>
    </Router>
  );
}

export default App;
