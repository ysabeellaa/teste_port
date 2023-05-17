import html from '../assets/svg/skills/html.svg';
import docker from '../assets/svg/skills/docker.svg';
import css from '../assets/svg/skills/css.svg';
import javascript from '../assets/svg/skills/javascript.svg';
import react from '../assets/svg/skills/react.svg';
import typescript from '../assets/svg/skills/typescript.svg';
import mongoDB from '../assets/svg/skills/mongoDB.svg';
import git from '../assets/svg/skills/git.svg';
import nodejs from '../assets/svg/skills/nodeJs.svg';
import angular from '../assets/svg/skills/angular.svg';
import figma from '../assets/svg/skills/figma.svg';
import flutter from '../assets/svg/skills/flutter.svg';
import vue from '../assets/svg/skills/vue.svg';
import bootstrap from '../assets/svg/skills/bootstrap.svg';
import canva from '../assets/svg/skills/canva.svg';
import tailwind from '../assets/svg/skills/tailwind.svg';
import sass from '../assets/svg/skills/sass.svg';

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html':
      return html;
    case 'docker':
      return docker;
    case 'css':
      return css;
    case 'javascript':
      return javascript;
    case 'react':
      return react;
    case 'typescript':
      return typescript;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'python':
      return python;
    case 'git':
      return git;
    case 'jest':
      return jest;
    case 'rtl':
      return rtl;
    case 'angular':
      return angular;
    case 'node js':
      return nodejs;
    case 'figma':
      return figma;
    case 'vue':
      return vue;
      case 'flutter':
      return flutter;
      case 'canva':
      return canva;
      case 'boostrap':
      return boostrap;
      case 'tailwind':
      return tailwind;
      case 'sass':
      return sass;
    default:
      return null;
  }
};

export default skillsImage;
