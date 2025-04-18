import React from 'react';

const ContactPage = () => (
  <>
    <section className="mission-contact-section section-padding" style={{backgroundImage: "url('gettyimages-566016893.jpg')"}}>
      <div className="container">
        <div className="mission-content text-center">
          <h2 className="section-title">Our Mission</h2>
          <p>To empower gamers of all skill levels to compete and connect</p>
        </div>
        <div className="contact-form-container">
          <h2 className="section-title text-center">Connect With Us</h2>
          <form action="#">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="first-name">First name</label>
                <input type="text" id="first-name" name="first-name" placeholder="Value" required />
              </div>
              <div className="form-group">
                <label htmlFor="last-name">Last name</label>
                <input type="text" id="last-name" name="last-name" placeholder="Value" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="contact-email">Email address</label>
              <input type="email" id="contact-email" name="contact-email" placeholder="example@domain.net" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your message</label>
              <textarea id="message" name="message" rows="5" placeholder="Enter your question or message" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </>
);

export default ContactPage;
