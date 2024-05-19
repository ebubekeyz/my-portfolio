import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: '/project1.png',
    url: 'https://invest-template-frontend.netlify.app/',
    github: 'https://github.com/ebubekeyz/investTemplate-front',
    title: 'Investment Project',
    text: 'This investment project built with React is a comprehensive application that helps users manage their investments effectively, providing a robust platform for investors.',
  },
  {
    id: nanoid(),
    img: '/project2.png',
    url: 'https://comfistore-frontend.netlify.app/',
    github: 'https://github.com/ebubekeyz/comfiStore-frontend',
    title: 'Ecommerce project',
    text: 'This e-commerce React project is a comprehensive application that covers various aspects of online shopping, from user authentication to order management. ',
  },
  // {
  //   id: nanoid(),
  //   img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
  //   url: 'https://react-projects.netlify.app/',
  //   github: 'https://github.com/john-smilga',
  //   title: 'third project',
  //   text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  // },
];
