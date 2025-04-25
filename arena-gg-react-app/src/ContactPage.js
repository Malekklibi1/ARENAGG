import React, { useRef, useEffect } from 'react';
import FOG from 'vanta/dist/vanta.fog.min';
import * as THREE from 'three';
import contactBanner from './img/banner2.jpg';

const ContactPage = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current) {
      vantaEffect.current = FOG({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0xff0055,
        midtoneColor: 0x222222,
        lowlightColor: 0x111111,
        baseColor: 0x000000,
        blurFactor: 0.6,
        speed: 1.2,
        zoom: 1.0
      });
    }
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <div ref={vantaRef} style={{position:'fixed',top:0,left:0,width:'100vw',height:'100vh',zIndex:0}}>
      {/* Vanta.js fog background */}
      <main style={{position:'relative',zIndex:1}}>
        <section className="mission-contact-section section-padding" style={{position:'relative',overflow:'hidden',padding:0,minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center'}}>
          {/* Video background absolutely positioned, covers section only */}
          <video
            src={require('./img/contact.mp4')}
            autoPlay
            loop
            muted
            playsInline
            style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',objectFit:'cover',zIndex:0,pointerEvents:'none'}}
          />
          <div style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',background:'rgba(10,10,10,0.7)',zIndex:1,pointerEvents:'none'}}></div>
          <div className="container" style={{position:'relative',zIndex:2,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',minHeight:'100vh'}}>
            <div className="mission-content text-center" style={{marginBottom: 40}}>
              <h2 className="section-title">Our Mission</h2>
              <p>To empower gamers of all skill levels to compete and connect.<br/>We believe in building a vibrant, inclusive, and competitive eSports community for everyone.</p>
            </div>
            <div className="contact-form-container enhanced-contact-card" style={{maxWidth:500,width:'100%',background:'rgba(34,34,40,0.97)',boxShadow:'0 8px 40px 0 #E6002340, 0 2px 16px 0 #0008',border:'2.5px solid #E60023',borderRadius:20,padding:'38px 32px',position:'relative',overflow:'hidden',zIndex:2,backdropFilter:'blur(14px) saturate(140%)',margin:'0 auto'}}>
              <h2 className="section-title text-center" style={{color:'#fff',textShadow:'0 0 16px #E60023'}}>Connect With Us</h2>
              <p style={{color:'#ccc',textAlign:'center',marginBottom:18}}>Have a question, suggestion, or partnership inquiry? Fill out the form below and our team will get back to you soon!</p>
              <form onSubmit={e => e.preventDefault()}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="first-name" style={{color:'#fff'}}>First name</label>
                    <input type="text" id="first-name" name="first-name" placeholder="Your first name" required style={{background:'#23232a',color:'#fff',border:'1.5px solid #E60023'}} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="last-name" style={{color:'#fff'}}>Last name</label>
                    <input type="text" id="last-name" name="last-name" placeholder="Your last name" required style={{background:'#23232a',color:'#fff',border:'1.5px solid #E60023'}} />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email" style={{color:'#fff'}}>Email address</label>
                  <input type="email" id="contact-email" name="contact-email" placeholder="example@domain.net" required style={{background:'#23232a',color:'#fff',border:'1.5px solid #E60023'}} />
                </div>
                <div className="form-group">
                  <label htmlFor="subject" style={{color:'#fff'}}>Subject</label>
                  <input type="text" id="subject" name="subject" placeholder="Subject (e.g. Partnership, Support, Feedback)" required style={{background:'#23232a',color:'#fff',border:'1.5px solid #E60023'}} />
                </div>
                <div className="form-group">
                  <label htmlFor="message" style={{color:'#fff'}}>Your message</label>
                  <textarea id="message" name="message" rows="5" placeholder="Enter your question or message" required style={{background:'#23232a',color:'#fff',border:'1.5px solid #E60023',resize:'vertical'}}></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary" style={{width:'100%',fontSize:'1.13rem',padding:'15px 0',borderRadius:9,boxShadow:'0 0 18px #E60023, 0 2px 8px #0008',fontWeight:700,letterSpacing:'0.03em'}}>Send Message</button>
                </div>
              </form>
              <div style={{marginTop:28,textAlign:'center',color:'#aaa',fontSize:'0.98rem'}}>
                Or email us directly at <a href="mailto:support@arenagg.com" style={{color:'#E60023',textDecoration:'underline'}}>support@arenagg.com</a><br/>
                Follow us on <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" style={{color:'#E60023',textDecoration:'underline'}}>Twitter</a> and <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" style={{color:'#E60023',textDecoration:'underline'}}>Instagram</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;
