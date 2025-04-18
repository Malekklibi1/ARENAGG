import React from 'react';

const RegisterPage = () => (
  <>
    <section id="login-section" className="login-section section-padding" style={{backgroundImage: "url('league-of-legends-esports.webp')"}}>
      <div className="container">
        <div className="login-form-container">
          <form action="#">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Value" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" placeholder="Value" required />
            </div>
            <div className="form-actions">
              <a href="#" className="forgot-password">Forgot password?</a>
              <div className="form-buttons">
                <button type="submit" className="btn btn-dark">Sign In</button>
                <button type="button" className="btn btn-dark btn-register">Register</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </>
);

export default RegisterPage;
