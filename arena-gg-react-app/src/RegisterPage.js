import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import lolBanner from './img/League of legend .jpg.webp';
import * as THREE from 'three';
import FOG from 'vanta/dist/vanta.fog.min';

const RegisterPage = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const vantaRef = useRef(null);

  useEffect(() => {
    const vantaEffect = FOG({
      el: vantaRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
    });
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (form.email.trim().toLowerCase() === 'admin@admin' && form.password === 'admin') {
      setError('');
      navigate('/user');
    } else {
      setError('Invalid credentials. Try admin@admin / admin');
    }
  };

  return (
    <div ref={vantaRef} style={{position:'fixed',top:0,left:0,width:'100vw',height:'100vh',zIndex:0}}>
      {/* Vanta.js fog background */}
      <section id="login-section" className="login-section section-padding" style={{position:'relative',zIndex:1,background:'transparent',display:'flex',alignItems:'center',justifyContent:'center',minHeight:'100vh'}}>
        <div className="container" style={{display:'flex',justifyContent:'center',alignItems:'center',minHeight:'100vh'}}>
          <div className="login-form-container enhanced-login-card" style={{
            background: 'rgba(34,34,40,0.92)',
            boxShadow: '0 8px 40px 0 #E6002340, 0 2px 16px 0 #0008',
            border: '2.5px solid #E60023',
            borderRadius: '18px',
            padding: '40px 36px',
            maxWidth: 420,
            width: '100%',
            position: 'relative',
            overflow: 'hidden',
            zIndex: 2,
            backdropFilter: 'blur(8px) saturate(120%)',
            animation: 'floatUp 1.2s cubic-bezier(.4,2,.6,1)'
          }}>
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginBottom:24}}>
              <img src={require('./img/ArenaGG logo.png')} alt="ArenaGG Logo" style={{width:64,height:64,borderRadius:16,boxShadow:'0 0 24px #E60023',marginBottom:8}}/>
              <h2 className="section-title text-center" style={{color:'#fff',textShadow:'0 0 16px #E60023'}}>Sign in to ArenaGG</h2>
              <div style={{color:'#ccc',fontSize:'1.05rem',marginBottom:8}}>Welcome back! Please login to your account.</div>
            </div>
            <form onSubmit={handleSubmit} autoComplete="on">
              <div className="form-group">
                <label htmlFor="email" style={{color:'#fff'}}>Email</label>
                <input type="email" id="email" name="email" placeholder="admin@admin" value={form.email} onChange={handleChange} required style={{background:'#23232a',color:'#fff',border:'1.5px solid #E60023'}}/>
              </div>
              <div className="form-group">
                <label htmlFor="password" style={{color:'#fff'}}>Password</label>
                <input type="password" id="password" name="password" placeholder="admin" value={form.password} onChange={handleChange} required style={{background:'#23232a',color:'#fff',border:'1.5px solid #E60023'}}/>
              </div>
              {error && <div style={{ color: '#ff003c', marginBottom: 10, fontWeight:600, textAlign:'center' }}>{error}</div>}
              <div className="form-actions" style={{marginTop:18,display:'flex',flexDirection:'column',alignItems:'center'}}>
                <button type="submit" className="btn btn-primary" style={{width:'100%',fontSize:'1.1rem',padding:'14px 0',borderRadius:8,boxShadow:'0 0 16px #E60023'}}>Sign In</button>
                <div style={{marginTop:16,color:'#aaa',fontSize:'0.98rem'}}>Demo: <b>admin@admin</b> / <b>admin</b></div>
              </div>
            </form>
            <div style={{marginTop:32,textAlign:'center',color:'#888',fontSize:'0.98rem'}}>
              Don't have an account? <a href="#" style={{color:'#E60023',textDecoration:'underline'}}>Register</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegisterPage;
