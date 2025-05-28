import React from 'react';
import './About.css';
import groupPic from '../Images/bunkImg/group pic.jpg';

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Chai Bunk DBPura</h1>
          <p className="hero-subtitle">The Ultimate Destination for Tea Lovers!</p>
          <div className="hero-image-container">
            <img 
              src={groupPic}
              alt="Chai Bunk Store"
              className="hero-image"
              
            />
          </div>
        </div>
        <div className="hero-decoration">
          <div className="tea-cup-icon">☕</div>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <h2 className="section-title">Our Story</h2>
            <p className="story-text">
              At Chai Bunk, we believe that a cup of tea can do wonders. It can rejuvenate your senses, 
              bring people together, and create cherished memories. That's why we embarked on a journey 
              to create a chai retail chain that offers a unique and delightful experience for tea enthusiasts.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">What Makes Chaibunk Special</h2>
          <p className="features-intro">Chaibunk has become synonymous with:</p>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🏢</div>
              <h3 className="feature-title">Great Ambience</h3>
              <p className="feature-description">
                Cozy and comfortable outlets perfect for relaxation, productivity, or socializing
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🍵</div>
              <h3 className="feature-title">Great Chai</h3>
              <p className="feature-description">
                Wide variety of specialty teas, expertly brewed to tantalize your taste buds
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3 className="feature-title">Great Price</h3>
              <p className="feature-description">
                High-quality tea at affordable prices, making Chaibunk the perfect destination 
                for anyone looking for a top tea franchise business opportunity
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <h2 className="section-title">Join Our Journey</h2>
            <p className="mission-text">
              At Chai Bunk, we invite you to join us on this incredible growth story. 
              Whether you are a tea enthusiast, a potential franchisee, or someone seeking 
              a cozy space to relax and unwind, we promise to deliver an exceptional experience.
            </p>
            <p className="mission-tagline">
              Together, let's celebrate the joy of tea and create cherished moments, one cup at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">20+</div>
              <div className="stat-label"> Mocktails</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">25+</div>
              <div className="stat-label">Tea Varieties</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5★</div>
              <div className="stat-label">Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Experience Chai Bunk?</h2>
            {/* <p className="cta-text">Visit us today or explore franchise opportunities</p> */}
            <div className="cta-buttons">
              <button className="btn btn-primary">Find Route</button>
              <button className="btn btn-secondary">For Enquiry</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;