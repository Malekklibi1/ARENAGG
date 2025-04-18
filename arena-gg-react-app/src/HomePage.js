import React, { useState } from 'react';
import SearchBar from './SearchBar';
import { games, tournaments, clubs } from './data';
import UserPage from './UserPage';

const HomePage = () => {
  const [searchType, setSearchType] = useState('games');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });

  const handleSearch = (type, query) => {
    setSearchType(type);
    setSearchQuery(query.toLowerCase());
  };

  const filterData = (data, key = 'name') =>
    data.filter(item => item[key].toLowerCase().includes(searchQuery));

  const handleLoginChange = e => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = e => {
    e.preventDefault();
    // Accept either username 'admin', 'admin@admin', or email-like input with 'admin' before @
    const usernameInput = loginForm.username.trim().toLowerCase();
    const isAdmin = usernameInput === 'admin' || usernameInput === 'admin@admin' || usernameInput.startsWith('admin@');
    if (isAdmin && loginForm.password === 'admin') {
      setIsLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('Invalid credentials');
    }
  };

  if (isLoggedIn) {
    return <UserPage />;
  }

  let content;
  if (searchType === 'games') {
    content = (
      <div className="item-grid">
        {filterData(games).map(game => (
          <div key={game.id} className="item-card">
            <img src={game.image} alt={game.name} />
            <h3>{game.name}</h3>
          </div>
        ))}
      </div>
    );
  } else if (searchType === 'tournaments') {
    content = (
      <div className="item-grid">
        {filterData(tournaments).map(tour => (
          <div key={tour.id} className="item-card">
            <img src={tour.image} alt={tour.name} />
            <h3>{tour.name}</h3>
            <p>Game: {tour.game}</p>
            <p>Date: {tour.date}</p>
          </div>
        ))}
      </div>
    );
  } else if (searchType === 'clubs') {
    content = (
      <div className="item-grid">
        {filterData(clubs).map(club => (
          <div key={club.id} className="item-card">
            <img src={club.logo} alt={club.name} />
            <h3>{club.name}</h3>
            <p>Games: {club.games.join(', ')}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      {/* Login Form */}
      <section className="section-padding" style={{ background: '#181818' }}>
        <div className="container" style={{ maxWidth: 400 }}>
          <form onSubmit={handleLoginSubmit} className="login-form-container content-block">
            <h2 className="section-title text-center">Login</h2>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={loginForm.username}
                onChange={handleLoginChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={loginForm.password}
                onChange={handleLoginChange}
                required
              />
            </div>
            {loginError && <div style={{ color: 'red', marginBottom: 10 }}>{loginError}</div>}
            <div className="text-center">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </section>

      {/* Hero Section */}
      <section className="hero-section section-padding" style={{backgroundImage: "url('gaming-competition-moment-teams-facing-each-other-concentration-moment-finals-esports-scaled.jpg')"}}>
        <div className="container text-center">
          <h1>Your eSports Journey Starts Here</h1>
          <p>Find tournaments, connect with players, and showcase your skills</p>
          <a href="/register" className="btn btn-primary">Register Now</a>
        </div>
      </section>

      {/* Advanced Search Bar */}
      <section className="search-section section-padding">
        <div className="container">
          <SearchBar onSearch={handleSearch} />
          {content}
        </div>
      </section>

      {/* Featured Tournaments Section */}
      <section className="featured-tournaments-section section-padding">
        <div className="container">
          <h2 className="section-title text-center">Featured Tournaments</h2>
          <div className="tournament-grid">
            <div className="tournament-card">
              <img src="placeholder-apex.jpg.jpeg" alt="Apex Legends Global Series" />
              <h3>Apex Legends Global Series</h3>
              <p>Format: 5v5 Team Battle Royale</p>
              <p>Prize Pool: $100,000</p>
              <p>Registered Players: 64/128</p>
            </div>
            <div className="tournament-card">
              <img src="placeholder-valorant.jpg.webp" alt="Valorant Global Series" />
              <h3>Valorant Global Series</h3>
              <p>Format: 5v5 Tactical Shooter</p>
              <p>Prize Pool: $200,000</p>
              <p>Registered Players: 80/128</p>
            </div>
            <div className="tournament-card">
              <img src="placeholder-lol.jpg.webp" alt="League of Legends Series" />
              <h3>League of Legends Series</h3>
              <p>Format: 5v5 Team Battle Royale</p>
              <p>Prize Pool: $150,000</p>
              <p>Registered Players: 97/128</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Featured Tournaments Section */}
      <section className="featured-tournaments-section section-padding">
        <div className="container">
          <h2 className="section-title text-center">More Featured Tournaments</h2>
          <div className="tournament-grid">
            <div className="tournament-card">
              <img src="league-of-legends.avif" alt="League of Legends Championship" />
              <h3>League of Legends Championship</h3>
              <p>Format: 5v5 Team Battle Royale</p>
              <p>Prize Pool: $300,000</p>
              <p>Registered Players: 120/128</p>
            </div>
            <div className="tournament-card">
              <img src="pexels-photo-3165335.jpeg" alt="CS:GO Global Offensive" />
              <h3>CS:GO Global Offensive</h3>
              <p>Format: 5v5 Tactical Shooter</p>
              <p>Prize Pool: $250,000</p>
              <p>Registered Players: 100/128</p>
            </div>
            <div className="tournament-card">
              <img src="PH187075.jpg" alt="Dota 2 International" />
              <h3>Dota 2 International</h3>
              <p>Format: 5v5 Team Strategy</p>
              <p>Prize Pool: $500,000</p>
              <p>Registered Players: 110/128</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
