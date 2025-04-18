import React from 'react';

function Matches({ selectedGame, requireLogin }) {
  // Use your data structure for matches per game
  // Map over matches and render .match-link with onClick={requireLogin}
  return (
    <div className="content-block matches-list upcoming-matches">
      {/* ...map matches... */}
      <a href="#" className="match-link" onClick={requireLogin}>
        <i className="fas fa-chevron-right"></i>
      </a>
    </div>
  );
}

export default Matches;