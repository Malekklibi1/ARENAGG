import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaFire, FaTrophy, FaUsers } from 'react-icons/fa';
import banner1 from './img/banner1.jpg';
import apexBanner from './img/apex.jpg.jpeg';
import valorantBanner from './img/valorant.jpg.webp';
import lolBanner from './img/League of legend .jpg.webp';
import cs2Banner from './img/counter strike 2.jpg';
import dota2Banner from './img/dota 2 banner.jpg';

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: i => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.7 } })
};

function AnimatedCounter({ to, duration = 1.2 }) {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(to.replace(/[^0-9]/g, ''));
      const startTime = performance.now();
      function animate(now) {
        const elapsed = (now - startTime) / 1000;
        const progress = Math.min(elapsed / duration, 1);
        setValue(Math.floor(progress * end));
        if (progress < 1) requestAnimationFrame(animate);
        else setValue(end);
      }
      requestAnimationFrame(animate);
    }
  }, [isInView, to, duration]);
  return <span ref={ref}>{value}{to.replace(/[0-9]/g, '')}</span>;
}

const tournaments = [
  {
    img: apexBanner,
    title: 'Apex Legends Global Series',
    format: '5v5 Team Battle Royale',
    prize: '$100,000',
    players: '64/128',
    hot: false
  },
  {
    img: valorantBanner,
    title: 'Valorant Global Series',
    format: '5v5 Tactical Shooter',
    prize: '$200,000',
    players: '80/128',
    hot: true
  },
  {
    img: lolBanner,
    title: 'League of Legends Series',
    format: '5v5 Team Battle Royale',
    prize: '$150,000',
    players: '97/128',
    hot: false
  }
];
const moreTournaments = [
  {
    img: cs2Banner,
    title: 'CS:GO Global Offensive',
    format: '5v5 Tactical Shooter',
    prize: '$250,000',
    players: '100/128',
    hot: false
  },
  {
    img: dota2Banner,
    title: 'Dota 2 International',
    format: '5v5 Team Strategy',
    prize: '$500,000',
    players: '110/128',
    hot: false
  }
];

const useSectionReveal = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.section-padding');
    const reveal = () => {
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
          section.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', reveal);
    reveal();
    return () => window.removeEventListener('scroll', reveal);
  }, []);
};

const FloatingShapes = () => (
  <svg className="floating-shapes" width="100%" height="100%" style={{position:'absolute',top:0,left:0,zIndex:1,pointerEvents:'none'}}>
    <circle cx="10%" cy="30%" r="18" fill="#E60023" opacity="0.12">
      <animate attributeName="cy" values="30%;40%;30%" dur="6s" repeatCount="indefinite" />
    </circle>
    <rect x="80%" y="10%" width="32" height="32" rx="8" fill="#fff" opacity="0.08">
      <animate attributeName="y" values="10%;20%;10%" dur="7s" repeatCount="indefinite" />
    </rect>
    <circle cx="60%" cy="80%" r="12" fill="#ff003c" opacity="0.10">
      <animate attributeName="cy" values="80%;70%;80%" dur="5s" repeatCount="indefinite" />
    </circle>
  </svg>
);

const HomePage = () => {
  useSectionReveal();
  return (
    <>
      <main style={{position:'relative',zIndex:1}}>
        {/* Enhanced Hero Section with Local MP4 Video Background */}
        <section className="hero-section section-padding" style={{position:'relative',overflow:'hidden',minHeight:'70vh',display:'flex',alignItems:'center',justifyContent:'center',padding:0}}>
          {/* Local MP4 video background */}
          <video
            src={require('./img/hero.mp4.mp4')}
            autoPlay
            loop
            muted
            playsInline
            style={{position:'absolute',top:0,left:0,width:'100vw',height:'100vh',objectFit:'cover',zIndex:0,pointerEvents:'none',mixBlendMode:'screen'}}
          />
          <div style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',background:'rgba(10,10,10,0.7)',zIndex:1}}></div>
          <FloatingShapes />
          <motion.div className="container text-center" initial="hidden" animate="visible" variants={heroVariants} style={{position:'relative',zIndex:2}}>
            <motion.h1 className="glow-text" variants={heroVariants} style={{fontSize:'3.2rem',lineHeight:'1.1',marginBottom:'18px'}}>Welcome to ArenaGG<br/><span style={{color:'#E60023',textShadow:'0 0 24px #E60023'}}>The Ultimate eSports Platform</span></motion.h1>
            <motion.p className="hero-lead" variants={heroVariants} style={{fontSize:'1.35rem',maxWidth:600,margin:'0 auto 32px auto'}}>Compete in top tournaments, track your stats, and join a vibrant gaming community. Your journey to glory starts now!</motion.p>
            <motion.a href="/register" className="btn btn-primary" variants={heroVariants} style={{fontSize:'1.15rem',padding:'16px 40px'}}>Get Started</motion.a>
          </motion.div>
        </section>
        {/* Animated Stats Section */}
        <section className="section-padding" style={{background:'#181818',textAlign:'center'}}>
          <div className="container" style={{display:'flex',justifyContent:'center',gap:48,flexWrap:'wrap',position:'relative',zIndex:2}}>
            <div>
              <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} transition={{duration:0.7}} viewport={{once:true}}>
                <div style={{fontSize:'2.2rem',fontWeight:900,color:'#E60023'}}><AnimatedCounter to="$1,500,000" duration={1.5}/></div>
                <div style={{color:'#fff',fontWeight:600}}>Total Prize Pool</div>
              </motion.div>
            </div>
            <div>
              <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} transition={{duration:0.7,delay:0.2}} viewport={{once:true}}>
                <div style={{fontSize:'2.2rem',fontWeight:900,color:'#E60023'}}><AnimatedCounter to="500+" duration={1.2}/></div>
                <div style={{color:'#fff',fontWeight:600}}>Tournaments Hosted</div>
              </motion.div>
            </div>
            <div>
              <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} transition={{duration:0.7,delay:0.4}} viewport={{once:true}}>
                <div style={{fontSize:'2.2rem',fontWeight:900,color:'#E60023'}}><AnimatedCounter to="10,000+" duration={1.2}/></div>
                <div style={{color:'#fff',fontWeight:600}}>Active Players</div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* How It Works Section */}
        <section className="section-padding" style={{background:'#222',color:'#fff'}}>
          <div className="container" style={{position:'relative',zIndex:2}}>
            <h2 className="section-title text-center">How It Works</h2>
            <div style={{display:'flex',justifyContent:'center',gap:40,flexWrap:'wrap'}}>
              <div style={{maxWidth:260,textAlign:'center'}}>
                <div style={{fontSize:'2.5rem',color:'#E60023',marginBottom:8}}>1️⃣</div>
                <h4 style={{marginBottom:6}}>Register & Login</h4>
                <p style={{color:'#ccc'}}>Create your free account and join the ArenaGG community.</p>
              </div>
              <div style={{maxWidth:260,textAlign:'center'}}>
                <div style={{fontSize:'2.5rem',color:'#E60023',marginBottom:8}}>2️⃣</div>
                <h4 style={{marginBottom:6}}>Join Tournaments</h4>
                <p style={{color:'#ccc'}}>Pick your favorite game and sign up for upcoming tournaments.</p>
              </div>
              <div style={{maxWidth:260,textAlign:'center'}}>
                <div style={{fontSize:'2.5rem',color:'#E60023',marginBottom:8}}>3️⃣</div>
                <h4 style={{marginBottom:6}}>Compete & Win</h4>
                <p style={{color:'#ccc'}}>Play, climb the leaderboard, and win amazing prizes!</p>
              </div>
            </div>
          </div>
        </section>
        {/* Featured Tournaments Section */}
        <section className="featured-tournaments-section section-padding">
          <div className="container" style={{position:'relative',zIndex:2}}>
            <h2 className="section-title text-center">Featured Tournaments</h2>
            <div className="tournament-grid">
              {tournaments.map((t, i) => (
                <motion.div
                  className="tournament-card tournament-card-hover"
                  key={t.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={cardVariants}
                  whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 #E60023, 0 2px 16px 0 rgba(0,0,0,0.18)' }}
                >
                  {t.hot && <span className="hot-badge"><FaFire color="#E60023" /> Hot</span>}
                  <img src={t.img} alt={t.title} />
                  <h3>{t.title}</h3>
                  <p><FaTrophy style={{marginRight:4}}/> Prize Pool: {t.prize}</p>
                  <p><FaUsers style={{marginRight:4}}/> Registered Players: {t.players}</p>
                  <p>Format: {t.format}</p>
                  <a href="/register" className="btn btn-secondary details-btn"><i className="fas fa-info-circle"></i> Details</a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Additional Featured Tournaments Section */}
        <section className="featured-tournaments-section section-padding">
          <div className="container" style={{position:'relative',zIndex:2}}>
            <h2 className="section-title text-center">More Featured Tournaments</h2>
            <div className="tournament-grid">
              {moreTournaments.map((t, i) => (
                <motion.div
                  className="tournament-card tournament-card-hover"
                  key={t.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={cardVariants}
                  whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 #E60023, 0 2px 16px 0 rgba(0,0,0,0.18)' }}
                >
                  <img src={t.img} alt={t.title} />
                  <h3>{t.title}</h3>
                  <p><FaTrophy style={{marginRight:4}}/> Prize Pool: {t.prize}</p>
                  <p><FaUsers style={{marginRight:4}}/> Registered Players: {t.players}</p>
                  <p>Format: {t.format}</p>
                  <a href="/register" className="btn btn-secondary details-btn"><i className="fas fa-info-circle"></i> Details</a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Top Players Section */}
        <section className="section-padding" style={{background:'#181818',color:'#fff'}}>
          <div className="container" style={{position:'relative',zIndex:2}}>
            <h2 className="section-title text-center">Top Players</h2>
            <div style={{display:'flex',justifyContent:'center',gap:32,flexWrap:'wrap'}}>
              <div style={{background:'#232323',borderRadius:12,padding:24,minWidth:180,textAlign:'center',boxShadow:'0 2px 12px #E6002311'}}>
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Player1" style={{width:64,height:64,borderRadius:'50%',marginBottom:8,border:'3px solid #E60023'}}/>
                <div style={{fontWeight:700}}>ShadowStrike</div>
                <div style={{color:'#E60023',fontWeight:600}}>#1</div>
                <div style={{fontSize:'0.95rem',color:'#ccc'}}>2,340 pts</div>
              </div>
              <div style={{background:'#232323',borderRadius:12,padding:24,minWidth:180,textAlign:'center',boxShadow:'0 2px 12px #E6002311'}}>
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Player2" style={{width:64,height:64,borderRadius:'50%',marginBottom:8,border:'3px solid #E60023'}}/>
                <div style={{fontWeight:700}}>Valkyrie</div>
                <div style={{color:'#E60023',fontWeight:600}}>#2</div>
                <div style={{fontSize:'0.95rem',color:'#ccc'}}>2,120 pts</div>
              </div>
              <div style={{background:'#232323',borderRadius:12,padding:24,minWidth:180,textAlign:'center',boxShadow:'0 2px 12px #E6002311'}}>
                <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="Player3" style={{width:64,height:64,borderRadius:'50%',marginBottom:8,border:'3px solid #E60023'}}/>
                <div style={{fontWeight:700}}>AceHunter</div>
                <div style={{color:'#E60023',fontWeight:600}}>#3</div>
                <div style={{fontSize:'0.95rem',color:'#ccc'}}>2,050 pts</div>
              </div>
            </div>
          </div>
        </section>
        {/* Featured Matches Section */}
        <section className="section-padding" style={{background:'#232323',color:'#fff'}}>
          <div className="container" style={{position:'relative',zIndex:2}}>
            <h2 className="section-title text-center">Featured Matches</h2>
            <div style={{display:'flex',justifyContent:'center',gap:32,flexWrap:'wrap'}}>
              <div style={{background:'#181818',borderRadius:12,padding:24,minWidth:220,maxWidth:320,textAlign:'center',boxShadow:'0 2px 12px #E6002311',position:'relative'}}>
                <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:8,marginBottom:16}}>
                  <img src={require('./img/valorant logo.png')} alt="Valorant Logo" style={{width:38,height:38,borderRadius:8,background:'#fff',padding:2}}/>
                  <span style={{fontWeight:700,fontSize:'1.1rem'}}>Valorant: Team Phoenix vs Team Hydra</span>
                </div>
                <div style={{color:'#E60023',fontWeight:600,marginBottom:2}}>Live Now</div>
                <div style={{color:'#ccc',fontSize:'0.98rem'}}>Quarter Finals • Prize: $5,000</div>
              </div>
              <div style={{background:'#181818',borderRadius:12,padding:24,minWidth:220,maxWidth:320,textAlign:'center',boxShadow:'0 2px 12px #E6002311',position:'relative'}}>
                <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:8,marginBottom:16}}>
                  <img src={require('./img/cs 2 logo.png')} alt="CS2 Logo" style={{width:38,height:38,borderRadius:8,background:'#fff',padding:2}}/>
                  <span style={{fontWeight:700,fontSize:'1.1rem'}}>CS2: Alpha Squad vs Night Owls</span>
                </div>
                <div style={{color:'#E60023',fontWeight:600,marginBottom:2}}>Upcoming</div>
                <div style={{color:'#ccc',fontSize:'0.98rem'}}>Semi Finals • Prize: $10,000</div>
              </div>
              <div style={{background:'#181818',borderRadius:12,padding:24,minWidth:220,maxWidth:320,textAlign:'center',boxShadow:'0 2px 12px #E6002311',position:'relative'}}>
                <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:8,marginBottom:16}}>
                  <img src={require('./img/dota 2.jpg')} alt="Dota 2 Logo" style={{width:38,height:38,borderRadius:8,background:'#fff',padding:2}}/>
                  <span style={{fontWeight:700,fontSize:'1.1rem'}}>Dota 2: Radiant vs Dire</span>
                </div>
                <div style={{color:'#E60023',fontWeight:600,marginBottom:2}}>Finished</div>
                <div style={{color:'#ccc',fontSize:'0.98rem'}}>Finals • Prize: $20,000</div>
              </div>
            </div>
            <div style={{textAlign:'center',color:'#aaa',fontSize:'0.98rem',marginTop:16}}>Sign in to view all live and upcoming matches!</div>
          </div>
        </section>
        {/* News (Locked) Section */}
        <section className="section-padding" style={{background:'#181818',color:'#fff'}}>
          <div className="container" style={{position:'relative',zIndex:2}}>
            <h2 className="section-title text-center">Latest News</h2>
            <div style={{display:'flex',justifyContent:'center',gap:32,flexWrap:'wrap'}}>
              <div style={{background:'#232323',borderRadius:12,padding:24,minWidth:220,maxWidth:320,opacity:0.5,position:'relative'}}>
                <div style={{fontWeight:700,marginBottom:8}}>Exclusive: New Tournament Announced!</div>
                <div style={{color:'#ccc',fontSize:'0.98rem'}}>Sign in to read the latest news and updates about upcoming events and features.</div>
                <div style={{position:'absolute',top:8,right:8,background:'#E60023',color:'#fff',borderRadius:8,padding:'2px 8px',fontSize:'0.85rem'}}>Login to unlock</div>
              </div>
              <div style={{background:'#232323',borderRadius:12,padding:24,minWidth:220,maxWidth:320,opacity:0.5,position:'relative'}}>
                <div style={{fontWeight:700,marginBottom:8}}>Patch Notes & Game Updates</div>
                <div style={{color:'#ccc',fontSize:'0.98rem'}}>Sign in to see the latest patch notes and improvements for your favorite games.</div>
                <div style={{position:'absolute',top:8,right:8,background:'#E60023',color:'#fff',borderRadius:8,padding:'2px 8px',fontSize:'0.85rem'}}>Login to unlock</div>
              </div>
            </div>
            <div style={{textAlign:'center',color:'#aaa',fontSize:'0.98rem',marginTop:16}}>Sign in to access exclusive news and updates!</div>
          </div>
        </section>
        {/* Newsletter Signup Section */}
        <section className="section-padding" style={{background:'#222',color:'#fff'}}>
          <div className="container" style={{maxWidth:520,position:'relative',zIndex:2}}>
            <h2 className="section-title text-center">Stay Updated</h2>
            <form style={{display:'flex',gap:12,flexWrap:'wrap',justifyContent:'center'}} onSubmit={e => e.preventDefault()}>
              <input type="email" placeholder="Your email address" required style={{flex:1,minWidth:180,padding:'12px 16px',borderRadius:6,border:'1.5px solid #E60023',fontSize:'1rem'}}/>
              <button type="submit" className="btn btn-primary" style={{minWidth:140}}>Subscribe</button>
            </form>
            <div style={{textAlign:'center',color:'#aaa',fontSize:'0.95rem',marginTop:8}}>Get the latest tournaments and news in your inbox.</div>
          </div>
        </section>
      </main>
      <style>{`
        .hot-badge {
          position: absolute;
          top: 12px;
          right: 16px;
          background: #fff;
          color: #E60023;
          font-weight: 700;
          border-radius: 16px;
          padding: 4px 12px;
          font-size: 0.95rem;
          box-shadow: 0 2px 8px #E6002322;
          display: flex;
          align-items: center;
          gap: 4px;
          z-index: 2;
        }
        .floating-shapes { pointer-events: none; }
      `}</style>
    </>
  );
};

export default HomePage;
