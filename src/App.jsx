import React from 'react';
import MainContent from './pages/MainPage';
import Topics from './pages/TopicsPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuestionsPage from './pages/QuestionsPage';
import 'aos/dist/aos.css';
import 'animate.css';
import AboutPage from './pages/AboutPage';
import Loader from './utils/Loader';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainContent />} />
        <Route path='/topics/:topic' element={<Topics />} />
        <Route path='/topics/:questions/:question' element={<QuestionsPage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/load' element={<Loader/>}/>
      </Routes>
    </Router>
  );
};

export default App;
