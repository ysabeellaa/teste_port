import React, { useContext } from 'react';
import './Footer.css';
import { ThemeContext } from '../../context/ThemeContext';


export default function Footer() {
  
  const { theme } = useContext(ThemeContext);

  return (
    <div className="footer" style={{ backgroundColor: theme.secondary }}>
      <p style={{ color: theme.tertiary }}>
      Developed by Ysabella and inspired by other devs (and study surveys)
      </p>
    </div>
  );
}
