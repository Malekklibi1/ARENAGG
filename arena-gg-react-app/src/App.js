import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './Header';
// import HeroSection from './HeroSection';
// import GameSidebar from './GameSidebar';
import Matches from './Matches';
// import News from './News';
// import Predictions from './Predictions';
// import PrizePools from './PrizePools';
// import Tournaments from './Tournaments';
import Footer from './Footer';
// import LoginModal from './LoginModal';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import RegisterPage from './RegisterPage';
import UserPage from './UserPage';

function App() {
  const [selectedGame, setSelectedGame] = useState('dota2');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  // Handler for protected actions
  const requireLogin = (e) => {
    if (!isLoggedIn) {
      e.preventDefault();
      setShowLogin(true);
    }
  };

  // Handler for login (simulate login on RegisterPage success)
  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <Router>
      <div className="app-layout">
        <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        {/* <HeroSection selectedGame={selectedGame} /> */}
        <div className="content-body section-padding" id="games-section">
          <div className="container content-container">
            {/* <GameSidebar selectedGame={selectedGame} setSelectedGame={setSelectedGame} /> */}
            <main className="main-content">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/register" element={<RegisterPage onLogin={handleLogin} />} />
                <Route path="/user" element={<UserPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
              <Matches selectedGame={selectedGame} requireLogin={requireLogin} />
              <div className="dashboard-widgets">
                {/* <News selectedGame={selectedGame} requireLogin={requireLogin} /> */}
                {/* <Predictions selectedGame={selectedGame} requireLogin={requireLogin} /> */}
                {/* <PrizePools selectedGame={selectedGame} /> */}
              </div>
            </main>
          </div>
        </div>
        {/* <Tournaments requireLogin={requireLogin} /> */}
        <Footer />
        {/* <LoginModal show={showLogin} onClose={() => setShowLogin(false)} onLogin={() => { setIsLoggedIn(true); setShowLogin(false); }} /> */}
      </div>
    </Router>
  );
}

export default App;