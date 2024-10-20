import React from 'react';
import MainContent from './pages/MainPage';
import Topics from './pages/TopicsPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import McqQuestionsPage from './pages/McqQuestionsPage';
import 'aos/dist/aos.css';
import 'animate.css';
import AboutPage from './pages/AboutPage';
import Loader from './utils/Loader';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainContent />} />
        <Route path='/topic/:topic' element={<Topics />} />
        <Route path='/topic/:questions/:question' element={<McqQuestionsPage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/load' element={<Loader/>}/>
      </Routes>
    </Router>
  );
};

export default App;
