import pavel from '../assets/images/pavel.jpg';
import valeriy from '../assets/images/valeriy.png';
import luda from '../assets/images/luda.jpg';
import dmitry from '../assets/images/dmitry.jpg';
import andrey from '../assets/images/andrey.jpg';
import yuriy from '../assets/images/yuriy.jpg';

const colors = {
  html: '#fad390',
  css: '#fa983a',
  bootstrap: '#e55039',
  javascript: '#1e3799',
  react: '#4a69bd',
  node: '#60a3bc',
  php: '#38ada9',
  webpack: '#b71540',
  git: '#e58e26',
};

const members = [
  {
    _id: '67rdca3eeb7f6fgeed471818',
    firstName: 'Pavel',
    lastName: 'Koryakin',
    dateOfBirth: '1966-01-08',
    photo: pavel,
    about:
      'I worked in sales for almost 30 years, but became interested in e-commerce and unexpectedly began to master JavaScript. This activity fascinated me to such an extent that I gave up everything and decided to become a good web developer.',
    technologies: {
      html: { name: 'HTML', lavel: '80', color: colors.html },
      css: { name: 'CSS', lavel: '75', color: colors.css },
      bootstrap: { name: 'Bootstrap', lavel: '40', color: colors.bootstrap },
      javascript: { name: 'JavaScript', lavel: '70', color: colors.javascript },
      react: { name: 'React', lavel: '50', color: colors.react },
      node: { name: 'Node.js', lavel: '20', color: colors.node },
      php: { name: 'PHP', level: '15', color: colors.php },
      webpack: { name: 'Webpack', level: '30', color: colors.webpack },
      git: { name: 'GIT', lavel: '60', color: colors.git },
    },
    socialLinks: {
      facebook: 'https://www.facebook.com/',
      github: 'https://github.com/',
      telegram: 'https://t.me/pavel_koryakin',
      instagram: 'https://www.instagram.com/',
    },
    role: {
      text: "Here's what I did on the project:",
      componets: ['Project structure', 'Routing', 'Favourites Page', 'Card'],
    },
    badge: { name: 'quick eye', color: 'danger', textColor: false },
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
      html: { name: 'HTML', lavel: '90', color: colors.html },
      css: { name: 'CSS', lavel: '60', color: colors.css },
      bootstrap: { name: 'Bootstrap', lavel: '20', color: colors.bootstrap },
      javascript: { name: 'JavaScript', lavel: '70', color: colors.javascript },
      react: { name: 'React', lavel: '50', color: colors.react },
      git: { name: 'GIT', lavel: '60', color: colors.git },
    },
    socialLinks: {
      facebook: 'https://www.facebook.com/',
      github: 'https://github.com/',
      telegram: 'https://t.me/Valera5454',
      instagram: 'https://www.instagram.com/',
    },
    role: {
      text: "Here's what I did on the project:",
      componets: ['Navbar', 'Page 404'],
    },
    badge: { name: 'sad sorcerer', color: 'secondary', textColor: false },
  },
  {
    _id: '67rdca3eeb7f6fgeed471820',
    firstName: 'Liudmyla',
    lastName: 'Duvivier',
    dateOfBirth: '1974-07-19',
    photo: luda,
    about:
      'Front end software developer. Creative, communicative and able to quickly problem solve persone.',
    technologies: {
      html: { name: 'HTML', lavel: '90', color: colors.html },
      css: { name: 'CSS', lavel: '90', color: colors.css },
      bootstrap: { name: 'Bootstrap', lavel: '90', color: colors.bootstrap },
      javascript: { name: 'JavaScript', lavel: '90', color: colors.javascript },
      react: { name: 'React', lavel: '90', color: colors.react },
      php: { name: 'PHP', level: '90', color: colors.php },
      git: { name: 'GIT', lavel: '90', color: colors.git },
    },
    socialLinks: {
      facebook: 'https://www.facebook.com/',
      github: 'https://github.com/',
      telegram: 'https://t.me/ludmyladev',
      instagram: 'https://www.instagram.com/',
    },
    role: {
      text: "Here's what I did on the project:",
      componets: ['Badge', 'Button'],
    },
    badge: { name: 'team soul', color: 'warning', textColor: true },
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
      html: { name: 'HTML', lavel: '50', color: colors.html },
      css: { name: 'CSS', lavel: '30', color: colors.css },
      javascript: { name: 'JavaScript', lavel: '60', color: colors.javascript },
      react: { name: 'React', lavel: '40', color: colors.react },
      git: { name: 'GIT', lavel: '50', color: colors.git },
    },
    socialLinks: {
      facebook: 'https://www.facebook.com/',
      github: 'https://github.com/',
      telegram: 'https://t.me/Dmi_Lavrov',
      instagram: 'https://www.instagram.com/',
    },
    role: {
      text: "Here's what I did on the project:",
      componets: ['Progress', 'About Page', 'Contacts Page'],
    },
    badge: { name: 'agile badger', color: 'success', textColor: false },
  },
  {
    _id: '67rdca3eeb7f6fgeed471822',
    firstName: 'Andrey',
    lastName: 'Rybnikov',
    dateOfBirth: '1966-02-18',
    photo: andrey,
    about: 'I like to set tasks and solve them.',
    technologies: {
      html: { name: 'HTML', lavel: '90', color: colors.html },
      css: { name: 'CSS', lavel: '90', color: colors.css },
      bootstrap: { name: 'Bootstrap', lavel: '40', color: colors.bootstrap },
      javascript: { name: 'JavaScript', lavel: '60', color: colors.javascript },
      react: { name: 'React', lavel: '40', color: colors.react },
      php: { name: 'PHP', level: '40', color: colors.php },
      git: { name: 'GIT', lavel: '10', color: colors.git },
    },
    socialLinks: {
      facebook: 'https://www.facebook.com/',
      github: 'https://github.com/',
      telegram: 'https://t.me/Egolege',
      instagram: 'https://www.instagram.com/',
    },
    role: {
      text: "Here's what I did on the project:",
      componets: ['Slider', 'Footer', 'Header', 'MemberCard', 'Styles'],
    },
    badge: { name: 'egolege', color: 'info', textColor: false },
  },
  {
    _id: '67rdca3eeb7f6fgeed471823',
    firstName: 'Yuriy',
    lastName: 'Vedernikov',
    dateOfBirth: '1978-08-31',
    photo: yuriy,
    about: 'I like and learn to program in javascript.',
    technologies: {
      html: { name: 'HTML', lavel: '40', color: colors.html },
      css: { name: 'CSS', lavel: '30', color: colors.css },
      bootstrap: { name: 'Bootstrap', lavel: '10', color: colors.bootstrap },
      javascript: { name: 'JavaScript', lavel: '50', color: colors.javascript },
      react: { name: 'React', lavel: '20', color: colors.react },
      node: { name: 'Node.js', lavel: '5', color: colors.node },
      webpack: { name: 'Webpack', level: '10', color: colors.webpack },
      git: { name: 'GIT', lavel: '10', color: colors.git },
    },
    socialLinks: {
      facebook: 'https://www.facebook.com/',
      github: 'https://github.com/',
      telegram: 'https://t.me/yuriy_yupiter',
      instagram: 'https://www.instagram.com/',
    },
    role: {
      text: "Here's what I did on the project:",
      componets: ['Members Card', 'Breadcrumbs'],
    },
    badge: { name: 'moderate pedant', color: 'primary', textColor: false },
  },
];

export default members;
