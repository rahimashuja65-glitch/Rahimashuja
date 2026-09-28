import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        
        {/* Column 1: Fitness */}
        <div className="feature-card dark-card">
          <h2>FITNESS</h2>
          <p>
            Achieve your fitness goals with premium strength and cardio equipment, 
            designed for every workout style.
          </p>
        </div>
        <div className="feature-card dark-card">
        
  <h2>STRENGTH</h2>
  <p>
    Build muscle and power with our heavy-duty free weights, 
    power racks, and expert strength coaching.
  </p>
</div>
        </div>

        {/* Column 3: Atmosphere (Ab same dark style mein) */}
        <div className="feature-card dark-card">
          <h2>ATMOSPHERE</h2>
          <p>
            Stay motivated in a vibrant, inspiring atmosphere with stunning 
            aesthetics designed to elevate your experience.
          </p>
        </div>
    </section>
  );
};

export default Features;