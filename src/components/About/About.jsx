import React, { useContext } from 'react';
import './About.css';
import { ThemeContext } from '../../context/ThemeContext';
import { aboutData } from '../../data/aboutData';

export default function About() {
  const { theme } = useContext(ThemeContext);
  return (

    <div className="about" id="about" style={ { backgroundColor: theme.secondary } }>
      <div className="about-body">
        <div className="about-description">
          <h2 style={ { color: theme.primary } }>{aboutData.title}</h2>
          <p style={ { color: theme.tertiary80 } }>
            {aboutData.description1}
            <br />
            <br />
            {aboutData.description2}
            <br />
            <br />
            {aboutData.description3}
          </p>
        </div>
        <div className="about-img">
        </div>
      </div>
    </div>
  );
}
