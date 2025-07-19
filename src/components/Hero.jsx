import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-card">
      <div className="left">
        <div className="hero-text">
          Hello, I am <br />
          Blessing BJ!
        </div>
        <p className="description">
          This is the best portfolio I have ever seen since i was born in the
          year that everyone is running from covid. This is the best portfolio I
          have ever seen since i was born in the year that everyone is running
          from covid This is the best portfolio I have ever seen since i was
          born in the year that everyone is running from covid
        </p>
        <button>Say Hello</button>
      </div>
      <div className="right">
        <img src="/src/assets/jane.jpeg" />
      </div>
    </div>
  );
};

export default Hero;
