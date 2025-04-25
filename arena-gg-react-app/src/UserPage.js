import React, { useState } from 'react';
import Particles from "react-tsparticles";
import newsBanner from './img/banner2.jpg';
import dota2Logo from './img/dota 2.jpg';
import cs2Logo from './img/cs 2 logo.png';
import valorantLogo from './img/valorant logo.png';
import lolLogo from './img/League of legend .jpg.webp';
import apexLogo from './img/apex.jpg.jpeg';

const GAMES = [
  {
    key: 'dota2',
    name: 'Dota 2',
    logo: dota2Logo,
    video: 'https://www.youtube.com/embed/viS92FJA0N8',
    news: {
      title: 'Dota 2 Patch 7.38 Announced!',
      url: 'https://www.dota2.com/news',
      summary: 'Big changes coming to the map, heroes, and items in the latest Dota 2 patch.'
    },
    matches: [
      {
        title: 'PARIVISION vs Liquid',
        details: 'ESL One Raleigh 2025 · BO3 · LIVE',
        logo: dota2Logo,
        status: 'LIVE',
        score: '1-0',
      },
      {
        title: 'Ivory vs YG',
        details: 'FISSURE Special · BO3 · Upcoming',
        logo: dota2Logo,
        status: 'Upcoming',
        score: null,
      },
      {
        title: 'OG vs Secret',
        details: 'DreamLeague · BO3 · Upcoming',
        logo: dota2Logo,
        status: 'Upcoming',
        score: null,
      },
      {
        title: 'Spirit vs BetBoom',
        details: 'The International · BO5 · Finished',
        logo: dota2Logo,
        status: 'Finished',
        score: '3-2',
      },
      {
        title: 'EG vs Tundra',
        details: 'ESL One · BO3 · Finished',
        logo: dota2Logo,
        status: 'Finished',
        score: '2-0',
      },
    ],
  },
  {
    key: 'cs2',
    name: 'CS2',
    logo: cs2Logo,
    video: 'https://www.youtube.com/embed/MFenWTrbNWA',
    news: {
      title: 'CS2 Major Announced!',
      url: 'https://www.hltv.org/news',
      summary: 'The first CS2 Major will take place in 2024 with a $2M prize pool.'
    },
    matches: [
      {
        title: 'NAVI vs G2',
        details: 'BLAST Premier · BO3 · Upcoming',
        logo: cs2Logo,
        status: 'Upcoming',
        score: null,
      },
      {
        title: 'FaZe vs Vitality',
        details: 'IEM · BO3 · Finished',
        logo: cs2Logo,
        status: 'Finished',
        score: '2-1',
      },
      {
        title: 'Astralis vs Heroic',
        details: 'ESL Pro League · BO3 · LIVE',
        logo: cs2Logo,
        status: 'LIVE',
        score: '1-1',
      },
      {
        title: 'BIG vs ENCE',
        details: 'DreamHack · BO3 · Upcoming',
        logo: cs2Logo,
        status: 'Upcoming',
        score: null,
      },
      {
        title: 'Liquid vs Complexity',
        details: 'BLAST Premier · BO3 · Finished',
        logo: cs2Logo,
        status: 'Finished',
        score: '2-0',
      },
    ],
  },
  {
    key: 'valorant',
    name: 'Valorant',
    logo: valorantLogo,
    video: 'https://www.youtube.com/embed/lihYUxBZ_BE',
    news: {
      title: 'Valorant Champions Tour 2025 Announced!',
      url: 'https://valorantesports.com/news',
      summary: 'The VCT 2025 season brings new teams, new format, and a bigger prize pool.'
    },
    matches: [
      {
        title: 'Team Liquid vs Fnatic',
        details: 'VCT Masters · BO5 · Upcoming',
        logo: valorantLogo,
        status: 'Upcoming',
        score: null,
      },
      {
        title: 'Sentinels vs DRX',
        details: 'VCT Masters · BO3 · Finished',
        logo: valorantLogo,
        status: 'Finished',
        score: '3-2',
      },
      {
        title: 'LOUD vs PRX',
        details: 'VCT Americas · BO3 · LIVE',
        logo: valorantLogo,
        status: 'LIVE',
        score: '2-1',
      },
      {
        title: 'KRU vs Leviatan',
        details: 'VCT LATAM · BO3 · Upcoming',
        logo: valorantLogo,
        status: 'Upcoming',
        score: null,
      },
      {
        title: '100T vs EG',
        details: 'VCT NA · BO3 · Finished',
        logo: valorantLogo,
        status: 'Finished',
        score: '2-0',
      },
    ],
  },
  {
    key: 'lol',
    name: 'League of Legends',
    logo: lolLogo,
    video: 'https://www.youtube.com/embed/ijAnZA2nZF4',
    news: {
      title: 'League of Legends Worlds 2025 Announced!',
      url: 'https://lolesports.com/news',
      summary: 'The biggest event in LoL esports returns with new teams and a global stage.'
    },
    matches: [
      {
        title: 'T1 vs G2',
        details: 'Worlds Semifinals · BO5 · Upcoming',
        logo: lolLogo,
        status: 'Upcoming',
        score: null,
      },
      {
        title: 'Gen.G vs JDG',
        details: 'Worlds Quarterfinals · BO5 · Finished',
        logo: lolLogo,
        status: 'Finished',
        score: '3-1',
      },
      {
        title: 'C9 vs RNG',
        details: 'MSI · BO3 · LIVE',
        logo: lolLogo,
        status: 'LIVE',
        score: '1-1',
      },
      {
        title: 'FNC vs MAD',
        details: 'LEC Finals · BO5 · Upcoming',
        logo: lolLogo,
        status: 'Upcoming',
        score: null,
      },
      {
        title: 'DK vs DRX',
        details: 'LCK Finals · BO5 · Finished',
        logo: lolLogo,
        status: 'Finished',
        score: '3-2',
      },
    ],
  },
  {
    key: 'apex',
    name: 'Apex Legends',
    logo: apexLogo,
    video: 'https://www.youtube.com/embed/xU-WMAu4zPg',
    news: {
      title: 'Apex Legends Global Series 2025 Announced!',
      url: 'https://www.ea.com/games/apex-legends/compete/news',
      summary: 'The ALGS 2025 brings new maps, new legends, and a record-breaking prize pool.'
    },
    matches: [
      {
        title: 'TSM vs NRG',
        details: 'ALGS Finals · BO3 · Upcoming',
        logo: apexLogo,
        status: 'Upcoming',
        score: null,
      },
      {
        title: 'Alliance vs FURIA',
        details: 'ALGS Semifinals · BO3 · Finished',
        logo: apexLogo,
        status: 'Finished',
        score: '2-0',
      },
      {
        title: 'Liquid vs Complexity',
        details: 'ALGS Group Stage · BO3 · LIVE',
        logo: apexLogo,
        status: 'LIVE',
        score: '1-1',
      },
      {
        title: 'G2 vs Sentinels',
        details: 'ALGS Qualifiers · BO3 · Upcoming',
        logo: apexLogo,
        status: 'Upcoming',
        score: null,
      },
      {
        title: 'Fnatic vs Cloud9',
        details: 'ALGS Playoffs · BO3 · Finished',
        logo: apexLogo,
        status: 'Finished',
        score: '2-1',
      },
    ],
  },
];

const GAME_THEMES = {
  dota2: {
    color: '#A32C2C',
    gradient: 'linear-gradient(120deg, #A32C2C 0%, #E60023 100%)',
    banner: require('./img/banner5.avif'),
    overlay: 'rgba(163,44,44,0.35)',
  },
  cs2: {
    color: '#1A3A5E',
    gradient: 'linear-gradient(120deg, #1A3A5E 0%, #3A5E8C 100%)',
    banner: require('./img/banner5.avif'),
    overlay: 'rgba(26,58,94,0.35)',
  },
  valorant: {
    color: '#FF4655',
    gradient: 'linear-gradient(120deg, #FF4655 0%, #232323 100%)',
    banner: require('./img/banner5.avif'),
    overlay: 'rgba(255,70,85,0.25)',
  },
  lol: {
    color: '#1E6B52',
    gradient: 'linear-gradient(120deg, #1E6B52 0%, #3AC29A 100%)',
    banner: require('./img/banner5.avif'),
    overlay: 'rgba(30,107,82,0.30)',
  },
  apex: {
    color: '#B71C1C',
    gradient: 'linear-gradient(120deg, #B71C1C 0%, #E60023 100%)',
    banner: require('./img/banner5.avif'),
    overlay: 'rgba(183,28,28,0.30)',
  },
};

const UserPage = () => {
  const [selectedGame, setSelectedGame] = useState(GAMES[0].key);
  const game = GAMES.find(g => g.key === selectedGame);
  const theme = GAME_THEMES[selectedGame];

  const [assistForm, setAssistForm] = useState({ name: '', email: '', tournament: '', message: '' });
  const [assistSuccess, setAssistSuccess] = useState(false);
  const bigTournaments = [
    'Dota 2 International',
    'Valorant Champions Tour',
    'CS2 Major',
    'League of Legends Worlds',
    'Apex Legends Global Series'
  ];

  const handleAssistChange = e => {
    setAssistForm({ ...assistForm, [e.target.name]: e.target.value });
  };
  const handleAssistSubmit = e => {
    e.preventDefault();
    setAssistSuccess(true);
    setAssistForm({ name: '', email: '', tournament: '', message: '' });
    setTimeout(() => setAssistSuccess(false), 3500);
  };

  const particlesOptions = {
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" }, resize: true },
      modes: { repulse: { distance: 100, duration: 0.4 } }
    },
    particles: {
      color: { value: theme.color },
      links: { enable: true, color: theme.color, distance: 150, opacity: 0.3, width: 1 },
      move: { enable: true, speed: 1.5, outModes: { default: "bounce" } },
      number: { value: 60, density: { enable: true, area: 800 } },
      opacity: { value: 0.3 },
      shape: { type: "circle" },
      size: { value: { min: 2, max: 4 } }
    },
    detectRetina: true
  };

  return (
    <main className="main-content" style={{position:'relative',zIndex:1}}>
      <Particles
        id="tsparticles"
        options={particlesOptions}
        style={{position:'fixed',zIndex:0,top:0,left:0,width:'100vw',height:'100vh'}}
      />
      <section className="user-banner" style={{backgroundImage:`url(${theme.banner})`}}>
        <div style={{position:'absolute',inset:0,background:theme.overlay, pointerEvents:'none',zIndex:1,animation:'moveParticles 18s linear infinite'}}></div>
        <div className="container text-center" style={{position:'relative',zIndex:2}}>
          <h1 className="user-game-title" style={{textShadow:`0 0 24px ${theme.color}`}}>{game.name} Matches</h1>
          <p>Switch between games to see live, upcoming, and recent matches.</p>
          <div className="user-games-bar">
            {GAMES.map(g => (
              <button
                key={g.key}
                className={`user-game-btn${selectedGame === g.key ? ' selected' : ''}`}
                onClick={() => setSelectedGame(g.key)}
                type="button"
                style={selectedGame === g.key ? {
                  borderColor: theme.color,
                  background: theme.gradient,
                  color: '#fff',
                  boxShadow: `0 0 24px 4px ${theme.color}`,
                  filter: 'drop-shadow(0 0 8px '+theme.color+')',
                } : {}}
              >
                <img src={g.logo} alt={g.name + ' logo'} />
                {g.name}
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container">
          {/* Video Card */}
          <div className="user-match-card" style={{borderColor: theme.color, marginBottom: 32}}>
            <iframe
              width="360"
              height="202"
              src={game.video}
              title={game.name + ' YouTube Video'}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{borderRadius: 12, boxShadow: `0 0 16px 2px ${theme.color}55`, marginRight: 24}}
            ></iframe>
            <div className="user-match-info">
              <div className="user-match-title" style={{color: theme.color}}>{game.name} Esports Highlights</div>
              <div className="user-match-details">Watch the latest highlights and updates for {game.name} tournaments.</div>
            </div>
          </div>
          {/* News Card */}
          <div className="user-match-card" style={{borderColor: theme.color, marginBottom: 32}}>
            <div className="user-match-info">
              <div className="user-match-title" style={{color: theme.color}}>{game.news.title}</div>
              <div className="user-match-details">{game.news.summary}</div>
              <a href={game.news.url} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{marginTop: 10, borderColor: theme.color, color: theme.color}}>Read More</a>
            </div>
          </div>
          {game.matches.map((match, idx) => (
            <div
              className="user-match-card"
              key={idx}
              style={{
                borderColor: theme.color,
                background: 'rgba(30,30,30,0.85)',
                backdropFilter: 'blur(8px) saturate(120%)',
                boxShadow: `0 2px 24px 0 ${theme.color}22, 0 1.5px 8px 0 #0008`,
              }}
            >
              <img className="user-match-logo" src={match.logo} alt={game.name + ' match'} style={{boxShadow:`0 0 12px 2px ${theme.color}55`}} />
              <div className="user-match-info">
                <div className="user-match-title" style={{color:theme.color}}>{match.title}</div>
                <div className="user-match-details">{match.details}</div>
              </div>
              {match.score && <div className="user-match-score" style={{fontWeight:700, color:theme.color, fontSize:'1.1rem'}}>{match.score}</div>}
              {match.status === 'LIVE' && <span className="live-dot" style={{marginLeft:8, fontSize:'1.2rem', color:theme.color, filter:'drop-shadow(0 0 8px '+theme.color+')', animation:'pulse 1.2s infinite alternate, liveGlow 1.2s infinite alternate'}}>●</span>}
            </div>
          ))}
        </div>
      </section>
      <section className="section-padding" style={{background:'#232323',marginBottom:32,position:'relative',overflow:'hidden'}}>
        {/* Video background for Assist section */}
        <video
          src={require('./img/Assist.mp4')}
          autoPlay
          loop
          muted
          playsInline
          style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',objectFit:'cover',zIndex:0,pointerEvents:'none',borderRadius:24,filter:'brightness(0.7)'}}
        />
        <div className="container" style={{maxWidth:540,margin:'0 auto',display:'flex',justifyContent:'center',alignItems:'center',minHeight:'100vh',position:'relative',zIndex:1}}>
          <div className="user-match-card" style={{
            borderColor:'#E60023',
            background:'rgba(34,34,40,0.99)',
            boxShadow:'0 8px 40px 0 #E6002340, 0 2px 16px 0 #0008',
            borderRadius:24,
            padding:'44px 38px',
            marginBottom:0,
            width:'100%',
            maxWidth:480,
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            position:'relative',
            overflow:'hidden',
            zIndex:2,
            backdropFilter:'blur(18px) saturate(160%)',
            borderWidth:3
          }}>
            <h2 className="section-title text-center" style={{color:'#fff',textShadow:'0 0 16px #E60023',marginBottom:10}}>Assist in a Big Tournament</h2>
            <p style={{color:'#ccc',textAlign:'center',marginBottom:18}}>Want to participate or help in a major event? Fill out the form below and our team will contact you!</p>
            <form onSubmit={handleAssistSubmit} autoComplete="off" style={{width:'100%'}}>
              <div className="form-group">
                <label htmlFor="assist-name" style={{color:'#fff'}}>Your Name</label>
                <input type="text" id="assist-name" name="name" value={assistForm.name} onChange={handleAssistChange} required placeholder="Your full name" style={{background:'#23232a',color:'#fff',border:'1.5px solid #E60023',borderRadius:8}} />
              </div>
              <div className="form-group">
                <label htmlFor="assist-email" style={{color:'#fff'}}>Email</label>
                <input type="email" id="assist-email" name="email" value={assistForm.email} onChange={handleAssistChange} required placeholder="your@email.com" style={{background:'#23232a',color:'#fff',border:'1.5px solid #E60023',borderRadius:8}} />
              </div>
              <div className="form-group">
                <label htmlFor="assist-tournament" style={{color:'#fff'}}>Select Tournament</label>
                <select id="assist-tournament" name="tournament" value={assistForm.tournament} onChange={handleAssistChange} required style={{background:'#23232a',color:'#fff',border:'1.5px solid #E60023',borderRadius:8}}>
                  <option value="">Choose a tournament</option>
                  {bigTournaments.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="assist-message" style={{color:'#fff'}}>Message / Motivation</label>
                <textarea id="assist-message" name="message" value={assistForm.message} onChange={handleAssistChange} required placeholder="Why do you want to assist?" rows={4} style={{background:'#23232a',color:'#fff',border:'1.5px solid #E60023',resize:'vertical',borderRadius:8}}></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{width:'100%',fontSize:'1.08rem',padding:'13px 0',borderRadius:10,boxShadow:'0 0 18px #E60023, 0 2px 8px #0008',fontWeight:700,letterSpacing:'0.03em'}}>Send Request</button>
              {assistSuccess && <div style={{marginTop:16,color:'#4caf50',fontWeight:600,textAlign:'center'}}>Your request has been sent! We will contact you soon.</div>}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default UserPage;
