import React from 'react';

const UserPage = () => (
  <div className="app-layout">
    {/* Header (ArenaGG Style) */}
    <header className="site-header">
      <div className="container header-container">
        <a href="#" className="logo">ArenaGG</a>
        <nav className="main-nav">
          <ul>
            <li><a href="#">Home</a></li>
            <li className="active"><a href="#">Matches</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Teams</a></li>
            <li><a href="#">News</a></li>
          </ul>
        </nav>
        <div className="header-actions">
          {/* Removed Login/Register button for user page */}
        </div>
      </div>
    </header>

    {/* Main Content Area */}
    <main className="main-content">
      {/* Hero Section */}
      <section className="hero-section section-padding" style={{backgroundImage: "linear-gradient(rgba(10, 10, 10, 0.7), rgba(10, 10, 10, 0.7)), url('placeholder-dota-hero-bg.jpg')"}}>
        <div className="container text-center">
          <h1>DOTA 2 Matches</h1>
          <p>Follow live scores, upcoming games, and recent results for Dota 2.</p>
        </div>
      </section>

      {/* Content Body (Matches & Sidebar) */}
      <section className="content-body section-padding">
        <div className="container content-container">
          {/* Left Column: Matches */}
          <div className="matches-column">
            {/* Filters */}
            <div className="content-block filter-block">
              <div className="filter-group">
                <select id="tournament-filter">
                  <option>All Tournaments</option>
                  <option>ESL One Raleigh 2025</option>
                  <option>FISSURE Special</option>
                </select>
              </div>
              <div className="filter-group">
                <select id="stage-filter">
                  <option>All Stages</option>
                  <option>Group Stage</option>
                  <option>Playoffs</option>
                </select>
              </div>
              <button className="btn btn-primary filter-button"><i className="fas fa-search"></i> Filter</button>
            </div>

            {/* Upcoming Matches */}
            <div className="content-block matches-list upcoming-matches">
              <div className="list-header">
                <h3>Upcoming Matches</h3>
                <div className="header-actions">
                  <i className="fas fa-sync-alt"></i>
                </div>
              </div>
              {/* Example Match Row */}
              <article className="match-row live">
                <div className="match-info">
                  <span className="match-status"><i className="fas fa-circle live-dot"></i> LIVE</span>
                  <time className="match-time" dateTime="2024-04-28T12:00">Apr 28, 12:00</time>
                  <span className="match-details">BO3</span>
                  <span className="tournament-icon" title="ESL One"><i className="fas fa-star"></i> ESL One</span>
                </div>
                <div className="teams-vs">
                  <div className="team team-a">
                    <span className="team-name">PARIVISION</span>
                    <img src="placeholder-logo.png" alt="Team Logo" className="team-logo" />
                  </div>
                  <div className="match-center">
                    <span className="score">1-0</span>
                    <span className="vs">vs</span>
                  </div>
                  <div className="team team-b">
                    <img src="placeholder-logo.png" alt="Team Logo" className="team-logo" />
                    <span className="team-name">Liquid</span>
                  </div>
                </div>
                <div className="match-odds">
                  <span className="odds">(1.25)</span>
                  <span className="odds">(3.50)</span>
                </div>
                <a href="#" className="match-link"><i className="fas fa-chevron-right"></i></a>
              </article>
              <article className="match-row">
                <div className="match-info">
                  <span className="match-status">Upcoming</span>
                  <time className="match-time" dateTime="2024-04-28T15:00">Apr 28, 15:00</time>
                  <span className="match-details">BO3</span>
                  <span className="tournament-icon" title="FISSURE"><i className="fas fa-fire"></i> FISSURE</span>
                </div>
                <div className="teams-vs">
                  <div className="team team-a">
                    <span className="team-name">Ivory</span>
                    <img src="placeholder-logo.png" alt="Team Logo" className="team-logo" />
                  </div>
                  <div className="match-center"><span className="vs">vs</span></div>
                  <div className="team team-b">
                    <img src="placeholder-logo.png" alt="Team Logo" className="team-logo" />
                    <span className="team-name">YG</span>
                  </div>
                </div>
                <div className="match-odds">
                  <span className="odds">(1.36)</span>
                  <span className="odds">(2.80)</span>
                </div>
                <a href="#" className="match-link"><i className="fas fa-chevron-right"></i></a>
              </article>
              {/* ...more match rows... */}
              <div className="pagination">
                <button disabled>«</button>
                <button className="active">1</button>
                <button>2</button>
                <button>3</button>
                <button>»</button>
              </div>
            </div>

            {/* Recent Matches */}
            <div className="content-block matches-list recent-matches">
              <div className="list-header">
                <h3>Recent Results</h3>
                <div className="header-actions">
                  <i className="fas fa-sync-alt"></i>
                </div>
              </div>
              <article className="match-row finished">
                <div className="match-info">
                  <span className="match-status">Finished</span>
                  <time className="match-time" dateTime="2024-04-27T18:00">Apr 27, 18:00</time>
                  <span className="match-details">BO3</span>
                  <span className="tournament-icon" title="ESL One"><i className="fas fa-star"></i> ESL One</span>
                </div>
                <div className="teams-vs">
                  <div className="team team-a winner">
                    <span className="team-name">Liquid</span>
                    <img src="placeholder-logo.png" alt="Team Logo" className="team-logo" />
                  </div>
                  <div className="match-center">
                    <span className="score">2 - 0</span>
                    <span className="vs">vs</span>
                  </div>
                  <div className="team team-b loser">
                    <img src="placeholder-logo.png" alt="Team Logo" className="team-logo" />
                    <span className="team-name">AVULUS</span>
                  </div>
                </div>
                <div className="match-odds"></div>
                <a href="#" className="match-link"><i className="fas fa-chevron-right"></i></a>
              </article>
              {/* ...more recent match rows... */}
            </div>
          </div>

          {/* Right Sidebar Column (Styled as ArenaGG Widgets) */}
          <aside className="right-sidebar">
            <div className="content-block widget">
              <h4 className="widget-title">Latest News</h4>
              <div className="widget-content news-widget">
                <img src="placeholder-news.jpg" alt="News Image" />
                <h5><a href="#">Dota 2 Patch 7.38 Announced!</a></h5>
                <p>Big changes coming to the map, heroes, and items...</p>
                <a href="#" className="btn btn-secondary widget-button">Read More <i className="fas fa-arrow-right"></i></a>
              </div>
            </div>
            <div className="content-block widget">
              <h4 className="widget-title">Top Predictions</h4>
              <div className="widget-content predictions-widget">
                <ul>
                  <li><span>Wito</span> <span className="prediction-stats">79% <i className="fas fa-arrow-up success"></i> Today</span></li>
                  <li><span>Data by Stoax</span> <span className="prediction-stats">33% <i className="fas fa-arrow-down danger"></i></span></li>
                  <li><span>AnalystX</span> <span className="prediction-stats">65% <i className="fas fa-arrow-up success"></i></span></li>
                </ul>
              </div>
            </div>
            <div className="content-block widget">
              <h4 className="widget-title">Event Prize Pools</h4>
              <div className="widget-content prize-pool-widget">
                <table>
                  <tbody>
                    <tr><td>ESL One Raleigh 2025</td> <td className="prize">$ 1,000,000</td></tr>
                    <tr><td>FISSURE Special</td><td className="prize">$ 70,000</td></tr>
                    <tr><td>CCT S8</td><td className="prize">$ 90,000</td></tr>
                    <tr><td>EPL S26</td><td className="prize">$ 20,000</td></tr>
                    <tr><td>EPL World Sea S4</td><td className="prize">$ 10,000</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>

    {/* Footer (ArenaGG Style) */}
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-left">
          <a href="#" className="logo">ArenaGG</a>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-links">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Tournaments</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">API</a></li>
              <li><a href="#">Partners</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default UserPage;
