import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        {/* Left Side - Text */}
        <div className="hero-text">
          <p className="hero-tagline">FITNESS • STRENGTH • DISCIPLINE</p>

          <h1 className="hero-title">
            BUILD YOUR <span className="green">DREAM BODY</span> WITH US
          </h1>

          <p className="hero-desc">
            Join ROYAL GOLD GYM and transform yourself. Expert trainers,
            modern equipment, and a community that pushes you to be your best.
          </p>

         <div className="hero-buttons">
            <a href="#join" className="hero-btn-primary">
              Join Us Today ➤
            </a>
          </div>

          {/* Stats */}
          <div className="hero-stats">
            <div className="stat">
              <h3>500+</h3>
              <p>Members</p>
            </div>
            <div className="stat">
              <h3>30+</h3>
              <p>Trainers</p>
            </div>
            <div className="stat">
              <h3>10+</h3>
              <p>Years</p>
            </div>
          </div>
        </div>

        {/* Right Side - Image/Visual */}
        <div className="hero-image">
          <div className="hero-circle"></div>
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600"
            alt="Gym Workout"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;