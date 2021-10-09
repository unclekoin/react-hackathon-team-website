import avatar from '../assets/images/avatar.jpeg';
import pavel from '../assets/images/pavel.jpg'
import valeriy from '../assets/images/valeriy.png'
import luda from '../assets/images/luda.jpg'
import dmitry from '../assets/images/dmitry.jpg';
import yuriy from '../assets/images/yuriy.jpg';

const members = [
  {
    _id: '67rdca3eeb7f6fgeed471818',
    firstName: 'Pavel',
    lastName: 'Koryakin',
    dateOfBirth: '1966-01-08',
    photo: pavel,
    about:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum id totam rem facere nam, voluptate excepturi eaque perferendis vel necessitatibus.',
    technologies: {
      html: { name: 'HTML', lavel: '80' },
      css: { name: 'CSS', lavel: '75' },
      bootstrap: { name: 'Bootstrap', lavel: '40' },
      javascript: { name: 'JavaScript', lavel: '70' },
      react: { name: 'React', lavel: '50' },
      node: { name: 'Node.js', lavel: '20' },
      php: { name: 'PHP', level: '15' },
      webpack: { name: 'Webpack', level: '30' },
      git: { name: 'GIT', lavel: '60' },
    },
    socialLinks: {
      facebook: 'https://www.facebook.com/',
      github: 'https://github.com/',
      telegram: 'https://t.me/pavel_koryakin',
      instagram: 'https://www.instagram.com/',
    },
    role: {
      text: "Here's what I did on the project",
      componets: ['Favourites'],
    },
    badge: { name: 'quick eye', color: 'danger' },
    favorite: false,
  },
  {
    _id: '67rdca3eeb7f6fgeed471819',
    firstName: 'Valeriy',
    lastName: 'Harlamov',
    dateOfBirth: '1966-11-05',
    photo: valeriy,
    about:
      'Fullstack publishing specialist, beginner javascript programmer. Favorite entertainment — programming, mathematics, philosophy.',
    technologies: {
      html: { name: 'HTML', lavel: '80' },
      css: { name: 'CSS', lavel: '75' },
      bootstrap: { name: 'Bootstrap', lavel: '40' },
      javascript: { name: 'JavaScript', lavel: '70' },
      react: { name: 'React', lavel: '50' },
      node: { name: 'Node.js', lavel: '20' },
      php: { name: 'PHP', level: '15' },
      webpack: { name: 'Webpack', level: '30' },
      git: { name: 'GIT', lavel: '60' },
    },
    socialLinks: {
      facebook: 'https://www.facebook.com/',
      github: 'https://github.com/',
      telegram: 'https://t.me/Valera5454',
      instagram: 'https://www.instagram.com/',
    },
    role: { text: "Here's what I did on the project", componets: ['Navbar'] },
    badge: { name: 'sad sorcerer', color: 'secondary' },
    favorite: false,
  },
  {
    _id: '67rdca3eeb7f6fgeed471820',
    firstName: 'Liudmyla',
    lastName: 'Duvivier',
    dateOfBirth: '1974-07-19',
    photo: luda,
    about:
      'Front end software developer.',
    technologies: {
      html: { name: 'HTML', lavel: '80' },
      css: { name: 'CSS', lavel: '75' },
      bootstrap: { name: 'Bootstrap', lavel: '40' },
      javascript: { name: 'JavaScript', lavel: '70' },
      react: { name: 'React', lavel: '50' },
      node: { name: 'Node.js', lavel: '20' },
      php: { name: 'PHP', level: '15' },
      webpack: { name: 'Webpack', level: '30' },
      git: { name: 'GIT', lavel: '60' },
    },
    socialLinks: {
      facebook: 'https://www.facebook.com/',
      github: 'https://github.com/',
      telegram: 'https://t.me/ludmyladev',
      instagram: 'https://www.instagram.com/',
    },
    role: {
      text: "Here's what I did on the project",
      componets: ['Badge', 'Button'],
    },
    badge: { name: 'quick eye', color: 'danger' },
    favorite: false,
  },
  {
    _id: '67rdca3eeb7f6fgeed471821',
    firstName: 'Dmitry',
    lastName: 'Lavrov',
    dateOfBirth: '1965-11-23',
    photo: dmitry,
    about:
      'At school, when I was little, they asked me who I wanted to become when I grew up. I said I wanted to be an archaeologist.To the question "why?", replied that I like to find something ancient, buried in the ground.',
    technologies: {
      html: { name: 'HTML', lavel: '80' },
      css: { name: 'CSS', lavel: '75' },
      bootstrap: { name: 'Bootstrap', lavel: '40' },
      javascript: { name: 'JavaScript', lavel: '70' },
      react: { name: 'React', lavel: '50' },
      node: { name: 'Node.js', lavel: '20' },
      php: { name: 'PHP', level: '15' },
      webpack: { name: 'Webpack', level: '30' },
      git: { name: 'GIT', lavel: '60' },
    },
    socialLinks: {
      facebook: 'https://www.facebook.com/',
      github: 'https://github.com/',
      telegram: 'https://t.me/Dmi_Lavrov',
      instagram: 'https://www.instagram.com/',
    },
    role: {
      text: "Here's what I did on the project",
      componets: ['Progress', 'About Page'],
    },
    badge: { name: 'agile badger', color: 'success' },
    favorite: false,
  },
  {
    _id: '67rdca3eeb7f6fgeed471822',
    firstName: 'Andrey',
    lastName: 'Rybnikov',
    dateOfBirth: '1966-02-18',
    photo: avatar,
    about:
      'I like to set tasks and solve them.',
    technologies: {
      html: { name: 'HTML', lavel: '80' },
      css: { name: 'CSS', lavel: '75' },
      bootstrap: { name: 'Bootstrap', lavel: '40' },
      javascript: { name: 'JavaScript', lavel: '70' },
      react: { name: 'React', lavel: '50' },
      node: { name: 'Node.js', lavel: '20' },
      php: { name: 'PHP', level: '15' },
      webpack: { name: 'Webpack', level: '30' },
      git: { name: 'GIT', lavel: '60' },
    },
    socialLinks: {
      facebook: 'https://www.facebook.com/',
      github: 'https://github.com/',
      telegram: 'https://t.me/Egolege',
      instagram: 'https://www.instagram.com/',
    },
    role: {
      text: "Here's what I did on the project",
      componets: ['Slider', 'Footer'],
    },
    badge: { name: 'egolege', color: 'info' },
    favorite: false,
  },
  {
    _id: '67rdca3eeb7f6fgeed471823',
    firstName: 'Yuriy',
    lastName: 'Vedernikov',
    dateOfBirth: '1978-08-31',
    photo: yuriy,
    about:
      'I like and learn to program in javascript.',
    technologies: {
      html: { name: 'HTML', lavel: '80' },
      css: { name: 'CSS', lavel: '75' },
      bootstrap: { name: 'Bootstrap', lavel: '40' },
      javascript: { name: 'JavaScript', lavel: '70' },
      react: { name: 'React', lavel: '50' },
      node: { name: 'Node.js', lavel: '20' },
      php: { name: 'PHP', level: '15' },
      webpack: { name: 'Webpack', level: '30' },
      git: { name: 'GIT', lavel: '60' },
    },
    socialLinks: {
      facebook: 'https://www.facebook.com/',
      github: 'https://github.com/',
      telegram: 'https://t.me/yuriy_yupiter',
      instagram: 'https://www.instagram.com/',
    },
    role: {
      text: "Here's what I did on the project",
      componets: ['Members Card', 'Breadcrumbs'],
    },
    badge: { name: 'moderate pedant', color: 'primary' },
    favorite: false,
  },
];

export default members;
