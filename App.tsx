import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Collections from './pages/Collections';
import Community from './pages/Community';
import Pro from './pages/Pro';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans text-brand-black bg-white">
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/community" element={<Community />} />
          <Route path="/pro" element={<Pro />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;