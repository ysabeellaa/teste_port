import React, { useContext } from 'react';
import './Footer.css';
import { ThemeContext } from '../../context/ThemeContext';
import { headerData } from '../../data/headerData';

export default function Footer() {
  const shortname = (name) => {
    if (name.length > 10) {
      return name.split(' ')[0];
    }
    return name;
  };
  const { theme } = useContext(ThemeContext);

  return (
    <div className="footer" style={{ backgroundColor: theme.secondary }}>
      <p style={{ color: theme.tertiary }}>
      Developed by Ysabella and inspired by other devs (and study surveys)
      </p>
    </div>
  );
}
