import React, { useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';

import './Education.css';
import EducationCard from '../EducationCard/EducationCard';

import { educationData } from '../../data/educationData';

export default function Education() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="education" id="resume" style={ { backgroundColor: theme.secondary } }>

      <div className="education-body">
        <div className="education-description">
          <h1 style={ { color: theme.primary } }>Formação Acadêmica</h1>
          {educationData.map((edu) => (
            <EducationCard
              key={ edu.id }
              id={ edu.id }
              institution={ edu.institution }
              course={ edu.course }
              startYear={ edu.startYear }
              endYear={ edu.endYear }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
