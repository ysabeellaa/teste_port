import React, { useContext } from 'react';
import { makeStyles } from '@mui/styles';
import { projectsData } from '../../data/projectsData';
import SingleProject from '../SingleProject/SingleProject';
import { ThemeContext } from '../../context/ThemeContext';
import './Projects.css';

export default function Projects() {
  const { theme } = useContext(ThemeContext);

  const useStyles = makeStyles(() => ({
    viewAllBtn: {
      color: theme.tertiary,
      backgroundColor: theme.primary,
      transition: 'color 0.2s',
      '&:hover': {
        color: theme.secondary,
        backgroundColor: theme.primary,
      },
    },
    viewArr: {
      color: theme.tertiary,
      backgroundColor: theme.secondary70,
      width: '40px',
      height: '40px',
      padding: '0.5rem',
      fontSize: '1.05rem',
      borderRadius: '50%',
      cursor: 'pointer',
      transition: 'background-color 0.2s',
      '&:hover': {
        color: theme.tertiary,
        backgroundColor: theme.secondary,
      },
    },
  }));

  const classes = useStyles();

  return (
    <div id="projects">
      {projectsData.length > 0 && (
        <div
          className="projects"
          id="projects"
          style={ { backgroundColor: theme.secondary } }
        >
          <div className="projects--header">
            <h1 style={ { color: theme.primary } }>Projetos</h1>
          </div>
          <div className="projects--body">
            <div className="projects--bodyContainer">
              {projectsData.slice(0, 10).map((project) => (
                <SingleProject
                  theme={ theme }
                  key={ project.id }
                  id={ project.id }
                  name={ project.projectName }
                  desc={ project.projectDesc }
                  tags={ project.tags }
                  code={ project.code }
                  demo={ project.demo }
                  image={ project.image }
                />
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
