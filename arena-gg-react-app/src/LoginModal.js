import React from 'react';

function LoginModal({ show, onClose, onLogin }) {
  if (!show) return null;
  return (
    <div id="login-modal" className="active">
      <div className="login-modal-content">
        <button className="login-modal-close" onClick={onClose}>&times;</button>
        <h2>Login Required</h2>
        <form onSubmit={e => { e.preventDefault(); onLogin(); }}>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;