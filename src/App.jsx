import React from "react";
import MainContent from "./pages/MainPage";
import Topics from "./pages/TopicsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import McqQuestionsPage from "./pages/McqQuestionsPage";
import "aos/dist/aos.css";
import "animate.css";
import AboutPage from "./pages/AboutPage";
import Loader from "./utils/Loader";
import Contact from "./pages/ContactPage";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ComingSoon from "./pages/CoomingSoonPage";
import PrivacyPolicy from "./pages/PrivacyPolicyPage";
import Disclaimer from "./pages/DisclaimerPage";
import TermsOfService from "./pages/TermsOfServicePage";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 700, offset: 100 });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/topic/:topic" element={<Topics />} />
        {/* <Route path='/topic/interview/:question' element={<InterviewQuestionPage/>} /> */}
        <Route
          path="/topic/:questions/:question"
          element={<McqQuestionsPage />}
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/comingsoon" element={<ComingSoon />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </Router>
  );
};

export default App;
