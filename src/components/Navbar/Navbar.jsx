
import React, { useContext, useState } from 'react';

import Fade from 'react-reveal/Fade';
import './Navbar.css';
import {
  Box, Drawer, IconButton,
} from '@mui/material';
import { IoHomeSharp } from 'react-icons/io5';
import { HiDocumentText } from 'react-icons/hi';
import { BsFillGearFill } from 'react-icons/bs';
import { MdPhone } from 'react-icons/md';
import { FaUser, FaFolderOpen } from 'react-icons/fa';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { themeData } from '../../data/themeData';
import { ThemeContext } from '../../context/ThemeContext';


export default function Navbar() {
  const {
    themeColor, selectThemeColor, theme, selectThemeType,
  } = useContext(ThemeContext);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

 

  return (
    <div id="navbar" className="navbar">
      <div className="navbar-container">
        
        <div
          className="button-theme-option"
          style={ { color: theme.tertiary } }
        >
          <form
            className="theme-color-form"
          >
            <label
              className="theme-color-checkbox-title"
              htmlFor="checkbox-theme"
            >
              Moon
              <input
                id="checkbox-theme"
                type="checkbox"
                checked={ theme.type === 'dark' }
                onChange={ selectThemeType }
              />
            </label>

          </form>
        </div>
        <IconButton
          onClick={ () => setIsDrawerOpen(true) }
          size="large"
          edge="start"
          color="inherit"
          aria-label="logo"
        >
          <MenuIcon />
        </IconButton>
      </div>

      <div id="drawer">

        <Drawer
          anchor="right"
          open={ isDrawerOpen }
          onClose={ () => setIsDrawerOpen(false) }
          className="drawer"
        >
          <Box p={ 2 } width="250px" role="presentation" textAlign="right">
            <div className="div-closebtn">
              <CloseIcon
                onClick={ () => setIsDrawerOpen(false) }
                style={ { color: theme.primary } }
                role="button"
                tabIndex="0"
                aria-label="Close"
                className="navlink-item"
              />
            </div>
          </Box>
          <br />

          <Fade right>
            <NavLink
              to="/"
              smooth
              spy="true"
              duration={ 2000 }
              className="navlink-item"
              onClick={ () => setIsDrawerOpen(false) }
            >
              <button
                type="button"
                className="button-item-drawer"
                style={ { color: theme.primary } }
              >
                <IoHomeSharp />
                <span>
                  Home
                </span>
              </button>
            </NavLink>
          </Fade>

          <Fade right>
            <NavLink
              to="/#about"
              smooth
              spy="true"
              duration={ 2000 }
              style={ { color: theme.primary } }
              className="navlink-item"
              onClick={ () => setIsDrawerOpen(false) }
            >
              <button
                type="button"
                className="button-item-drawer"
                style={ { color: theme.primary } }
              >
                <FaUser />
                <span>
                  Sobre mim
                </span>
              </button>
            </NavLink>
          </Fade>

          <Fade right>
            <NavLink
              to="/#skills"
              smooth
              spy="true"
              duration={ 2000 }
              style={ { color: theme.primary } }
              className="navlink-item"
              onClick={ () => setIsDrawerOpen(false) }
            >
              <button
                type="button"
                className="button-item-drawer"
                style={ { color: theme.primary } }
              >
                <BsFillGearFill />
                <span>
                  Skills
                </span>
              </button>
            </NavLink>
          </Fade>

          <Fade right>
            <NavLink
              to="/#projects"
              smooth
              spy="true"
              duration={ 2000 }
              style={ { color: theme.primary } }
              className="navlink-item"
              onClick={ () => setIsDrawerOpen(false) }
            >
              <button
                type="button"
                className="button-item-drawer"
                style={ { color: theme.primary } }
              >
                <FaFolderOpen />
                <span>
                  Projetos
                </span>
              </button>
            </NavLink>
          </Fade>

          <Fade right>
            <NavLink
              to="/#resume"
              smooth
              spy="true"
              duration={ 2000 }
              style={ { color: theme.primary } }
              className="navlink-item"
              onClick={ () => setIsDrawerOpen(false) }
            >
              <button
                type="button"
                className="button-item-drawer"
                style={ { color: theme.primary } }
              >
                <HiDocumentText />
                <span>
                  Resumo
                </span>
              </button>
            </NavLink>
          </Fade>

          <Fade right>
            <NavLink
              to="/#contacts"
              smooth
              spy="true"
              duration={ 2000 }
              style={ { color: theme.primary } }
              className="navlink-item"
              onClick={ () => setIsDrawerOpen(false) }
            >
              <button
                type="button"
                className="button-item-drawer"
                style={ { color: theme.primary } }
              >
                <MdPhone />
                <span>
                  Contato
                </span>
              </button>
            </NavLink>
          </Fade>
        </Drawer>
      </div>
    </div>
  );
}
