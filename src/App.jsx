import React from 'react';
import MainContent from './pages/MainPage';
import Questions from './pages/QuestionsPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainContent />} />
        <Route path='/questions/:topic' element={<Questions />} />
      </Routes>
    </Router>
  );
};

export default App;
