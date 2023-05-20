import React, { useContext } from 'react';
import { IoMdSunny, IoMdMoon } from 'react-icons/io';
import { ThemeContext } from '../context/ThemeContext';
import './Toggle.css';

export default function ThemeToggle() {
  const { theme, selectThemeType } = useContext(ThemeContext);

  return (
    <div className="toggle">
      <input
        type="checkbox"
        className="checkbox"
        id="ckb"
        checked={theme.type === 'dark'}
        onChange={selectThemeType}
      />
      <label className="label" htmlFor="ckb">
        <i className="icon sun"> <IoMdSunny/> </i>
        <i className="icon moon"><IoMdMoon/></i>
        <div className="ball"></div>
      </label>
    </div>
  );
}
